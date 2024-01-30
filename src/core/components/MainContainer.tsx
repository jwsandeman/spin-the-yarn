import React from "react"
import { Dashboard } from "./Dashboard/Dashboard"
import { Sidebar } from "./Sidebar"
import { Navbar } from "./Navbar/Navbar"

export const MainContainer = ({ children }) => {
  return (
    <div className="drawer min-h-screen bg-base-200 md:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="fixed top-0 left-0 bottom-0 min-w-16 z-30">
        <Sidebar />
      </div>
      <div className="drawer-content w-auto flex flex-col ml-16">
        <div className="sticky top-0 z-10">
          <Navbar />
        </div>
        <div className="grid grid-cols-12 grid-rows-[min-content] gap-y-12 px-4 lg:gap-x-12 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  )
}
