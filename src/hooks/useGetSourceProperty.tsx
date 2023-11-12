import React from "react"
import {
  PropertyBlockType,
  LinkedPropertyBlockType,
  isPropertyBlockType,
  usePropertyBlockStore,
} from "src/store/propertyBlockStore"

export const useGetSourceProperty = () => {
  const { propertyBlocks } = usePropertyBlockStore()

  const getSourceProperty = (block: PropertyBlockType | LinkedPropertyBlockType) => {
    if (isPropertyBlockType(block)) {
      // TypeScript knows block is PropertyBlockType, so you can access 'content'
      return block
    } else if (!isPropertyBlockType(block)) {
      // block is LinkedPropertyBlockType, fetch the source PropertyBlockType
      const sourceBlock = propertyBlocks.find((b) => b.id === block.propertyBlockId)
      if (sourceBlock && isPropertyBlockType(sourceBlock)) {
        return sourceBlock
      }
    }
  }

  // Check if a property is the source block and return a boolean (handy for when determining what action to take when deleting a property)
  const isSourceProperty = (block: PropertyBlockType | LinkedPropertyBlockType) => {
    // find all of the source property ids that are being linked to from linkedPropertyBlocks
    const sourcePropertyIds = propertyBlocks
      .filter((b) => !isPropertyBlockType(b))
      .map((b) => (b as LinkedPropertyBlockType).propertyBlockId)

    // Convert the array to a Set to automatically remove duplicates
    const uniquePropertyBlockIds = [...new Set(sourcePropertyIds)]

    // check if our block matches any of the ids
    return uniquePropertyBlockIds.includes(block.id)
  }

  return { getSourceProperty, isSourceProperty }
}
