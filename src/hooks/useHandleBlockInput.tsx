import React from "react"
import { BlockType, useBlocksStore } from "src/store/blocksStore"

export const useHandleBlockInput = (
  blocks: BlockType[],
  updateFunction: (blocks: BlockType[] | ((prevBlocks: BlockType[]) => BlockType[])) => void
) => {
  return (e: React.ChangeEvent<HTMLTextAreaElement>, blockId: string) => {
    const textarea = e.target
    const newHeight = `${textarea.scrollHeight}px`
    textarea.style.height = "auto"
    textarea.style.height = `${textarea.scrollHeight}px`

    const newBlocks = [...blocks]
    const block = newBlocks.find((b) => b.id === blockId)
    if (block) {
      console.log(`Block with ID ${block.id} is being updated.`)
      block.content = e.target.value
      block.height = newHeight
      updateFunction(newBlocks)
    }
  }
}
