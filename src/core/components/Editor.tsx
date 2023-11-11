import React, { Suspense, useEffect } from "react"
import { initializeBlockStores } from "src/store/initialiseBlockStores"
import { DraggableBlock } from "./DraggableBlock"
import { usePropertyBlockStore } from "src/store/propertyBlockStore"
import { useGetSourceProperty } from "src/hooks/useGetSourceProperty"
import { useUpdatePropertyBlocksOrder } from "src/hooks/useUpdatePropertyBlocksOrder"

export const Editor = ({ element }) => {
  const { propertyBlocks, setPropertyBlocks } = usePropertyBlockStore()
  const getSourceProperty = useGetSourceProperty()
  const updatePropertyBlocksOrder = useUpdatePropertyBlocksOrder()

  const moveBlock = async (fromIndex: number, toIndex: number) => {
    const updatedPropertyBlocks = [...propertyBlocks]
    const [movedBlock] = updatedPropertyBlocks.splice(fromIndex, 1)
    if (movedBlock) {
      updatedPropertyBlocks.splice(toIndex, 0, movedBlock)

      // // Update the order field of blocks
      // for (let i = 0; i < updatedPropertyBlocks.length; i++) {
      //   const updatedPropertyBlock = updatedPropertyBlocks[i]
      //   if (updatedPropertyBlock) {
      //     updatedPropertyBlock.order = i
      //   }
      // }

      setPropertyBlocks(updatePropertyBlocksOrder(updatedPropertyBlocks))

      // Now, use a Blitz.js mutation to save the order in the database
      // for (const block of updatedBlocks) {
      //   await updateBlockOrderMutation({ id: block.id, order: block.order });
      // }
    }
  }

  useEffect(() => {
    initializeBlockStores()
    console.log("initialising block stores")
  }, [])

  useEffect(() => {
    console.log("property blocks => ", propertyBlocks)
  }, [propertyBlocks])

  return (
    <div>
      {/* <Head>
        <title className="bg-blue">Notes</title>
      </Head> */}
      {/* <div className="bg-green-100 text-green-500"> */}
      <div className="">
        {/* <p>
          <Link href={Routes.NewNotePage({ userId: userId })}>Create Note</Link>
        </p> */}
        {propertyBlocks && (
          <Suspense fallback={<div>Loading Editor...</div>}>
            {/* <NotesList /> */}
            {propertyBlocks.map((propertyBlock) => (
              <DraggableBlock
                key={propertyBlock.id}
                propertyBlock={propertyBlock}
                index={propertyBlock.order}
                moveBlock={moveBlock}
              />
            ))}
          </Suspense>
        )}
      </div>
    </div>
  )
}