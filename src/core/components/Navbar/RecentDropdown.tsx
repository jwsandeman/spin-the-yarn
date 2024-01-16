import React from "react"
import { Icon } from "../Icon"
import { RecentIcon } from "../iconPaths/RecentIcon"

type Props = {}

export const RecentDropdown = (props: Props) => {
  return (
    <div className="dropdown-end dropdown z-10">
      {/* <div tabIndex={0} className="btn btn-sm btn-circle btn-ghost"> */}
      <div tabIndex={0}>
        <Icon iconPath={<RecentIcon />} isLink={false} isButton={true} />
        {/* <div>
        <RecentIcon />
      </div> */}
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
  )
}
