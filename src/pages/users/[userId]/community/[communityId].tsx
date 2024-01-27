import { Suspense } from "react"
import { Routes } from "@blitzjs/next"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useQuery, useMutation } from "@blitzjs/rpc"
import { useParam } from "@blitzjs/next"

import Layout from "src/core/layouts/Layout"
// import getCommunity from "src/communities/queries/getCommunity";
// import deleteCommunity from "src/communities/mutations/deleteCommunity";

// export const Community = () => {
//   const router = useRouter();
//   const communityId = useParam("communityId", "number");
//   const userId = useParam("userId", "number");
//   const [deleteCommunityMutation] = useMutation(deleteCommunity);
//   const [community] = useQuery(getCommunity, { id: communityId });

//   return (
//     <>
//       <Head>
//         <title>Community {community.id}</title>
//       </Head>

//       <div>
//         <h1>Community {community.id}</h1>
//         <pre>{JSON.stringify(community, null, 2)}</pre>

//         <Link
//           href={Routes.EditCommunityPage({
//             userId: userId!,
//             communityId: community.id,
//           })}
//         >
//           Edit
//         </Link>

//         <button
//           type="button"
//           onClick={async () => {
//             if (window.confirm("This will be deleted")) {
//               await deleteCommunityMutation({ id: community.id });
//               await router.push(Routes.CommunitiesPage({ userId: userId! }));
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

const ShowCommunityPage = () => {
  const userId = useParam("userId", "number")

  return (
    <div>
      <p>
        {/* <Link href={Routes.CommunitiesPage({ userId: userId! })}> */}
        Communities
        {/* </Link> */}
      </p>

      <Suspense fallback={<div>Loading...</div>}>{/* <Community /> */}</Suspense>
    </div>
  )
}

ShowCommunityPage.authenticate = true
ShowCommunityPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowCommunityPage
