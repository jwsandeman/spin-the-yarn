import { Suspense } from "react"
import { Routes } from "@blitzjs/next"
import Head from "next/head"
import Link from "next/link"
import { usePaginatedQuery } from "@blitzjs/rpc"
import { useParam } from "@blitzjs/next"
import { useRouter } from "next/router"

import Layout from "src/core/layouts/Layout"
// import getProfiles from "src/profiles/queries/getProfiles";

const ITEMS_PER_PAGE = 100

// export const ProfilesList = () => {
//   const router = useRouter()
//   const page = Number(router.query.page) || 0
//   const userId = useParam("userId", "number")
//   const [{ profiles, hasMore }] = usePaginatedQuery(getProfiles, {
//     where: { user: { id: userId! } },
//     orderBy: { id: "asc" },
//     skip: ITEMS_PER_PAGE * page,
//     take: ITEMS_PER_PAGE,
//   })

//   const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
//   const goToNextPage = () => router.push({ query: { page: page + 1 } })

//   return (
//     <div>
//       <ul>
//         {profiles.map((profile) => (
//           <li key={profile.id}>
//             <Link href={Routes.ShowProfilePage({ profileId: profile.id })}>{profile.name}</Link>
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
//   )
// }

const ProfilesPage = () => {
  const userId = useParam("userId", "number")

  return (
    <Layout>
      <Head>
        <title>Profiles</title>
      </Head>

      <div>
        <p>
          {/* <Link href={Routes.NewProfilePage({ userId: userId! })}> */}
          Create Profile
          {/* </Link> */}
        </p>

        <Suspense fallback={<div>Loading...</div>}>{/* <ProfilesList /> */}</Suspense>
      </div>
    </Layout>
  )
}

export default ProfilesPage
