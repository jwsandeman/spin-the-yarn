import Head from "next/head"
import React, { FC } from "react"
import { BlitzLayout } from "@blitzjs/next"
import { MainContainer } from "../components/MainContainer"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

const Layout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title || "spin-the-yarn"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className="bg-neutral-100 min-h-screen flex"> */}
      {/* <body className="drawer min-h-screen bg-base-200 md:drawer-open"> */}
      {/* <input id="my-drawer" type="checkbox" className="drawer-toggle" /> */}
      {/* <Sidebar /> */}
      {/* <main className="drawer-content w-[calc(100%-3.35rem)] ml-auto"> */}
      {/* <main className="drawer-content w-full ml-auto"> */}
      {/* <div className="grid grid-cols-12 grid-rows-[min-content] gap-y-12 p-4 lg:gap-x-12 lg:p-10"> */}
      {/* <div className="3xl:container mx-auto space-y-6"> */}
      {/* <div className="3xl:container mx-auto"> */}
      {/* <Navbar /> */}
      <DndProvider backend={HTML5Backend}>
        <MainContainer>{children}</MainContainer>
      </DndProvider>
      {/* </div> */}
      {/* </main> */}
      {/* </body> */}
      {/* </div> */}
    </>
  )
}

export default Layout
