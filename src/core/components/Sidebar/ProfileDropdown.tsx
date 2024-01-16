import React from "react"
import { Icon } from "../Icon"
import { ProfileIcon } from "../iconPaths/ProfileIcon"
import { PoolRoomIcon } from "../iconPaths/PoolRoomIcon"
import { BookCaseIcon } from "../iconPaths/BookCaseIcon"
import { ChaptersIcon } from "../iconPaths/ChaptersIcon"

type Props = {}

export const ProfileDropdown = (props: Props) => {
  return (
    <li>
      <details>
        <summary>
          <Icon
            iconPath={<ProfileIcon />}
            isLink={false}
            iconColor="text-primary"
            isButton={false}
          />
          Profile
        </summary>
        <ul>
          <li>
            <a>
              <Icon
                iconPath={<PoolRoomIcon />}
                isLink={false}
                iconColor="text-primary"
                isButton={false}
              />
              Pool Room
            </a>
          </li>
          <li>
            <a>
              <Icon
                iconPath={<BookCaseIcon />}
                isLink={false}
                iconColor="text-primary"
                isButton={false}
              />
              BookCase
            </a>
          </li>
          <li>
            <a>
              <Icon
                iconPath={<ChaptersIcon />}
                isLink={false}
                iconColor="text-primary"
                isButton={false}
              />
              Chapters
            </a>
          </li>
        </ul>
      </details>
    </li>
  )
}
