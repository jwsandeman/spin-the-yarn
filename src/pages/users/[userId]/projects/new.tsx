import { Routes } from "@blitzjs/next"
import Link from "next/link"
import { useParam } from "@blitzjs/next"
import { useRouter } from "next/router"
import { useMutation } from "@blitzjs/rpc"
import Layout from "src/core/layouts/Layout"
import { CreateProjectSchema } from "src/projects/schemas"
import createProject from "src/projects/mutations/createProject"
import { ProjectForm, FORM_ERROR } from "src/projects/components/ProjectForm"
import { Suspense } from "react"

const NewProjectPage = () => {
  const router = useRouter()
  const userId = useParam("userId", "number")
  const [createProjectMutation] = useMutation(createProject)

  return (
    <Layout title={"Create New Project"}>
      <h1>Create New Project</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectForm
          submitText="Create Project"
          schema={CreateProjectSchema}
          // initialValues={{}}
          onSubmit={async (values) => {
            try {
              const project = await createProjectMutation({
                ...values,
                userId: userId!,
              })
              await router.push(
                Routes.ShowProjectPage({
                  userId: userId!,
                  projectId: project.id,
                })
              )
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
        <Link href={Routes.ProjectsPage({ userId: userId! })}>Projects</Link>
      </p>
    </Layout>
  )
}

NewProjectPage.authenticate = true

export default NewProjectPage
