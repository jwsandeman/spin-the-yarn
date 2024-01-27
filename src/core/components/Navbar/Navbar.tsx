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
import { Router, useRouter } from "next/router"
import { PoolRoomIcon } from "../iconPaths/PoolRoomIcon"
import { ChaptersIcon } from "../iconPaths/ChaptersIcon"
import { BookCaseIcon } from "../iconPaths/BookCaseIcon"
import { NewsfeedIcon } from "../iconPaths/NewsfeedIcon"
import { ExploreIcon } from "../iconPaths/ExploreIcon"
import { ChallengesIcon } from "../iconPaths/ChallengesIcon"

export const Navbar = () => {
  const router = useRouter()

  const showProfileIcons = () => {
    return router.pathname.includes("/users/") && router.pathname.includes("/profile")
  }

  const showCommunityIcons = () => {
    return router.pathname.includes("/newsfeed") || router.pathname.includes("/community")
  }

  const showProjectIcons = () => {
    return router.pathname.includes("/users/") && router.pathname.includes("/projects")
  }

  return (
    // <header className="col-span-12 flex items-center gap-2 lg:gap-1">
    // <header className="col-span-12 bg-base-200 flex items-center gap-1 p-4 z-50">
    <header className="col-span-12 bg-base-200 flex items-center justify-between p-4 z-50">
      <div className="flex items-center gap-1 flex-1">
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

        {/* Profile Icons */}
        {showProfileIcons() && (
          <>
            <Icon iconPath={<PoolRoomIcon />} isLink={false} isButton={true} />
            <Icon iconPath={<BookCaseIcon />} isLink={false} isButton={true} />
            <Icon iconPath={<ChaptersIcon />} isLink={false} isButton={true} />
          </>
        )}

        {/* Community Icons */}
        {showCommunityIcons() && (
          <>
            <Icon iconPath={<NewsfeedIcon />} isLink={false} isButton={true} />
            <Icon iconPath={<ExploreIcon />} isLink={false} isButton={true} />
            <Icon iconPath={<ChallengesIcon />} isLink={false} isButton={true} />
          </>
        )}

        {/* Projects Icons */}
        {showProjectIcons() && (
          <>
            <Icon iconPath={<OutlineIcon />} isLink={false} isButton={true} />
            <Icon iconPath={<TimelineIcon />} isLink={false} isButton={true} />
            <Icon iconPath={<CharactersIcon />} isLink={false} isButton={true} />
            <Icon iconPath={<LocationsIcon />} isLink={false} isButton={true} />
            <Icon iconPath={<EventsIcon />} isLink={false} isButton={true} />
            <Icon iconPath={<WorldbuildingIcon />} isLink={false} isButton={true} />
            <Icon iconPath={<BookIcon />} isLink={false} isButton={true} />
          </>
        )}
      </div>

      <div className="flex justify-center flex-grow-0">
        <WordcountProgress />
      </div>

      <div className="flex items-center gap-1 flex-1 justify-end">
        <Icon iconPath={<SearchIcon />} isLink={false} isButton={true} />
        <Icon iconPath={<FavouriteIcon />} isLink={false} isButton={true} />
        <Icon iconPath={<HelpIcon />} isLink={false} isButton={true} />
        <ShareDropdown />
        <RecentDropdown />
        <NotificationsDropdown />
        <Icon iconPath={<WalletIcon />} isLink={false} isButton={true} />
        <SettingsDropdown />
      </div>
    </header>
  )
}
