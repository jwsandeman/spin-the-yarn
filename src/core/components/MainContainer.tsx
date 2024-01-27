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
      {/* <main className="drawer-content w-[calc(100%-3.35rem)] ml-auto"> */}
      <div className="drawer-content w-auto flex flex-col ml-16">
        <div className="sticky top-0 z-10">
          <Navbar />
        </div>
        {/* <div className="grid grid-cols-12 grid-rows-[min-content] gap-y-12 p-4 lg:gap-x-12 lg:p-10"> */}
        <div className="grid grid-cols-12 grid-rows-[min-content] gap-y-12 px-4 lg:gap-x-12 overflow-y-auto">
          {/* <div className="3xl:container mx-auto space-y-6"> */}
          {/* <div className="h-auto m-4 col-span-12 w-ful rounded-2xl justify-center items-center"> */}
          {/* <span className="text-neutral">Dashboard</span> */}
          {/* <span className="text-neutral">{children}</span> */}
          {/* <div className="flex overflow-y-auto h-screen"> */}
          {/* </div> */}
          {children}
          {/* <div className="stats stats-vertical h-auto col-span-12 w-full items-center shadow-sm xl:stats-horizontal -mt-4">

            <span className="stat text-neutral-300">{children}</span>
          </div> */}
          {/* <Dashboard /> */}
          {/* </div> */}
          {/* {children} */}
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
