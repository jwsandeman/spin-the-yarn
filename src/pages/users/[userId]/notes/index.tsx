import { Suspense } from "react"
import { Routes } from "@blitzjs/next"
import Head from "next/head"
import Link from "next/link"
import { useMutation, usePaginatedQuery } from "@blitzjs/rpc"
import { useParam } from "@blitzjs/next"
import { useRouter } from "next/router"
import Layout from "src/core/layouts/Layout"
import getNotes from "src/notes/queries/getNotes"
import { Editor } from "src/core/components/Editor"
import { useCurrentUser } from "src/users/hooks/useCurrentUser"
import styles from "src/styles/Home.module.css"
import logout from "src/auth/mutations/logout"

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

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  if (currentUser) {
    return (
      <>
        <button
          className={styles.button}
          onClick={async () => {
            await logoutMutation()
          }}
        >
          Logout
        </button>
        <div>
          User id: <code>{currentUser.id}</code>
          <br />
          User role: <code>{currentUser.role}</code>
        </div>
      </>
    )
  } else {
    return (
      <>
        <Link href={Routes.SignupPage()} className={styles.button}>
          <strong>Sign Up</strong>
        </Link>
        <Link href={Routes.LoginPage()} className={styles.loginButton}>
          <strong>Login</strong>
        </Link>
      </>
    )
  }
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
          <Suspense fallback="Loading...">
            <UserInfo />
          </Suspense>
          {/* <NotesList /> */}
          <Editor element={note} />
        </Suspense>
      </div>
    </Layout>
  )
}

export default NotesPage
