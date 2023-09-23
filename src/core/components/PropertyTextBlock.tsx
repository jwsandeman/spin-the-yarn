import React, { useEffect, useRef, useState } from "react"
import { useHandleArrowNavigation } from "src/hooks/useHandleArrowNavigation"
import { useHandleBlockInput } from "src/hooks/useHandleBlockInput"
import { useHandleKeyDown } from "src/hooks/useHandleKeyDown"
import { useHandleLinkKeyDown } from "src/hooks/useHandleLinkKeyDown"
import { useBlocksStore } from "src/store/blocksStore"
import { usePropertyBlocksStore } from "src/store/propertyBlocksStore"
import { LinkDropdownMenu } from "./LinkDropdownMenu"

export const PropertyTextBlock = ({ propertyBlock, index, propertyBlockRefs, textBlock }) => {
  const { blocks, setBlocks, setFocusIndex } = useBlocksStore()
  const { propertyBlocks, setPropertyBlocks } = usePropertyBlocksStore()
  const handleBlockInput = useHandleBlockInput(propertyBlocks, setPropertyBlocks)
  // Pass in blocks as we want to move to the next/previos text block and not property
  // const handleArrowNavigation = useHandleArrowNavigation(propertyBlockRefs, blocks)
  const handleKeyDown = useHandleKeyDown(blocks, propertyBlocks, setPropertyBlocks)
  const {
    handleLinkKeyDown,
    handleDropdownSelect,
    isDropdownVisible,
    setDropdownVisible,
    dropdownPosition,
    dropdownOptions,
    setDropdownOptions,
  } = useHandleLinkKeyDown(blocks, propertyBlocks, setBlocks)

  return (
    <>
      <textarea
        style={{ height: propertyBlock?.height }}
        className="w-1/5 min-w-[100px] max-w-[400px] resize-none bg-transparent border-none focus:outline-none textarea-xs text-neutral-600"
        value={propertyBlock?.content}
        // ref={(el) => (propertyBlockRefs.current[textBlock.id] = el)}
        ref={(el) => (propertyBlockRefs.current[propertyBlock?.id] = el)}
        onChange={(e) => handleBlockInput(e, propertyBlock?.id)}
        onKeyDown={(e) => {
          handleKeyDown(e, propertyBlock?.id)
          handleLinkKeyDown(e, propertyBlock?.id)
          // handleArrowNavigation(e, index)
        }}
        rows={1}
        data-id={propertyBlock?.id}
        data-type="property"
      />
      {/* Dropdown select */}
      {isDropdownVisible && (
        <LinkDropdownMenu
          options={dropdownOptions}
          onSelect={(option) => handleDropdownSelect(option, propertyBlock?.id)}
          onClose={() => setDropdownVisible(false)}
          position={dropdownPosition}
        />
      )}
    </>
  )
}
