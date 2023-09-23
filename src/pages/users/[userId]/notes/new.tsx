import { Routes } from "@blitzjs/next"
import Link from "next/link"
import { useParam } from "@blitzjs/next"
import { useRouter } from "next/router"
import { useMutation } from "@blitzjs/rpc"
import Layout from "src/core/layouts/Layout"
import { CreateNoteSchema } from "src/notes/schemas"
import createNote from "src/notes/mutations/createNote"
import { NoteForm, FORM_ERROR } from "src/notes/components/NoteForm"
import { Suspense } from "react"

const NewNotePage = () => {
  const router = useRouter()
  const userId = useParam("userId", "number")
  const [createNoteMutation] = useMutation(createNote)

  return (
    <Layout title={"Create New Note"}>
      <h1>Create New Note</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <NoteForm
          submitText="Create Note"
          schema={CreateNoteSchema}
          // initialValues={{}}
          onSubmit={async (values) => {
            try {
              const note = await createNoteMutation({
                ...values,
                userId: userId!,
              })
              await router.push(Routes.ShowNotePage({ userId: userId!, noteId: note.id }))
            } catch (error: any) {
              console.error(error)
              return {
                [FORM_ERROR]: error.toString(),
              }
            }
          }}
        />
      </Suspense>
      <p>
        <Link href={Routes.NotesPage({ userId: userId! })}>Notes</Link>
      </p>
    </Layout>
  )
}

NewNotePage.authenticate = true

export default NewNotePage
