import React from "react"

type Props = {}

export const RecentActivity = (props: Props) => {
  return (
    <section className="card col-span-12 bg-base-100 shadow-sm xl:col-span-3">
      <div className="p-6 pb-0 text-center text-xs font-bold text-base-content/60">
        Recent events
      </div>
      <ul className="menu">
        <li>
          <a className="gap-4">
            <div className="avatar">
              <div className="w-6 rounded-full">
                <img src="https://picsum.photos/80/80?6" />
              </div>
            </div>
            <span className="text-xs">
              <b>New User</b>
              <br />2 minutes ago
            </span>
          </a>
        </li>
        <li>
          <a className="gap-4">
            <div className="avatar">
              <div className="w-6 rounded-full">
                <img src="https://picsum.photos/80/80?7" />
              </div>
            </div>
            <span className="text-xs">
              <b>New product added</b>
              <br />1 hour ago
            </span>
          </a>
        </li>
        <li>
          <a className="gap-4">
            <div className="avatar">
              <div className="w-6 rounded-full">
                <img src="https://picsum.photos/80/80?8" />
              </div>
            </div>
            <span className="text-xs">
              <b>Database update</b>
              <br />1 hour ago
            </span>
          </a>
        </li>
        <li>
          <a className="gap-4">
            <div className="avatar">
              <div className="w-6 rounded-full">
                <img src="https://picsum.photos/80/80?9" />
              </div>
            </div>
            <span className="text-xs">
              <b>Newsletter sent</b>
              <br />2 hour ago
            </span>
          </a>
        </li>
        <li>
          <a className="gap-4">
            <div className="avatar">
              <div className="w-6 rounded-full">
                <img src="https://picsum.photos/80/80?10" />
              </div>
            </div>
            <span className="text-xs">
              <b>New User</b>
              <br />2 hours ago
            </span>
          </a>
        </li>
        <li>
          <a className="gap-4">
            <div className="avatar">
              <div className="w-6 rounded-full">
                <img src="https://picsum.photos/80/80?11" />
              </div>
            </div>
            <span className="text-xs">
              <b>New product added</b>
              <br />
              yesterday
            </span>
          </a>
        </li>
        <li>
          <a className="gap-4">
            <div className="avatar">
              <div className="w-6 rounded-full">
                <img src="https://picsum.photos/80/80?12" />
              </div>
            </div>
            <span className="text-xs">
              <b>New product added</b>
              <br />
              yesterday
            </span>
          </a>
        </li>
      </ul>
    </section>
  )
}
