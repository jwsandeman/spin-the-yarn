import { Suspense } from "react"
import { Routes } from "@blitzjs/next"
import Head from "next/head"
import Link from "next/link"
import { usePaginatedQuery } from "@blitzjs/rpc"
import { useParam } from "@blitzjs/next"
import { useRouter } from "next/router"
import Layout from "src/core/layouts/Layout"
import getNotes from "src/notes/queries/getNotes"
import { Editor } from "src/core/components/Editor"

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
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Link href={Routes.ShowNotePage({ userId: userId!, noteId: note.id })}>
              {note.title}
            </Link>
          </li>
        ))}
      </ul>

      <button disabled={page === 0} onClick={goToPreviousPage}>
        Previous
      </button>
      <button disabled={!hasMore} onClick={goToNextPage}>
        Next
      </button>
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
      {/* <div className="bg-green-100 text-green-500"> */}
      <div className="">
        {/* <p>
          <Link href={Routes.NewNotePage({ userId: userId })}>Create Note</Link>
        </p> */}
        <Suspense fallback={<div>Loading Notes...</div>}>
          {/* <NotesList /> */}
          <Editor element={note} />
        </Suspense>
      </div>
    </Layout>
  )
}

export default NotesPage
