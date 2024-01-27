import { Routes } from "@blitzjs/next"
import Link from "next/link"
import { useParam } from "@blitzjs/next"
import { useRouter } from "next/router"
import { useMutation } from "@blitzjs/rpc"
import Layout from "src/core/layouts/Layout"
// import { CreateCommunitySchema } from "src/communities/schemas";
// import createCommunity from "src/communities/mutations/createCommunity";
import { CommunityForm, FORM_ERROR } from "src/communities/components/CommunityForm"
import { Suspense } from "react"

const NewCommunityPage = () => {
  const router = useRouter()
  const userId = useParam("userId", "number")
  // const [createCommunityMutation] = useMutation(createCommunity)

  return (
    <Layout title={"Create New Community"}>
      <h1>Create New Community</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <CommunityForm
          submitText="Create Community"
          schema={CreateCommunitySchema}
          // initialValues={{}}
          onSubmit={async (values) => {
            try {
              const community = await createCommunityMutation({
                ...values,
                userId: userId!,
              });
              await router.push(
                Routes.ShowCommunityPage({
                  userId: userId!,
                  communityId: community.id,
                })
              );
            } catch (error: any) {
              console.error(error);
              return {
                [FORM_ERROR]: error.toString(),
              };
            }
          }}
        /> */}
      </Suspense>
      <p>
        {/* <Link href={Routes.CommunitiesPage({ userId: userId! })}> */}
        Communities
        {/* </Link> */}
      </p>
    </Layout>
  )
}

NewCommunityPage.authenticate = true

export default NewCommunityPage
