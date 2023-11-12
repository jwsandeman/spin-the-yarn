import React from "react"
import { useEntryBlocksStore } from "src/store/entryBlockStore"
import { usePropertyBlockStore } from "src/store/propertyBlockStore"
import { useGetSourceProperty } from "./useGetSourceProperty"

export const useHandleBlockInput = (blockType: string) => {
  const { propertyBlocks, setPropertyBlocks } = usePropertyBlockStore()
  const { entryBlocks, setEntryBlocks } = useEntryBlocksStore()
  const { getSourceProperty } = useGetSourceProperty()

  return (e: React.ChangeEvent<HTMLTextAreaElement>, blockId: string) => {
    const textarea = e.target
    const newHeight = `${textarea.scrollHeight}px`
    textarea.style.height = "auto"
    textarea.style.height = `${textarea.scrollHeight}px`
    console.log("block input firing")

    if (blockType === "property") {
      const newPropertyBlocks = [...propertyBlocks]
      const propertyBlock = newPropertyBlocks.find((b) => b.id === blockId)
      const sourceProperty = propertyBlock ? getSourceProperty(propertyBlock) : null
      if (sourceProperty) {
        sourceProperty.content = e.target.value
        sourceProperty.height = newHeight
        console.log("updated content in propertyBlock")
        setPropertyBlocks(newPropertyBlocks)
      }
    } else if (blockType === "entry") {
      const newEntryBlocks = [...entryBlocks]
      const entryBlock = newEntryBlocks.find((b) => b.id === blockId)
      if (entryBlock) {
        console.log(`Block with ID ${entryBlock.id} is being updated.`)
        entryBlock.content = e.target.value
        entryBlock.height = newHeight
        console.log("updated content in entryBlock")
        setEntryBlocks(newEntryBlocks)
      }
    }

    // if (blockType === "property") {
    //   setPropertyBlocks((prevBlocks) =>
    //     prevBlocks.map((block) => {
    //       if (block.id === blockId) {
    //         // const updatedBlock = { ...block, content: e.target.value, height: newHeight }
    //         // const sourceProperty = getSourceProperty(updatedBlock)
    //         const sourceProperty = getSourceProperty(block)
    //         if (sourceProperty) {
    //           return { ...sourceProperty, content: e.target.value, height: newHeight }
    //         }
    //         // return updatedBlock
    //         // return sourceProperty
    //       }
    //       return block
    //     })
    //   )
    // } else if (blockType === "entry") {
    //   setEntryBlocks((prevBlocks) =>
    //     prevBlocks.map((block) => {
    //       if (block.id === blockId) {
    //         return { ...block, content: e.target.value, height: newHeight }
    //       }
    //       return block
    //     })
    //   )
    // }
  }
}
