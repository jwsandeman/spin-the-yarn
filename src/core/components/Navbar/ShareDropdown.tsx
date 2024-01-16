import React from "react"
import { Icon } from "../Icon"
import { ShareIcon } from "../iconPaths/ShareIcon"

type Props = {}

export const ShareDropdown = (props: Props) => {
  return (
    <div className="dropdown-end dropdown z-10">
      {/* <div tabIndex={0} className="btn btn-sm btn-circle btn-ghost"> */}
      <div tabIndex={0}>
        <Icon iconPath={<ShareIcon />} isLink={false} isButton={true} />
        {/* <div>
            <ShareIcon />
          </div> */}
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
  )
}
