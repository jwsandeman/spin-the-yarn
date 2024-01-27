import React from "react"
import { ChallengesIcon } from "../iconPaths/ChallengesIcon"
import { Icon } from "../Icon"
import { ExploreIcon } from "../iconPaths/ExploreIcon"
import { NewsfeedIcon } from "../iconPaths/NewsfeedIcon"
import { CommunityIcon } from "../iconPaths/CommunityIcon"

type Props = {}

export const CommunityDropdown = (props: Props) => {
  return (
    <li>
      <details>
        <summary>
          <Icon
            iconPath={<CommunityIcon />}
            isLink={false}
            iconColor="text-primary"
            isButton={false}
          />
          Community
        </summary>
        <ul>
          <li>
            <a>
              <Icon
                iconPath={<NewsfeedIcon />}
                isLink={false}
                iconColor="text-primary"
                isButton={false}
              />
              Newsfeed
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
