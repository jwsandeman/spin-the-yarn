import React from "react"

export const useUpdatePropertyBlocksOrder = () => {
  const updatePropertyBlocksOrder = (updatedPropertyBlocks) => {
    // Update the order field of blocks
    for (let i = 0; i < updatedPropertyBlocks.length; i++) {
      const updatedPropertyBlock = updatedPropertyBlocks[i]
      if (updatedPropertyBlock) {
        updatedPropertyBlock.order = i
      }
    }
    console.log("updating property blocks order", updatedPropertyBlocks)
    return updatedPropertyBlocks
  }

  return updatePropertyBlocksOrder
}
