import { Icon } from "../Icon"
import { BellIcon } from "../iconPaths/BellIcon"

export const NotificationsDropdown = () => {
  return (
    <div className="dropdown dropdown-end z-10">
      <div tabIndex={0}>
        <div className="indicator">
          <span className="badge indicator-item badge-error badge-xs m-3"></span>
          <Icon iconPath={<BellIcon />} isLink={false} isButton={true} buttonClass="relative" />
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
  )
}
