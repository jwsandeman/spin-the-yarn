import { Suspense } from "react"
import { Routes } from "@blitzjs/next"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useQuery, useMutation } from "@blitzjs/rpc"
import { useParam } from "@blitzjs/next"

import Layout from "src/core/layouts/Layout"
// import { UpdateCommunitySchema } from "src/communities/schemas";
// import getCommunity from "src/communities/queries/getCommunity";
// import updateCommunity from "src/communities/mutations/updateCommunity";
import { CommunityForm, FORM_ERROR } from "src/communities/components/CommunityForm"

// export const EditCommunity = () => {
//   const router = useRouter();
//   const communityId = useParam("communityId", "number");
//   const userId = useParam("userId", "number");
//   const [community, { setQueryData }] = useQuery(
//     getCommunity,
//     { id: communityId },
//     {
//       // This ensures the query never refreshes and overwrites the form data while the user is editing.
//       staleTime: Infinity,
//     }
//   );
//   const [updateCommunityMutation] = useMutation(updateCommunity);

//   return (
//     <>
//       <Head>
//         <title>Edit Community {community.id}</title>
//       </Head>

//       <div>
//         <h1>Edit Community {community.id}</h1>
//         <pre>{JSON.stringify(community, null, 2)}</pre>
//         <Suspense fallback={<div>Loading...</div>}>
//           <CommunityForm
//             submitText="Update Community"
//             schema={UpdateCommunitySchema}
//             initialValues={community}
//             onSubmit={async (values) => {
//               try {
//                 const updated = await updateCommunityMutation({
//                   id: community.id,
//                   ...values,
//                 });
//                 await setQueryData(updated);
//                 await router.push(
//                   Routes.ShowCommunityPage({
//                     userId: userId!,
//                     communityId: updated.id,
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

const EditCommunityPage = () => {
  const userId = useParam("userId", "number")

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>{/* <EditCommunity /> */}</Suspense>

      <p>
        {/* <Link href={Routes.CommunitiesPage({ userId: userId! })}> */}
        Communities
        {/* </Link> */}
      </p>
    </div>
  )
}

EditCommunityPage.authenticate = true
EditCommunityPage.getLayout = (page) => <Layout>{page}</Layout>

export default EditCommunityPage
