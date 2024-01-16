import React, { useState } from "react"
import { Routes } from "@blitzjs/next"
import { useCurrentUser } from "src/users/hooks/useCurrentUser"
import { SpinTheYarnIcon } from "./iconPaths/SpinTheYarnIcon"
import { HomeIcon } from "./iconPaths/HomeIcon"
import { NotesIcon } from "./iconPaths/NotesIcon"
import { ProfileIcon } from "./iconPaths/ProfileIcon"
import { PoolRoomIcon } from "./iconPaths/PoolRoomIcon"
import { BookCaseIcon } from "./iconPaths/BookCaseIcon"
import { ChaptersIcon } from "./iconPaths/ChaptersIcon"
import { NewsfeedIcon } from "./iconPaths/NewsfeedIcon"
import { LatestIcon } from "./iconPaths/LatestIcon"
import { ExploreIcon } from "./iconPaths/ExploreIcon"
import { ChallengesIcon } from "./iconPaths/ChallengesIcon"
import { ProjectsIcon } from "./iconPaths/ProjectsIcon"
import { TasksIcon } from "./iconPaths/TasksIcon"
import { ChatIcon } from "./iconPaths/ChatIcon"
import { GoalsIcon } from "./iconPaths/GoalsIcon"
import { BookIcon } from "./iconPaths/BookIcon"
import { WorldbuildingIcon } from "./iconPaths/WorldbuildingIcon"
import { EventsIcon } from "./iconPaths/EventsIcon"
import { CharactersIcon } from "./iconPaths/CharactersIcon"
import { LocationsIcon } from "./iconPaths/LocationsIcon"
import { TimelineIcon } from "./iconPaths/TimelineIcon"
import { Icon } from "./Icon"
import { OutlineIcon } from "./iconPaths/OutlineIcon"
import { GuidesIcon } from "./iconPaths/GuidesIcon"
import { ProfileDropdown } from "./Sidebar/ProfileDropdown"
import { NewsfeedDropdown } from "./Sidebar/NewsfeedDropdown"
import { ProjectsDropdown } from "./Sidebar/ProjectsDropdown"

export const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleMouseEnter = () => setIsExpanded(true)
  const handleMouseLeave = () => setIsExpanded(false)

  return (
    <div
      className={`fixed left inset-y-0 left-0 z-30 flex flex-col items-center transition-all duration-300 ease-in-out transform ${
        isExpanded ? "w-64 bg-base-100 shadow-lg" : "w-16 bg-transparent"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col items-center mt-5">
        {/* Example of menu item, repeat for each item */}
        <a
          href="#"
          className="flex items-center w-full h-12 px-4 mt-2 space-x-4 rounded hover:bg-blue-500 hover:text-white"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {/* Replace with actual SVG path */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span
            className={`text-sm font-medium transition-all duration-300 ease-in-out ${
              isExpanded ? "opacity-100" : "opacity-0"
            }`}
          >
            Item Label
          </span>
        </a>
        {/* Repeat other items */}
      </div>
    </div>
  )
}

//   // this is causing a dynamic server usage error and not rendering the home page at all
//   // const currentUser = useCurrentUser()

//   // Define a base class for your sidebar items
//   const baseItemClass = "flex items-center space-x-4 px-4 py-3"
//   const textClass = "transition-opacity duration-500"

//   // if (!currentUser) return <div>User ID is missing</div>

//   return (
//     <>
//       <div className="sidebar min-h-screen w-[3.2rem] overflow-hidden border-r hover:w-56 hover:bg-white hover:shadow-lg">
//         <div className="flex h-screen flex-col justify-between pt-2 pb-6">
//           <div>
//             <div className="w-max p-2.5">
//               <img src="https://tailus.io/images/logo.svg" className="w-32" alt="" />
//             </div>
//             <ul className="mt-6 space-y-2 tracking-wide">
//               <li className="min-w-max">
//                 <a
//                   href="#"
//                   aria-label="dashboard"
//                   // className="relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
//                   className="relative flex items-center space-x-4 px-4 py-3 text-white"
//                 >
//                   <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
//                     <path
//                       d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
//                       className="fill-current text-cyan-400 dark:fill-slate-600"
//                     ></path>
//                     <path
//                       d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
//                       className="fill-current text-cyan-200 group-hover:text-cyan-300"
//                     ></path>
//                     <path
//                       d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
//                       className="fill-current group-hover:text-sky-300"
//                     ></path>
//                   </svg>

//                   <Icon
//                     // icon={<DashboardSVG className="h-6 w-6 text-neutral" />}
//                     themeColor="primary"
//                   />
//                   <span className="-mr-1 font-medium">Dashboard</span>
//                 </a>
//               </li>
//               <li className="min-w-max">
//                 <a
//                   href="#"
//                   className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       className="fill-current text-gray-300 group-hover:text-cyan-300"
//                       fill-rule="evenodd"
//                       d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
//                       clip-rule="evenodd"
//                     />
//                     <path
//                       className="fill-current text-gray-600 group-hover:text-cyan-600"
//                       d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
//                     />
//                   </svg>
//                   <span className="group-hover:text-gray-700">Categories</span>
//                 </a>
//               </li>
//               <li className="min-w-max">
//                 <a
//                   href="#"
//                   className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       className="fill-current text-gray-600 group-hover:text-cyan-600"
//                       fill-rule="evenodd"
//                       d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
//                       clip-rule="evenodd"
//                     />
//                     <path
//                       className="fill-current text-gray-300 group-hover:text-cyan-300"
//                       d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
//                     />
//                   </svg>
//                   <span className="group-hover:text-gray-700">Reports</span>
//                 </a>
//               </li>
//               <li className="min-w-max">
//                 <a
//                   href="#"
//                   className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       className="fill-current text-gray-600 group-hover:text-cyan-600"
//                       d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
//                     />
//                     <path
//                       className="fill-current text-gray-300 group-hover:text-cyan-300"
//                       d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
//                     />
//                   </svg>
//                   <span className="group-hover:text-gray-700">Other data</span>
//                 </a>
//               </li>
//               <li className="min-w-max">
//                 <a
//                   href="#"
//                   className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       className="fill-current text-gray-300 group-hover:text-cyan-300"
//                       d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
//                     />
//                     <path
//                       className="fill-current text-gray-600 group-hover:text-cyan-600"
//                       fill-rule="evenodd"
//                       d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
//                       clip-rule="evenodd"
//                     />
//                   </svg>
//                   <span className="group-hover:text-gray-700">Finance</span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="w-max -mb-3">
//             <a
//               href="#"
//               className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 group-hover:fill-cyan-600"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
//                   clip-rule="evenodd"
//                 />
//               </svg>
//               <span className="group-hover:text-gray-700">Settings</span>
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="drawer-side z-10">
//         <label htmlFor="my-drawer" className="drawer-overlay"></label>
//         <nav className="flex min-h-screen w-72 flex-col gap-2 overflow-y-auto bg-base-100 px-6 py-3">
//           <div className="mx-4 flex items-center gap-2 font-black">
//             <Icon
//               iconPath={<SpinTheYarnIcon />}
//               isLink={false}
//               iconColor="text-primary"
//               isButton={false}
//               iconSize={40}
//             />
//             Spin The Yarn
//           </div>
//           <ul className="menu">
//             <li>
//               <a className="active">
//                 <Icon
//                   iconPath={<HomeIcon />}
//                   isLink={false}
//                   iconColor="text-primary"
//                   isButton={false}
//                 />
//                 Home
//               </a>
//             </li>
//             <ProfileDropdown />
//             <NewsfeedDropdown />
//             <ProjectsDropdown />
//             <li>
//               {/* <Link href={Routes.NotesPage({ userId: currentUser.id })}> */}
//               {/* <Link href={Routes.NotesPage({ userId: 2 })}> */}
//               <a>
//                 <Icon
//                   iconPath={<NotesIcon />}
//                   isLink={false}
//                   iconColor="text-primary"
//                   isButton={false}
//                 />
//                 Notes
//               </a>
//               {/* </Link> */}
//             </li>
//             <li>
//               <a>
//                 <Icon
//                   iconPath={<TasksIcon />}
//                   isLink={false}
//                   iconColor="text-primary"
//                   isButton={false}
//                 />
//                 Tasks
//               </a>
//             </li>
//             <li>
//               <a>
//                 <Icon
//                   iconPath={<GoalsIcon />}
//                   isLink={false}
//                   iconColor="text-primary"
//                   isButton={false}
//                 />
//                 Goals
//               </a>
//             </li>
//             <li>
//               <a>
//                 <Icon
//                   iconPath={<ChatIcon />}
//                   isLink={false}
//                   iconColor="text-primary"
//                   isButton={false}
//                 />
//                 Chat
//                 <span className="badge badge-info badge-sm">12</span>
//               </a>
//             </li>
//             <li>
//               <a>
//                 <Icon
//                   iconPath={<GuidesIcon />}
//                   isLink={false}
//                   iconColor="text-primary"
//                   isButton={false}
//                 />
//                 Guides/Wiki
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </>
//   )
// }
