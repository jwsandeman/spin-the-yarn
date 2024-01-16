import React from "react"
import { ChallengesIcon } from "../iconPaths/ChallengesIcon"
import { Icon } from "../Icon"
import { ExploreIcon } from "../iconPaths/ExploreIcon"
import { LatestIcon } from "../iconPaths/LatestIcon"
import { NewsfeedIcon } from "../iconPaths/NewsfeedIcon"

type Props = {}

export const NewsfeedDropdown = (props: Props) => {
  return (
    <li>
      <details>
        <summary>
          <Icon
            iconPath={<NewsfeedIcon />}
            isLink={false}
            iconColor="text-primary"
            isButton={false}
          />
          Newsfeed
        </summary>
        <ul>
          <li>
            <a>
              <Icon
                iconPath={<LatestIcon />}
                isLink={false}
                iconColor="text-primary"
                isButton={false}
              />
              Latest
            </a>
          </li>
          <li>
            <a>
              <Icon
                iconPath={<ExploreIcon />}
                isLink={false}
                iconColor="text-primary"
                isButton={false}
              />
              Explore
            </a>
          </li>
          <li>
            <a>
              <Icon
                iconPath={<ChallengesIcon />}
                isLink={false}
                iconColor="text-primary"
                isButton={false}
              />
              Challenges
            </a>
          </li>
        </ul>
      </details>
    </li>
  )
}
