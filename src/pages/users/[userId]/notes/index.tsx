import { Suspense } from "react"
import { Routes } from "@blitzjs/next"
import Head from "next/head"
import Link from "next/link"
import { useMutation, usePaginatedQuery } from "@blitzjs/rpc"
import { useParam } from "@blitzjs/next"
import { useRouter } from "next/router"
import Layout from "src/core/layouts/Layout"
import getNotes from "src/notes/queries/getNotes"
import { EditorContainer } from "src/core/components/editor/EditorContainer"
import { useCurrentUser } from "src/users/hooks/useCurrentUser"
import styles from "src/styles/Home.module.css"
import logout from "src/auth/mutations/logout"
import { List } from "src/core/components/Dashboard/List"

const ITEMS_PER_PAGE = 100

export const NotesList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const userId = useParam("userId", "number")
  const [{ notes, hasMore }] = usePaginatedQuery(getNotes, {
    where: { user: { id: userId! } },
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
  const goToNextPage = () => router.push({ query: { page: page + 1 } })

  return (
    <div>
      <List type="Notes" elements={notes} />
      {/* <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Link href={Routes.ShowNotePage({ userId: userId!, noteId: note.id })}>
              {note.title}
            </Link>
          </li>
        ))}
      </ul> */}

      {/* <button disabled={page === 0} onClick={goToPreviousPage}>
        Previous
      </button>
      <button disabled={!hasMore} onClick={goToNextPage}>
        Next
      </button> */}
    </div>
  )
}

const NotesPage = () => {
  const userId = useParam("userId", "number")

  if (!userId) return <div>User ID is missing</div>

  const note = {}

  return (
    <Layout>
      <Head>
        <title className="bg-blue">Notes</title>
      </Head>
      <Suspense fallback={<div>Loading Notes...</div>}>
        <section className="stats stats-vertical col-span-12 w-full shadow-sm xl:stats-horizontal">
          {/* <div className="stat"> */}
          {/* <h1>Note 1</h1> */}
          {/* <EditorContainer element={note} /> */}
          <NotesList />
          {/* </div> */}
        </section>
      </Suspense>
    </Layout>
  )
}

export default NotesPage
