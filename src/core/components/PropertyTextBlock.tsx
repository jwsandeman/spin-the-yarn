import React, { useEffect, useRef, useState } from "react"
import { useHandleArrowNavigation } from "src/hooks/useHandleArrowNavigation"
import { useHandleBlockInput } from "src/hooks/useHandleBlockInput"
import { useHandleKeyDown } from "src/hooks/useHandleKeyDown"
import { useHandleLinkKeyDown } from "src/hooks/useHandleLinkKeyDown"
import { useBlocksStore } from "src/store/blocksStore"
import { usePropertyBlocksStore } from "src/store/propertyBlocksStore"
import { LinkDropdownMenu } from "./LinkDropdownMenu"
import { set } from "zod"

// TODO add wsiwyg editor options when text is highlighted

export const PropertyTextBlock = ({ propertyBlock, textBlock, index, propertyBlockRefs }) => {
  const { blocks, setBlocks, setFocusIndex } = useBlocksStore()
  const { propertyBlocks, setPropertyBlocks } = usePropertyBlocksStore()
  const [searchValue, setSearchValue] = useState("")

  const handleBlockInput = useHandleBlockInput(propertyBlocks, setPropertyBlocks)
  const handleArrowNavigation = useHandleArrowNavigation(
    propertyBlockRefs,
    propertyBlocks,
    "property"
  )
  const handleKeyDown = useHandleKeyDown(
    blocks,
    propertyBlocks,
    setBlocks,
    setPropertyBlocks,
    "property"
  )
  const {
    handleLinkKeyDown,
    handleInputChange,
    handleDropdownSelect,
    isDropdownVisible,
    setDropdownVisible,
    dropdownPosition,
    dropdownOptions,
    activeOptionIndex,
  } = useHandleLinkKeyDown(
    blocks,
    propertyBlocks,
    setBlocks,
    setPropertyBlocks,
    searchValue,
    setSearchValue
  )

  return (
    <div className="relative">
      <textarea
        style={{ height: propertyBlock?.height }}
        className="w-1/5 min-w-[100px] max-w-[400px] resize-none bg-transparent border-none focus:outline-none textarea-xs text-neutral-600"
        value={propertyBlock?.content}
        ref={(el) => (propertyBlockRefs.current[propertyBlock?.id] = el)}
        onChange={(e) => {
          handleInputChange(e)
          handleBlockInput(e, propertyBlock?.id)
        }}
        onKeyDown={(e) => {
          handleKeyDown(e, propertyBlock?.id, textBlock?.id)
          handleLinkKeyDown(e, propertyBlock?.id)
          handleArrowNavigation(e, propertyBlock?.id)
        }}
        rows={1}
        data-id={propertyBlock?.id}
        data-type="property"
      />
      {/* Dropdown select */}
      {isDropdownVisible && (
        <LinkDropdownMenu
          options={dropdownOptions}
          activeOptionIndex={activeOptionIndex}
          onSelect={(option) => handleDropdownSelect(option, propertyBlock?.id)}
          onClose={() => setDropdownVisible(false)}
          position={dropdownPosition}
        />
      )}
    </div>
  )
}
