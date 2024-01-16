import React, { useEffect, useState } from "react"
import { MenuIcon } from "../iconPaths/MenuIcon"
import { BellIcon } from "../iconPaths/BellIcon"
import { WalletIcon } from "../iconPaths/WalletIcon"
import { TimelineIcon } from "../iconPaths/TimelineIcon"
import { CharactersIcon } from "../iconPaths/CharactersIcon"
import { EventsIcon } from "../iconPaths/EventsIcon"
import { WorldbuildingIcon } from "../iconPaths/WorldbuildingIcon"
import { BookIcon } from "../iconPaths/BookIcon"
import { LocationsIcon } from "../iconPaths/LocationsIcon"
import { HelpIcon } from "../iconPaths/HelpIcon"
import { SearchIcon } from "../iconPaths/SearchIcon"
import { FavouriteIcon } from "../iconPaths/FavouriteIcon"
import { ShareIcon } from "../iconPaths/ShareIcon"
import { RecentIcon } from "../iconPaths/RecentIcon"
import { useStore } from "zustand"
import { ThemeSwitcher } from "../ThemeSwitcher"
import { OutlineIcon } from "../iconPaths/OutlineIcon"
import { Icon } from "../Icon"
import { NotificationsDropdown } from "./NotificationsDropdown"
import { SettingsDropdown } from "./SettingsDropdown"
import { WordcountProgress } from "./WordcountProgress"
import { ShareDropdown } from "./ShareDropdown"
import { RecentDropdown } from "./RecentDropdown"

export const Navbar = () => {
  return (
    // <header className="col-span-12 flex items-center gap-2 lg:gap-1">
    <header className="col-span-12 flex items-center gap-1">
      <label htmlFor="my-drawer" className="flex drawer-button md:hidden">
        <Icon
          iconPath={<MenuIcon />}
          iconSize={48}
          iconColor={"text-primary"}
          isLink={false}
          isButton={true}
          buttonShape="btn-square"
        />
      </label>

      <Icon iconPath={<OutlineIcon />} isLink={false} isButton={true} />
      <Icon iconPath={<TimelineIcon />} isLink={false} isButton={true} />
      <Icon iconPath={<CharactersIcon />} isLink={false} isButton={true} />
      <Icon iconPath={<LocationsIcon />} isLink={false} isButton={true} />
      <Icon iconPath={<EventsIcon />} isLink={false} isButton={true} />
      <Icon iconPath={<WorldbuildingIcon />} isLink={false} isButton={true} />
      <Icon iconPath={<BookIcon />} isLink={false} isButton={true} />

      <WordcountProgress />

      <Icon iconPath={<SearchIcon />} isLink={false} isButton={true} />
      <Icon iconPath={<FavouriteIcon />} isLink={false} isButton={true} />
      <Icon iconPath={<HelpIcon />} isLink={false} isButton={true} />
      <ShareDropdown />
      <RecentDropdown />
      <NotificationsDropdown />
      <Icon iconPath={<WalletIcon />} isLink={false} isButton={true} />
      <SettingsDropdown />
    </header>
  )
}
