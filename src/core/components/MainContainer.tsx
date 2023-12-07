import React from "react"
import { Dashboard } from "./Dashboard"
import { Sidebar } from "./Sidebar"
import { Navbar } from "./Navbar"

export const MainContainer = ({ children }) => {
  return (
    <div className="drawer min-h-screen bg-base-200 md:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <Sidebar />
      {/* <main className="drawer-content w-[calc(100%-3.35rem)] ml-auto"> */}
      <div className="drawer-content w-full ml-auto">
        {/* <div className="grid grid-cols-12 grid-rows-[min-content] gap-y-12 p-4 lg:gap-x-12 lg:p-10"> */}
        <div className="grid grid-cols-12 grid-rows-[min-content] gap-y-12 p-4 lg:gap-x-12">
          {/* <div className="3xl:container mx-auto space-y-6"> */}
          {/* <div className="3xl:container mx-auto"> */}
          <Navbar />
          {/* <div className="h-auto m-4 col-span-12 w-ful rounded-2xl justify-center items-center"> */}
          {/* <span className="text-neutral">Dashboard</span> */}
          {/* <span className="text-neutral">{children}</span> */}
          {/* </div> */}
          <Dashboard>{children}</Dashboard>
        </div>
      </div>
    </div>
    // // <div className="h-auto m-5 p-5 rounded-2xl border border-dashed border-gray-300/40 justify-center items-center">
    // <div className="h-auto m-4 rounded-2xl justify-center items-center">
    //   {/* <span className="text-neutral">Dashboard</span> */}
    //   <span className="text-neutral">{children}</span>
    // </div>
  )
}
