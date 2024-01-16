import React from "react"
import { Icon } from "../Icon"
import { BookIcon } from "../iconPaths/BookIcon"
import { WorldbuildingIcon } from "../iconPaths/WorldbuildingIcon"
import { EventsIcon } from "../iconPaths/EventsIcon"
import { LocationsIcon } from "../iconPaths/LocationsIcon"
import { CharactersIcon } from "../iconPaths/CharactersIcon"
import { TimelineIcon } from "../iconPaths/TimelineIcon"
import { OutlineIcon } from "../iconPaths/OutlineIcon"
import { ProjectsIcon } from "../iconPaths/ProjectsIcon"

type Props = {}

export const ProjectsDropdown = (props: Props) => {
  return (
    <li>
      <details>
        <summary>
          <Icon
            iconPath={<ProjectsIcon />}
            isLink={false}
            iconColor="text-primary"
            isButton={false}
          />
          Projects
        </summary>
        <ul>
          <li>
            <a>
              <Icon
                iconPath={<OutlineIcon />}
                isLink={false}
                iconColor="text-primary"
                isButton={false}
              />
              Outlines
            </a>
          </li>
          <li>
            <a>
              <Icon
                iconPath={<TimelineIcon />}
                isLink={false}
                iconColor="text-primary"
                isButton={false}
              />
              Timelines
            </a>
          </li>
          <li>
            <a>
              <Icon
                iconPath={<CharactersIcon />}
                isLink={false}
                iconColor="text-primary"
                isButton={false}
              />
              Characters
            </a>
          </li>
          <li>
            <a>
              <Icon
                iconPath={<LocationsIcon />}
                isLink={false}
                iconColor="text-primary"
                isButton={false}
              />
              Locations
            </a>
          </li>
          <li>
            <a>
              <Icon
                iconPath={<EventsIcon />}
                isLink={false}
                iconColor="text-primary"
                isButton={false}
              />
              Events
            </a>
          </li>
          <li>
            <a>
              <Icon
                iconPath={<WorldbuildingIcon />}
                isLink={false}
                iconColor="text-primary"
                isButton={false}
              />
              Worldbuilding
            </a>
          </li>
          <li>
            <a>
              <Icon
                iconPath={<BookIcon />}
                isLink={false}
                iconColor="text-primary"
                isButton={false}
              />
              Books
            </a>
          </li>
        </ul>
      </details>
    </li>
  )
}
