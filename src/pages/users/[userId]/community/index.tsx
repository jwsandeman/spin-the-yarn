import { Suspense } from "react"
import { Routes } from "@blitzjs/next"
import Head from "next/head"
import Link from "next/link"
import { usePaginatedQuery } from "@blitzjs/rpc"
import { useParam } from "@blitzjs/next"
import { useRouter } from "next/router"

import Layout from "src/core/layouts/Layout"
// import getCommunities from "src/communities/queries/getCommunities";

const ITEMS_PER_PAGE = 100

// export const CommunitiesList = () => {
//   const router = useRouter();
//   const page = Number(router.query.page) || 0;
//   const userId = useParam("userId", "number");
//   const [{ communities, hasMore }] = usePaginatedQuery(getCommunities, {
//     where: { user: { id: userId! } },
//     orderBy: { id: "asc" },
//     skip: ITEMS_PER_PAGE * page,
//     take: ITEMS_PER_PAGE,
//   });

//   const goToPreviousPage = () => router.push({ query: { page: page - 1 } });
//   const goToNextPage = () => router.push({ query: { page: page + 1 } });

//   return (
//     <div>
//       <ul>
//         {communities.map((community) => (
//           <li key={community.id}>
//             <Link
//               href={Routes.ShowCommunityPage({ communityId: community.id })}
//             >
//               {community.name}
//             </Link>
//           </li>
//         ))}
//       </ul>

//       <button disabled={page === 0} onClick={goToPreviousPage}>
//         Previous
//       </button>
//       <button disabled={!hasMore} onClick={goToNextPage}>
//         Next
//       </button>
//     </div>
//   );
// };

const CommunitiesPage = () => {
  const userId = useParam("userId", "number")

  return (
    <Layout>
      <Head>
        <title>Communities</title>
      </Head>

      <div>
        <p>
          {/* <Link href={Routes.NewCommunityPage({ userId: userId! })}> */}
          Create Community
          {/* </Link> */}
        </p>

        <Suspense fallback={<div>Loading...</div>}>{/* <CommunitiesList /> */}</Suspense>
      </div>
    </Layout>
  )
}

export default CommunitiesPage
