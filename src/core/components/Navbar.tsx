import React from "react"
import { MenuIcon } from "./icons/MenuIcon"
import { BellIcon } from "./icons/BellIcon"
import { XrpIcon } from "./icons/XrpIcon"
import { OutlineIcon } from "./icons/OutlineIcon"
import { TimelineIcon } from "./icons/TimelineIcon"
import { CharactersIcon } from "./icons/CharactersIcon"
import { EventsIcon } from "./icons/EventsIcon"
import { WorldbuildingIcon } from "./icons/WorldbuildingIcon"
import { BookIcon } from "./icons/BookIcon"
import { LocationsIcon } from "./icons/LocationsIcon"
import { HelpIcon } from "./icons/HelpIcon"
import { SearchIcon } from "./icons/SearchIcon"
import { FavouriteIcon } from "./icons/FavouriteIcon"
import { ShareIcon } from "./icons/ShareIcon"
import { RecentIcon } from "./icons/RecentIcon"

export const Navbar = () => {
  return (
    //  <!-- header -->
    <header className="col-span-12 flex items-center gap-2 lg:gap-4">
      <label htmlFor="my-drawer" className="btn btn-square btn-ghost drawer-button md:hidden">
        <MenuIcon size={24} />
      </label>
      {/* <div className="grow"> */}
      {/* <h1 className="lg:text-2xl lg:font-light">Dashboard</h1> */}
      {/* </div> */}
      <div className="btn btn-sm btn-sm btn-circle btn-ghost">
        <div>
          <OutlineIcon size={24} className={"text-neutral-content"} />
        </div>
      </div>
      <div className="btn btn-sm btn-circle btn-ghost">
        <div>
          <TimelineIcon size={24} className={"text-neutral-content"} />
        </div>
      </div>
      <div className="btn btn-sm btn-circle btn-ghost">
        <div>
          <CharactersIcon size={24} className={"text-neutral-content"} />
        </div>
      </div>
      <div className="btn btn-sm btn-circle btn-ghost">
        <div>
          <LocationsIcon size={24} className={"text-neutral-content"} />
        </div>
      </div>
      <div className="btn btn-sm btn-circle btn-ghost">
        <div>
          <EventsIcon size={24} className={"text-neutral-content"} />
        </div>
      </div>
      <div className="btn btn-sm btn-circle btn-ghost">
        <div>
          <WorldbuildingIcon size={24} className={"text-neutral-content"} />
        </div>
      </div>
      <div className="btn btn-sm btn-circle btn-ghost">
        <div>
          <BookIcon size={24} className={"text-neutral-content"} />
        </div>
      </div>
      {/* wordcount progress */}
      <div className="grow">
        <div className="flex justify-center">
          {/* daisyui progress bar filled 75% */}
          <progress className="progress progress-success w-56" value={70} max="100">
            <span>Daily word count</span>
          </progress>
        </div>
      </div>
      {/* <div> */}
      {/* <input */}
      {/* type="text" */}
      {/* placeholder="Search" */}
      {/* className="input input-sm rounded-full max-sm:w-24" */}
      {/* /> */}
      {/* </div> */}
      <div className="btn btn-sm btn-circle btn-ghost">
        <div>
          <SearchIcon size={24} className={"text-neutral-content"} />
        </div>
      </div>
      <div className="btn btn-sm btn-circle btn-ghost">
        <div>
          <FavouriteIcon size={24} className={"text-neutral-content"} />
        </div>
      </div>
      <div className="btn btn-sm btn-circle btn-ghost">
        <div>
          <HelpIcon size={24} className={"text-neutral-content"} />
        </div>
      </div>
      {/* <!-- share dropdown --> */}
      <div className="dropdown-end dropdown z-10">
        <div tabIndex={0} className="btn btn-sm btn-circle btn-ghost">
          <div>
            <ShareIcon size={24} className={"text-neutral-content"} />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow-2xl"
        >
          <li>
            <a>Share Project</a>
          </li>
          <li>
            <a>Invite Callaborators</a>
          </li>
          <li>
            <a>
              <span>
                <b>Public</b>
                <br />
                Publish this page.
              </span>
            </a>
          </li>
        </ul>
      </div>
      {/* <!-- /share dropdown --> */}
      {/* <!-- recent dropdown --> */}
      <div className="dropdown-end dropdown z-10">
        <div tabIndex={0} className="btn btn-sm btn-circle btn-ghost">
          <div>
            <RecentIcon size={24} className={"text-neutral-content"} />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow-2xl"
        >
          <li>
            <a>
              <span>
                <b>Recent Project 1</b>
                <br />
                Character.
              </span>
            </a>
          </li>
          <li>
            <a>
              <span>
                <b>Recent Project 2</b>
                <br />
                Project.
              </span>
            </a>
          </li>
          <li>
            <a>
              <span>
                <b>Recent Project 3</b>
                <br />
                Location.
              </span>
            </a>
          </li>
          <li>
            <a>
              <span>
                <b>Recent Project 4</b>
                <br />
                Timeline.
              </span>
            </a>
          </li>
          <li>
            <a>
              <span>
                <b>Recent Project 5</b>
                <br />
                Continue working on this project.
              </span>
            </a>
          </li>
        </ul>
      </div>
      {/* <!-- /recent dropdown --> */}
      {/* <!-- notifications dropdown --> */}
      <div className="dropdown dropdown-end z-10">
        <div tabIndex={0} className="btn btn-sm btn-circle btn-ghost">
          <div className="indicator">
            <span className="badge indicator-item badge-error badge-xs"></span>
            <BellIcon size={24} className={"text-neutral-content"} />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content mt-3 w-80 rounded-box bg-base-100 p-2 shadow-2xl"
        >
          <li>
            <a className="gap-4">
              <span>
                <b>Notifications</b>
              </span>
            </a>
          </li>
          <li>
            <a className="gap-4">
              <span>
                <b>Mentions</b>
              </span>
            </a>
          </li>
          <li>
            <a className="gap-4">
              <span>
                <b>Messages</b>
              </span>
            </a>
          </li>
          <li>
            <a className="gap-4">
              <span>
                <b>Latest Updates</b>
              </span>
            </a>
          </li>
          <li>
            <a className="gap-4">
              <div className="avatar">
                <div className="w-8 rounded-full">
                  <img src="https://picsum.photos/80/80?1" />
                </div>
              </div>
              <span>
                <b>New message</b>
                <br />
                Alice: Hi, did you get my files?
              </span>
            </a>
          </li>
          <li>
            <a className="gap-4">
              <div className="avatar">
                <div className="w-8 rounded-full">
                  <img src="https://picsum.photos/80/80?2" />
                </div>
              </div>
              <span>
                <b>Reminder</b>
                <br />
                Your meeting is at 10am
              </span>
            </a>
          </li>
          <li>
            <a className="gap-4">
              <div className="avatar">
                <div className="w-8 rounded-full">
                  <img src="https://picsum.photos/80/80?3" />
                </div>
              </div>
              <span>
                <b>New payment</b>
                <br />
                Received $2500 from John Doe
              </span>
            </a>
          </li>
          <li>
            <a className="gap-4">
              <div className="avatar">
                <div className="w-8 rounded-full">
                  <img src="https://picsum.photos/80/80?4" />
                </div>
              </div>
              <span>
                <b>New payment</b>
                <br />
                Received $1900 from Alice
              </span>
            </a>
          </li>
        </ul>
      </div>
      {/* <!-- /notifications dropdown --> */}
      <div className="btn btn-sm btn-circle btn-ghost">
        <div>
          <XrpIcon size={24} className={"text-neutral-content"} />
        </div>
      </div>
      {/* <!-- settings dropdown --> */}
      <div className="dropdown-end dropdown z-10">
        <div tabIndex={0} className="avatar btn btn-sm btn-circle btn-ghost">
          <div className="w-6 rounded-full">
            <img src="https://picsum.photos/80/80?5" />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow-2xl"
        >
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Light/Dark Mode</a>
          </li>
          <li>
            <a>Billing</a>
          </li>
          <li>
            <a>Restore Content</a>
          </li>
          <li>
            <a>Import/Export</a>
          </li>
          <li>
            <a>Billing</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
          <li>
            <a>
              Inbox
              <span className="badge badge-success">12</span>
            </a>
          </li>
        </ul>
      </div>
      {/* <!-- /settings dropdown --> */}
    </header>
    // <!-- /header -->
  )
}
