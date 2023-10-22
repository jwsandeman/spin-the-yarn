import React, { useEffect, useRef, useState } from "react"
import { useHandleArrowNavigation } from "src/hooks/useHandleArrowNavigation"
import { useHandleBlockInput } from "src/hooks/useHandleBlockInput"
import { useHandleKeyDown } from "src/hooks/useHandleKeyDown"
import { useTextBlocksStore } from "src/store/textBlockStore"
import { usePropertyBlocksStore } from "src/store/propertyBlockStore"

// TODO add wsiwyg editor options when text is highlighted

export const TextBlock = ({ textBlock, propertyBlock, index, textBlockRefs }) => {
  const { textBlocks, setTextBlocks } = useTextBlocksStore()
  const { propertyBlocks, setPropertyBlocks } = usePropertyBlocksStore()
  const handleBlockInput = useHandleBlockInput(textBlocks, setTextBlocks)
  const handleKeyDown = useHandleKeyDown(
    textBlocks,
    propertyBlocks,
    setTextBlocks,
    setPropertyBlocks,
    "block"
  )
  const handleArrowNavigation = useHandleArrowNavigation(
    // setTextBlockRefs,
    textBlockRefs,
    textBlocks,
    propertyBlocks,
    "block"
  )

  return (
    <textarea
      style={{ height: textBlock.height }}
      className="w-full resize-none bg-transparent border-none focus:outline-none textarea-xs text-neutral-600"
      value={textBlock.content}
      ref={(el) => (textBlockRefs.current[textBlock.id] = el)}
      // ref={(el) => {
      //   if (textBlock?.id) {
      //     setTextBlockRefs((prevTextBlocks) => ({
      //       ...prevTextBlocks,
      //       [textBlock?.id]: el,
      //     }))
      //   }
      // }}
      onChange={(e) => handleBlockInput(e, textBlock.id)}
      onKeyDown={(e) => {
        handleKeyDown(e, propertyBlock?.id, textBlock.id)
        handleArrowNavigation(e, propertyBlock.id, textBlock.id)
      }}
      rows={1}
      data-id={textBlock.id}
      data-type="block"
    />
  )
}
