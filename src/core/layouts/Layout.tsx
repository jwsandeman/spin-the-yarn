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
      <DndProvider backend={HTML5Backend}>
        <MainContainer>{children}</MainContainer>
      </DndProvider>
    </>
  )
}

export default Layout
