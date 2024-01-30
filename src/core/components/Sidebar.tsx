import React, { useState } from "react"
import { Routes, useParam } from "@blitzjs/next"
import { SpinTheYarnIcon } from "./iconPaths/SpinTheYarnIcon"
import { HomeIcon } from "./iconPaths/HomeIcon"
import { NotesIcon } from "./iconPaths/NotesIcon"
import { ProfileIcon } from "./iconPaths/ProfileIcon"
import { CommunityIcon } from "./iconPaths/CommunityIcon"
import { ProjectsIcon } from "./iconPaths/ProjectsIcon"
import { TasksIcon } from "./iconPaths/TasksIcon"
import { ChatIcon } from "./iconPaths/ChatIcon"
import { GoalsIcon } from "./iconPaths/GoalsIcon"
import { Icon } from "./Icon"
import { GuidesIcon } from "./iconPaths/GuidesIcon"
import { SettingsIcon } from "./iconPaths/SettingsIcon"
import Link from "next/link"

export const Sidebar = () => {
  const userId = useParam("userId", "number")

  return (
    <>
      <div className="sidebar flex group min-h-screen w-20 overflow-hidden hover:w-56 hover:bg-base-100">
        <div className="flex h-screen w-full flex-col justify-between items-start pb-4">
          <div className="menu w-full mt-4 space-y-4 tracking-wide p-0">
            <ul className="p-0 menu space-y-2">
              <li className="relative flex items-center justify-center w-20 h-12 group mb-2">
                <a className="group space-x-4 rounded-xl px-4 py-3">
                  <Icon
                    iconPath={<SpinTheYarnIcon />}
                    isLink={false}
                    iconColor="text-primary"
                    isButton={false}
                    iconSize={30}
                  />
                  <span className="absolute min-w-max left-16 hidden group-hover:flex text-base tracking-wide">
                    Spin The Yarn
                  </span>
                </a>
              </li>
              <li className="relative flex items-center justify-center w-20 h-12 group">
                <a className="group space-x-4 rounded-xl px-4 py-3">
                  <Icon
                    iconPath={<HomeIcon />}
                    isLink={false}
                    iconColor="text-primary"
                    isButton={false}
                  />
                  <span className="absolute min-w-max left-16 hidden group-hover:flex text-base tracking-wide">
                    Home
                  </span>
                </a>
              </li>
              <li className="relative flex items-center justify-center w-20 h-12 group ">
                <Link
                  href={{ ...Routes.ProfilesPage({ userId: userId! }) }}
                  className="group space-x-4 rounded-xl px-4 py-3"
                >
                  <Icon
                    iconPath={<ProfileIcon />}
                    isLink={false}
                    iconColor="text-primary"
                    isButton={false}
                  />
                  <span className="absolute min-w-max left-16 hidden group-hover:flex  text-base tracking-wide">
                    Profile
                  </span>
                </Link>
              </li>
              <li className="relative flex items-center justify-center w-20 h-12 group">
                <Link
                  href={Routes.CommunitiesPage({ userId: userId! })}
                  className="group space-x-4 rounded-xl px-4 py-3"
                >
                  <Icon
                    iconPath={<CommunityIcon />}
                    isLink={false}
                    iconColor="text-primary"
                    isButton={false}
                  />
                  <span className="absolute min-w-max left-16 hidden group-hover:flex text-base tracking-wide">
                    Community
                  </span>
                </Link>
              </li>
              <li className="relative flex items-center justify-center w-20 h-12 group ">
                <Link
                  href={Routes.ProjectsPage({ userId: userId! })}
                  className="group space-x-4 rounded-xl px-4 py-3"
                >
                  <Icon
                    iconPath={<ProjectsIcon />}
                    isLink={false}
                    iconColor="text-primary"
                    isButton={false}
                  />
                  <span className="absolute min-w-max left-16 hidden group-hover:flex  text-base tracking-wide">
                    Projects
                  </span>
                </Link>
              </li>
              <li className="relative flex items-center justify-center w-20 h-12 group">
                <Link
                  href={Routes.NotesPage({ userId: userId! })}
                  className="group space-x-4 rounded-xl px-4 py-3"
                >
                  <Icon
                    iconPath={<NotesIcon />}
                    isLink={false}
                    iconColor="text-primary"
                    isButton={false}
                  />
                  <span className="absolute min-w-max left-16 hidden group-hover:flex text-base tracking-wide">
                    Notes
                  </span>
                </Link>
              </li>
              <li className="relative flex items-center justify-center w-20 h-12 group ">
                <a className="group space-x-4 rounded-xl px-4 py-3">
                  <Icon
                    iconPath={<TasksIcon />}
                    isLink={false}
                    iconColor="text-primary"
                    isButton={false}
                  />
                  <span className="absolute min-w-max left-16 hidden group-hover:flex  text-base tracking-wide">
                    Tasks
                  </span>
                </a>
              </li>
              <li className="relative flex items-center justify-center w-20 h-12 group">
                <a className="group space-x-4 rounded-xl px-4 py-3">
                  <Icon
                    iconPath={<GoalsIcon />}
                    isLink={false}
                    iconColor="text-primary"
                    isButton={false}
                  />
                  <span className="absolute min-w-max left-16 hidden group-hover:flex text-base tracking-wide">
                    Goals
                  </span>
                </a>
              </li>
              <li className="relative flex items-center justify-center w-20 h-12 group ">
                <a className="group space-x-4 rounded-xl px-4 py-3">
                  <Icon
                    iconPath={<ChatIcon />}
                    isLink={false}
                    iconColor="text-primary"
                    isButton={false}
                  />
                  <span className="absolute min-w-max left-16 hidden group-hover:flex  text-base tracking-wide">
                    Chat
                  </span>
                </a>
              </li>
              <li className="relative flex items-center justify-center w-20 h-12 group ">
                <a className="group space-x-4 rounded-xl px-4 py-3">
                  <Icon
                    iconPath={<GuidesIcon />}
                    isLink={false}
                    iconColor="text-primary"
                    isButton={false}
                  />
                  <span className="absolute min-w-max left-16 hidden group-hover:flex  text-base tracking-wide">
                    Guides
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <ul className="p-0 menu mt-6 space-y-2">
            <li className="relative flex items-center justify-center w-20 h-12 group ">
              <a className="group space-x-4 rounded-xl px-4 py-3">
                <Icon
                  iconPath={<SettingsIcon />}
                  isLink={false}
                  iconColor="text-primary"
                  isButton={false}
                />
                <span className="absolute min-w-max left-16 hidden group-hover:flex  text-base tracking-wide">
                  Profile
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ----------mobile nav---------- */}

      {/* <div className="drawer-side z-10">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <nav className="flex min-h-screen w-72 flex-col gap-2 overflow-y-auto bg-base-100 px-6 py-3">
          <div className="mx-4 flex items-center gap-2 font-black">
            <Icon
              iconPath={<SpinTheYarnIcon />}
              isLink={false}
              iconColor="text-primary"
              isButton={false}
              iconSize={40}
            />
            Spin The Yarn
          </div>
          <ul className="menu">
            <li>
              <a className="active">
                <Icon
                  iconPath={<HomeIcon />}
                  isLink={false}
                  iconColor="text-primary"
                  isButton={false}
                />
                Home
              </a>
            </li>
            <ProfileDropdown />
            <NewsfeedDropdown />
            <ProjectsDropdown />
            <li>
              <a>
                <Icon
                  iconPath={<NotesIcon />}
                  isLink={false}
                  iconColor="text-primary"
                  isButton={false}
                />
                Notes
              </a>
            </li>
            <li>
              <a>
                <Icon
                  iconPath={<TasksIcon />}
                  isLink={false}
                  iconColor="text-primary"
                  isButton={false}
                />
                Tasks
              </a>
            </li>
            <li>
              <a>
                <Icon
                  iconPath={<GoalsIcon />}
                  isLink={false}
                  iconColor="text-primary"
                  isButton={false}
                />
                Goals
              </a>
            </li>
            <li>
              <a>
                <Icon
                  iconPath={<ChatIcon />}
                  isLink={false}
                  iconColor="text-primary"
                  isButton={false}
                />
                Chat
                <span className="badge badge-info badge-sm">12</span>
              </a>
            </li>
            <li>
              <a>
                <Icon
                  iconPath={<GuidesIcon />}
                  isLink={false}
                  iconColor="text-primary"
                  isButton={false}
                />
                Guides/Wiki
              </a>
            </li>
          </ul>
        </nav>
      </div> */}
    </>
  )
}
