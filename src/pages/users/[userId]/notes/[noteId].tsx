import { Suspense } from "react"
import { Routes } from "@blitzjs/next"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useQuery, useMutation } from "@blitzjs/rpc"
import { useParam } from "@blitzjs/next"

import Layout from "src/core/layouts/Layout"
import getNote from "src/notes/queries/getNote"
import deleteNote from "src/notes/mutations/deleteNote"

export const Note = () => {
  const router = useRouter()
  const noteId = useParam("noteId", "number")
  const userId = useParam("userId", "number")
  const [deleteNoteMutation] = useMutation(deleteNote)
  const [note] = useQuery(getNote, { id: noteId })

  return (
    <>
      <Head>
        <title>Note {note.id}</title>
      </Head>

      <div>
        <h1>Note {note.id}</h1>
        <pre>{JSON.stringify(note, null, 2)}</pre>

        <Link href={Routes.EditNotePage({ userId: userId!, noteId: note.id })}>Edit</Link>

        <button
          type="button"
          onClick={async () => {
            if (window.confirm("This will be deleted")) {
              await deleteNoteMutation({ id: note.id })
              await router.push(Routes.NotesPage({ userId: userId! }))
            }
          }}
          style={{ marginLeft: "0.5rem" }}
        >
          Delete
        </button>
      </div>
    </>
  )
}

const ShowNotePage = () => {
  const userId = useParam("userId", "number")

  return (
    <div>
      <p>
        <Link href={Routes.NotesPage({ userId: userId! })}>Notes</Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <Note />
      </Suspense>
    </div>
  )
}

ShowNotePage.authenticate = true
ShowNotePage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowNotePage
