import React, { Suspense, useEffect } from "react"
import { initializeBlockStores } from "src/store/initialiseBlockStores"
import { DraggableBlock } from "./DraggableBlock"
import { usePropertyBlockStore } from "src/store/propertyBlockStore"
import { useGetSourceProperty } from "src/hooks/useGetSourceProperty"
import { useUpdatePropertyBlocksOrder } from "src/hooks/useUpdatePropertyBlocksOrder"

export const EditorContainer = ({ element }) => {
  const { propertyBlocks, setPropertyBlocks } = usePropertyBlockStore()
  const getSourceProperty = useGetSourceProperty()
  const updatePropertyBlocksOrder = useUpdatePropertyBlocksOrder()

  const moveBlock = async (fromIndex: number, toIndex: number) => {
    const updatedPropertyBlocks = [...propertyBlocks]
    const [movedBlock] = updatedPropertyBlocks.splice(fromIndex, 1)
    if (movedBlock) {
      updatedPropertyBlocks.splice(toIndex, 0, movedBlock)
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
    // <div className="flex flex-col p-4 bg-white rounded-2xl shadow-lg">
    <div className="flex flex-col p-4 rounded-2xl">
      {/* <div> */}
      {/* You might not need this div, depending on your layout */}
      {/* <div className=""> */}
      <div className="flex flex-col space-y-2 prose">
        {/* space-y-2 adds vertical space between each DraggableBlock */}
        {propertyBlocks && (
          <Suspense fallback={<div>Loading Editor...</div>}>
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
