import { Suspense } from "react"
import { Routes } from "@blitzjs/next"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useQuery, useMutation } from "@blitzjs/rpc"
import { useParam } from "@blitzjs/next"

import Layout from "src/core/layouts/Layout"
import { UpdateNoteSchema } from "src/notes/schemas"
import getNote from "src/notes/queries/getNote"
import updateNote from "src/notes/mutations/updateNote"
import { NoteForm, FORM_ERROR } from "src/notes/components/NoteForm"

export const EditNote = () => {
  const router = useRouter()
  const noteId = useParam("noteId", "number")
  const userId = useParam("userId", "number")
  const [note, { setQueryData }] = useQuery(
    getNote,
    { id: noteId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )
  const [updateNoteMutation] = useMutation(updateNote)

  return (
    <>
      <Head>
        <title>Edit Note {note.id}</title>
      </Head>

      <div>
        <h1>Edit Note {note.id}</h1>
        <pre>{JSON.stringify(note, null, 2)}</pre>
        <Suspense fallback={<div>Loading...</div>}>
          <NoteForm
            submitText="Update Note"
            schema={UpdateNoteSchema}
            initialValues={note}
            onSubmit={async (values) => {
              try {
                const updated = await updateNoteMutation({
                  id: note.id,
                  ...values,
                })
                await setQueryData(updated)
                await router.push(Routes.ShowNotePage({ userId: userId!, noteId: updated.id }))
              } catch (error: any) {
                console.error(error)
                return {
                  [FORM_ERROR]: error.toString(),
                }
              }
            }}
          />
        </Suspense>
      </div>
    </>
  )
}

const EditNotePage = () => {
  const userId = useParam("userId", "number")

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditNote />
      </Suspense>

      <p>
        <Link href={Routes.NotesPage({ userId: userId! })}>Notes</Link>
      </p>
    </div>
  )
}

EditNotePage.authenticate = true
EditNotePage.getLayout = (page) => <Layout>{page}</Layout>

export default EditNotePage
