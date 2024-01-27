import { Suspense } from "react"
import { Routes } from "@blitzjs/next"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useQuery, useMutation } from "@blitzjs/rpc"
import { useParam } from "@blitzjs/next"

import Layout from "src/core/layouts/Layout"
// import getProfile from "src/profiles/queries/getProfile";
// import deleteProfile from "src/profiles/mutations/deleteProfile";

// export const Profile = () => {
//   const router = useRouter();
//   const profileId = useParam("profileId", "number");
//   const userId = useParam("userId", "number");
// const [deleteProfileMutation] = useMutation(deleteProfile);
// const [profile] = useQuery(getProfile, { id: profileId });

//   return (
//     <>
//       <Head>
//         <title>Profile {profile.id}</title>
//       </Head>

//       <div>
//         <h1>Profile {profile.id}</h1>
//         <pre>{JSON.stringify(profile, null, 2)}</pre>

//         <Link
//           href={Routes.EditProfilePage({
//             userId: userId!,
//             profileId: profile.id,
//           })}
//         >
//           Edit
//         </Link>

//         <button
//           type="button"
//           onClick={async () => {
//             if (window.confirm("This will be deleted")) {
//               await deleteProfileMutation({ id: profile.id });
//               await router.push(Routes.ProfilesPage({ userId: userId! }));
//             }
//           }}
//           style={{ marginLeft: "0.5rem" }}
//         >
//           Delete
//         </button>
//       </div>
//     </>
//   );
// };

const ShowProfilePage = () => {
  const userId = useParam("userId", "number")

  return (
    <div>
      <p>{/* <Link href={Routes.ProfilesPage({ userId: userId! })}>Profiles</Link> */}</p>

      <Suspense fallback={<div>Loading...</div>}>{/* <Profile /> */}</Suspense>
    </div>
  )
}

ShowProfilePage.authenticate = true
ShowProfilePage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowProfilePage
