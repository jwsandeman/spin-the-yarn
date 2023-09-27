import React, { useEffect, useRef, useState } from "react"
import { useHandleArrowNavigation } from "src/hooks/useHandleArrowNavigation"
import { useHandleBlockInput } from "src/hooks/useHandleBlockInput"
import { useHandleKeyDown } from "src/hooks/useHandleKeyDown"
import { useBlocksStore } from "src/store/blocksStore"
import { usePropertyBlocksStore } from "src/store/propertyBlocksStore"

// TODO add wsiwyg editor options when text is highlighted

export const TextBlock = ({ block, propertyBlock, index, textBlockRefs }) => {
  const { blocks, setBlocks } = useBlocksStore()
  const { propertyBlocks, setPropertyBlocks } = usePropertyBlocksStore()
  const handleBlockInput = useHandleBlockInput(blocks, setBlocks)
  const handleKeyDown = useHandleKeyDown(
    blocks,
    propertyBlocks,
    setBlocks,
    setPropertyBlocks,
    "block"
  )
  const handleArrowNavigation = useHandleArrowNavigation(textBlockRefs, blocks, "block")

  return (
    <textarea
      style={{ height: block.height }}
      className="w-full resize-none bg-transparent border-none focus:outline-none textarea-xs text-neutral-600"
      value={block.content}
      ref={(el) => (textBlockRefs.current[block.id] = el)}
      onChange={(e) => handleBlockInput(e, block.id)}
      onKeyDown={(e) => {
        handleKeyDown(e, propertyBlock?.id, block.id)
        handleArrowNavigation(e, block.id)
      }}
      rows={1}
      data-id={block.id}
      data-type="block"
    />
  )
}
