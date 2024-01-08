import React, { useState } from "react"
import DashboardSVG from "./icons/DashboardSVG"
import Link from "next/link"
import { Routes } from "@blitzjs/next"
import { useCurrentUser } from "src/users/hooks/useCurrentUser"
import { SpinTheYarnIcon } from "./icons/SpinTheYarnIcon"
import { HomeIcon } from "./icons/HomeIcon"
import { NotesIcon } from "./icons/NotesIcon"
import { ProfileIcon } from "./icons/ProfileIcon"
import { ShowcaseIcon } from "./icons/ShowcaseIcon"
import { BooksIcon } from "./icons/BooksIcons"
import { ChaptersIcon } from "./icons/ChaptersIcon"
import { NewsfeedIcon } from "./icons/NewsfeedIcon"
import { LatestIcon } from "./icons/LatestIcon"
import { ExploreIcon } from "./icons/ExploreIcon"
import { ChallengesIcon } from "./icons/ChallengesIcon"
import { Project } from "src/pages/users/[userId]/projects/[projectId]"
import { ProjectsIcon } from "./icons/ProjectsIcon"
import { TasksIcon } from "./icons/TasksIcon"
import { ChatIcon } from "./icons/ChatIcon"
import { GoalsIcon } from "./icons/GoalsIcon"
import { HelpIcon } from "./icons/HelpIcon"
import { BookIcon } from "./icons/BookIcon"
import { WorldbuildingIcon } from "./icons/WorldbuildingIcon"
import { EventsIcon } from "./icons/EventsIcon"
import { CharactersIcon } from "./icons/CharactersIcon"
import { LocationsIcon } from "./icons/LocationsIcon"
import { OutlineIcon } from "./icons/OutlineIcon"
import { TimelineIcon } from "./icons/TimelineIcon"
import { Camera, Trophy } from "lucide-react"

export const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  // this is causing a dynamic server usage error and not rendering the home page at all
  // const currentUser = useCurrentUser()

  // Define a base class for your sidebar items
  const baseItemClass = "flex items-center space-x-4 px-4 py-3"
  const textClass = "transition-opacity duration-500"

  // if (!currentUser) return <div>User ID is missing</div>

  return (
    // <div className="sidebar min-h-screen w-[3.35rem] overflow-hidden border-r hover:w-56 hover:bg-white hover:shadow-lg">
    //   <div className="flex h-screen flex-col justify-between pt-2 pb-6">
    //     <div>
    //       <div className="w-max p-2.5">
    //         <img src="https://tailus.io/images/logo.svg" className="w-32" alt="" />
    //       </div>
    //       <ul className="mt-6 space-y-2 tracking-wide">
    //         <li className="min-w-max">
    //           <a
    //             href="#"
    //             aria-label="dashboard"
    //             // className="relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
    //             className="relative flex items-center space-x-4 px-4 py-3 text-white"
    //           >
    //             {/* <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
    //               <path
    //                 d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
    //                 className="fill-current text-cyan-400 dark:fill-slate-600"
    //               ></path>
    //               <path
    //                 d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
    //                 className="fill-current text-cyan-200 group-hover:text-cyan-300"
    //               ></path>
    //               <path
    //                 d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
    //                 className="fill-current group-hover:text-sky-300"
    //               ></path>
    //             </svg> */}
    //             <Icon
    //               icon={<DashboardSVG className="h-6 w-6 text-neutral" />}
    //               themeColor="primary"
    //             />
    //             <span className="-mr-1 font-medium">Dashboard</span>
    //           </a>
    //         </li>
    //         <li className="min-w-max">
    //           <a
    //             href="#"
    //             className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600"
    //           >
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="h-5 w-5"
    //               viewBox="0 0 20 20"
    //               fill="currentColor"
    //             >
    //               <path
    //                 className="fill-current text-gray-300 group-hover:text-cyan-300"
    //                 fill-rule="evenodd"
    //                 d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
    //                 clip-rule="evenodd"
    //               />
    //               <path
    //                 className="fill-current text-gray-600 group-hover:text-cyan-600"
    //                 d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
    //               />
    //             </svg>
    //             <span className="group-hover:text-gray-700">Categories</span>
    //           </a>
    //         </li>
    //         <li className="min-w-max">
    //           <a
    //             href="#"
    //             className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
    //           >
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="h-5 w-5"
    //               viewBox="0 0 20 20"
    //               fill="currentColor"
    //             >
    //               <path
    //                 className="fill-current text-gray-600 group-hover:text-cyan-600"
    //                 fill-rule="evenodd"
    //                 d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
    //                 clip-rule="evenodd"
    //               />
    //               <path
    //                 className="fill-current text-gray-300 group-hover:text-cyan-300"
    //                 d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
    //               />
    //             </svg>
    //             <span className="group-hover:text-gray-700">Reports</span>
    //           </a>
    //         </li>
    //         <li className="min-w-max">
    //           <a
    //             href="#"
    //             className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
    //           >
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="h-5 w-5"
    //               viewBox="0 0 20 20"
    //               fill="currentColor"
    //             >
    //               <path
    //                 className="fill-current text-gray-600 group-hover:text-cyan-600"
    //                 d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
    //               />
    //               <path
    //                 className="fill-current text-gray-300 group-hover:text-cyan-300"
    //                 d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
    //               />
    //             </svg>
    //             <span className="group-hover:text-gray-700">Other data</span>
    //           </a>
    //         </li>
    //         <li className="min-w-max">
    //           <a
    //             href="#"
    //             className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
    //           >
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="h-5 w-5"
    //               viewBox="0 0 20 20"
    //               fill="currentColor"
    //             >
    //               <path
    //                 className="fill-current text-gray-300 group-hover:text-cyan-300"
    //                 d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
    //               />
    //               <path
    //                 className="fill-current text-gray-600 group-hover:text-cyan-600"
    //                 fill-rule="evenodd"
    //                 d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
    //                 clip-rule="evenodd"
    //               />
    //             </svg>
    //             <span className="group-hover:text-gray-700">Finance</span>
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="w-max -mb-3">
    //       <a
    //         href="#"
    //         className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5 group-hover:fill-cyan-600"
    //           viewBox="0 0 20 20"
    //           fill="currentColor"
    //         >
    //           <path
    //             fill-rule="evenodd"
    //             d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
    //             clip-rule="evenodd"
    //           />
    //         </svg>
    //         <span className="group-hover:text-gray-700">Settings</span>
    //       </a>
    //     </div>
    //   </div>
    // </div>

    <div className="drawer-side z-10">
      <label htmlFor="my-drawer" className="drawer-overlay"></label>
      {/* <!-- sidebar menu --> */}
      <nav className="flex min-h-screen w-72 flex-col gap-2 overflow-y-auto bg-base-100 px-6 py-3">
        <div className="mx-4 flex items-center gap-2 font-black">
          <SpinTheYarnIcon size={40} />
          Spin The Yarn
        </div>
        <ul className="menu">
          <li>
            <a className="active">
              <HomeIcon />
              Home
            </a>
          </li>
          <li>
            <details>
              <summary>
                <ProfileIcon />
                Profile
              </summary>
              <ul>
                <li>
                  <a>
                    <ShowcaseIcon />
                    {/* <Trophy color="primary" size={24} strokeWidth={1} /> */}
                    {/* <Camera color="text-primary" size={24} /> */}
                    Pool Room
                  </a>
                </li>
                <li>
                  <a>
                    <BooksIcon />
                    Books
                  </a>
                </li>
                <li>
                  <a>
                    <ChaptersIcon />
                    Chapters
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>
                <NewsfeedIcon />
                Newsfeed
              </summary>
              <ul>
                <li>
                  <a>
                    <LatestIcon />
                    Latest
                  </a>
                </li>
                <li>
                  <a>
                    <ExploreIcon />
                    Explore
                  </a>
                </li>
                <li>
                  <a>
                    <ChallengesIcon />
                    Challenges
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>
                <ProjectsIcon />
                Projects
              </summary>
              <ul>
                <li>
                  <a>
                    <OutlineIcon />
                    Outlines
                  </a>
                </li>
                <li>
                  <a>
                    <TimelineIcon />
                    Timelines
                  </a>
                </li>
                <li>
                  <a>
                    <CharactersIcon />
                    Characters
                  </a>
                </li>
                <li>
                  <a>
                    <LocationsIcon />
                    Locations
                  </a>
                </li>
                <li>
                  <a>
                    <EventsIcon />
                    Events
                  </a>
                </li>
                <li>
                  <a>
                    <WorldbuildingIcon />
                    Worldbuilding
                  </a>
                </li>
                <li>
                  <a>
                    <BookIcon />
                    Books
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            {/* <Link href={Routes.NotesPage({ userId: currentUser.id })}> */}
            {/* <Link href={Routes.NotesPage({ userId: 2 })}> */}
            <a>
              <NotesIcon />
              Notes
            </a>
            {/* </Link> */}
          </li>
          <li>
            <a>
              <TasksIcon />
              Tasks
            </a>
          </li>
          <li>
            <a>
              <GoalsIcon />
              Goals
            </a>
          </li>
          <li>
            <a>
              <ChatIcon />
              Chat
              <span className="badge badge-info badge-sm">12</span>
            </a>
          </li>
          <li>
            <a>
              <HelpIcon />
              Guides/Wiki
            </a>
          </li>
        </ul>
      </nav>
      {/* <!-- /sidebar menu --> */}
    </div>
  )
}
