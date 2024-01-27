import { Suspense } from "react"
import { Routes } from "@blitzjs/next"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useQuery, useMutation } from "@blitzjs/rpc"
import { useParam } from "@blitzjs/next"

import Layout from "src/core/layouts/Layout"
// import { UpdateProfileSchema } from "src/profiles/schemas";
// import getProfile from "src/profiles/queries/getProfile";
// import updateProfile from "src/profiles/mutations/updateProfile";
import { ProfileForm, FORM_ERROR } from "src/profiles/components/ProfileForm"

// export const EditProfile = () => {
//   const router = useRouter();
//   const profileId = useParam("profileId", "number");
//   const userId = useParam("userId", "number");
//   const [profile, { setQueryData }] = useQuery(
//     getProfile,
//     { id: profileId },
//     {
//       // This ensures the query never refreshes and overwrites the form data while the user is editing.
//       staleTime: Infinity,
//     }
//   );
//   const [updateProfileMutation] = useMutation(updateProfile);

//   return (
//     <>
//       <Head>
//         <title>Edit Profile {profile.id}</title>
//       </Head>

//       <div>
//         <h1>Edit Profile {profile.id}</h1>
//         <pre>{JSON.stringify(profile, null, 2)}</pre>
//         <Suspense fallback={<div>Loading...</div>}>
//           <ProfileForm
//             submitText="Update Profile"
//             schema={UpdateProfileSchema}
//             initialValues={profile}
//             onSubmit={async (values) => {
//               try {
//                 const updated = await updateProfileMutation({
//                   id: profile.id,
//                   ...values,
//                 });
//                 await setQueryData(updated);
//                 await router.push(
//                   Routes.ShowProfilePage({
//                     userId: userId!,
//                     profileId: updated.id,
//                   })
//                 );
//               } catch (error: any) {
//                 console.error(error);
//                 return {
//                   [FORM_ERROR]: error.toString(),
//                 };
//               }
//             }}
//           />
//         </Suspense>
//       </div>
//     </>
//   );
// };

const EditProfilePage = () => {
  const userId = useParam("userId", "number")

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>{/* <EditProfile /> */}</Suspense>

      <p>{/* <Link href={Routes.ProfilesPage({ userId: userId! })}>Profiles</Link> */}</p>
    </div>
  )
}

EditProfilePage.authenticate = true
EditProfilePage.getLayout = (page) => <Layout>{page}</Layout>

export default EditProfilePage
