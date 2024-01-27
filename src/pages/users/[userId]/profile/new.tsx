import { Routes } from "@blitzjs/next"
import Link from "next/link"
import { useParam } from "@blitzjs/next"
import { useRouter } from "next/router"
import { useMutation } from "@blitzjs/rpc"
import Layout from "src/core/layouts/Layout"
// import { CreateProfileSchema } from "src/profiles/schemas";
// import createProfile from "src/profiles/mutations/createProfile";
import { ProfileForm, FORM_ERROR } from "src/profiles/components/ProfileForm"
import { Suspense } from "react"

const NewProfilePage = () => {
  const router = useRouter()
  const userId = useParam("userId", "number")
  // const [createProfileMutation] = useMutation(createProfile);

  return (
    <Layout title={"Create New Profile"}>
      <h1>Create New Profile</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <ProfileForm
          submitText="Create Profile"
          schema={CreateProfileSchema}
          // initialValues={{}}
          onSubmit={async (values) => {
            try {
              const profile = await createProfileMutation({
                ...values,
                userId: userId!,
              });
              await router.push(
                Routes.ShowProfilePage({
                  userId: userId!,
                  profileId: profile.id,
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
      <p>{/* <Link href={Routes.ProfilesPage({ userId: userId! })}>Profiles</Link> */}</p>
    </Layout>
  )
}

NewProfilePage.authenticate = true

export default NewProfilePage
