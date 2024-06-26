import { Suspense } from "react"
import { Routes } from "@blitzjs/next"
import Head from "next/head"
import Link from "next/link"
import { usePaginatedQuery } from "@blitzjs/rpc"
import { useParam } from "@blitzjs/next"
import { useRouter } from "next/router"

import Layout from "src/core/layouts/Layout"
import getProjects from "src/projects/queries/getProjects"

const ITEMS_PER_PAGE = 100

export const ProjectsList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const userId = useParam("userId", "number")
  const [{ projects, hasMore }] = usePaginatedQuery(getProjects, {
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
        {projects.map((project) => (
          <li key={project.id}>
            <Link href={Routes.ShowProjectPage({ projectId: project.id })}>{project.title}</Link>
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

const ProjectsPage = () => {
  const userId = useParam("userId", "number")

  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>

      <div>
        <p>
          <Link href={Routes.NewProjectPage({ userId: userId! })}>Create Project</Link>
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <ProjectsList />
        </Suspense>
      </div>
    </Layout>
  )
}

export default ProjectsPage
