import React from "react"
import { useCreateBlocks } from "src/hooks/useCreateBlocks"
import { useUpdatePropertyBlocksOrder } from "src/hooks/useUpdatePropertyBlocksOrder"
import { usePropertyBlockStore } from "src/store/propertyBlockStore"
import { useUIStore } from "src/store/uiStore"

export const useHandleEnter = (blockType, propertyBlock) => {
  const createBlocksHook = useCreateBlocks()
  const { propertyBlocks, setPropertyBlocks } = usePropertyBlockStore()
  const updatePropertyBlocksOrder = useUpdatePropertyBlocksOrder()
  const { setFocusContext } = useUIStore()

  const handleEnter = () => {
    // console.log("handle enter propertyBlock => ", propertyBlock)
    console.log("enterDebug: handle enter firing => ", propertyBlocks)
    const { newPropertyBlock } = createBlocksHook.createBlocks()
    console.log("enterDebug: new propertyBlock has been created", newPropertyBlock)

    if (newPropertyBlock) {
      const updatedPropertyBlocks = [...propertyBlocks, newPropertyBlock]
      console.log("enterDebug: updated property blocks => ", updatedPropertyBlocks)
      // Remove newly created property block from array
      const filteredPropertyBlocks = updatedPropertyBlocks.filter(
        (b) => b.id !== newPropertyBlock.id
      )
      console.log("enterDebug: filtered property blocks => ", filteredPropertyBlocks)
      // Insert newly created property block into correct position after current property block
      console.log("enterDebug: inserting new property block into correct position")
      filteredPropertyBlocks.splice(propertyBlock.order + 1, 0, newPropertyBlock)
      setPropertyBlocks(updatePropertyBlocksOrder(filteredPropertyBlocks))
    }

    console.log(
      "enterDebug: propertyBlocks after new property block has been added to state in correct order",
      propertyBlocks
    )
    setFocusContext(
      blockType === "property"
        ? // propertyBlock.type === "property"
          { type: "property", id: newPropertyBlock.id }
        : { type: "entry", id: newPropertyBlock.entryBlockId }
    )
  }

  return handleEnter
}
