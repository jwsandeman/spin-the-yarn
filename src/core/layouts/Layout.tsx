import Head from "next/head"
import React, { FC } from "react"
import { BlitzLayout } from "@blitzjs/next"
import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar"
import { Dashboard } from "../components/Dashboard"
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
      <div className="bg-neutral-100 min-h-screen flex">
        <Sidebar />
        <main className="w-[calc(100%-3.35rem)] ml-auto">
          <div className="3xl:container mx-auto space-y-6">
            <Navbar />
            <DndProvider backend={HTML5Backend}>
              <Dashboard>{children}</Dashboard>
            </DndProvider>
          </div>
        </main>
      </div>
    </>
  )
}

export default Layout
