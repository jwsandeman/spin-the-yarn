import { Suspense, useEffect, useRef, useState } from "react"
import { Routes } from "@blitzjs/next"
import Head from "next/head"
import Link from "next/link"
import { usePaginatedQuery } from "@blitzjs/rpc"
import { useParam } from "@blitzjs/next"
import { useRouter } from "next/router"

import Layout from "src/core/layouts/Layout"
import getNotes from "src/notes/queries/getNotes"
import { DraggableBlock } from "src/core/components/DraggableBlock"
import { useTextBlocksStore } from "src/store/textBlockStore"
import { usePropertyBlocksStore } from "src/store/propertyBlockStore"
import { useFocusStore } from "src/store/focusStore"
import { initializeBlockStores } from "src/store/initialiseBlockStores"

const ITEMS_PER_PAGE = 100

export const NotesList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const userId = useParam("userId", "number")
  const [{ notes, hasMore }] = usePaginatedQuery(getNotes, {
    where: { user: { id: userId! } },
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
  const goToNextPage = () => router.push({ query: { page: page + 1 } })

  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Link href={Routes.ShowNotePage({ userId: userId!, noteId: note.id })}>
              {note.title}
            </Link>
          </li>
        ))}
      </ul>

      <button disabled={page === 0} onClick={goToPreviousPage}>
        Previous
      </button>
      <button disabled={!hasMore} onClick={goToNextPage}>
        Next
      </button>
    </div>
  )
}

// TODO - Refactor everything to do with the editor into a seperate component so that it can be passed in here and in other pages that use the editor
// TODO - refactor to use useHandleFocusShift hook (remove useEffect and useFocusContext)

// ?BUG/TODO Convert textBlockRefs and propertyBlockRefs to Rossis new useState format in all affected components

const NotesPage = () => {
  const userId = useParam("userId", "number")

  const { textBlocks, setTextBlocks } = useTextBlocksStore()
  const { focusIndex, setFocusIndex, focusContext, setFocusContext } = useFocusStore()

  const textBlockRefs = useRef<(HTMLTextAreaElement | null)[]>([])
  // const [textBlockRefs, setTextBlockRefs] = useState<{
  //   [key: string]: HTMLTextAreaElement | null
  // }>({})
  const propertyBlockRefs = useRef<(HTMLTextAreaElement | null)[]>([])
  // const [propertyBlockRefs, setPropertyBlockRefs] = useState<{
  //   [key: string]: HTMLTextAreaElement | null
  // }>({})

  const moveBlock = (fromIndex: number, toIndex: number) => {
    const updatedBlocks = [...textBlocks]
    const [movedBlock] = updatedBlocks.splice(fromIndex, 1)
    if (movedBlock) {
      updatedBlocks.splice(toIndex, 0, movedBlock)
      setTextBlocks(updatedBlocks)
    }
  }

  useEffect(() => {
    initializeBlockStores()
  }, [])

  useEffect(() => {
    // setTimeout(() => {
    if (focusContext) {
      console.log("focusContext index.tsx", focusContext)
      console.log("propertyBlocRefs", propertyBlockRefs)
      console.log("textBlocRefs", textBlockRefs)
      const targetElement =
        focusContext.type === "block"
          ? textBlockRefs.current[focusContext.id]
          : propertyBlockRefs.current[focusContext.id]
      console.log("targetElement", targetElement)
      console.log("focusContext", focusContext)
      targetElement?.focus()
      // setFocusContext(null) // Reset the focus context
    }
    // }, 0)
  }, [focusContext, propertyBlockRefs, setFocusContext, textBlockRefs])

  if (!userId) return <div>User ID is missing</div>

  return (
    <Layout>
      <Head>
        <title className="bg-blue">Notes</title>
      </Head>
      {/* <div className="bg-green-100 text-green-500"> */}
      <div className="">
        {/* <p>
          <Link href={Routes.NewNotePage({ userId: userId })}>Create Note</Link>
        </p> */}
        <Suspense fallback={<div>Loading...</div>}>
          {/* <NotesList /> */}
          {textBlocks.map((block, index) => (
            <DraggableBlock
              key={block.id}
              block={block}
              index={textBlocks.findIndex((b) => b.id === block.id)}
              moveBlock={moveBlock}
              // setTextBlockRefs={setTextBlockRefs}
              textBlockRefs={textBlockRefs}
              // setPropertyBlockRefs={setPropertyBlockRefs}
              propertyBlockRefs={propertyBlockRefs}
            />
          ))}
        </Suspense>
      </div>
    </Layout>
  )
}

export default NotesPage
