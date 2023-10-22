import React, { useEffect, useRef, useState } from "react"
import { useHandleArrowNavigation } from "src/hooks/useHandleArrowNavigation"
import { useHandleBlockInput } from "src/hooks/useHandleBlockInput"
import { useHandleKeyDown } from "src/hooks/useHandleKeyDown"
import { useHandleLinkKeyDown } from "src/hooks/useHandleLinkKeyDown"
import { useTextBlocksStore } from "src/store/textBlockStore"
import { usePropertyBlocksStore } from "src/store/propertyBlockStore"
import { LinkDropdownMenu } from "./LinkDropdownMenu"
import { set } from "zod"
import { useFocusStore } from "src/store/focusStore"

// TODO add wsiwyg editor options when text is highlighted

// ?BUG/TODO Convert textBlockRefs and propertyBlockRefs to Rossis new useState format in all affected components

export const PropertyTextBlock = ({
  propertyBlock,
  textBlock,
  index,
  propertyBlockRefs,
  // setPropertyBlockRefs,
}) => {
  const { textBlocks, setTextBlocks } = useTextBlocksStore()
  const { setFocusIndex } = useFocusStore()
  const { propertyBlocks, setPropertyBlocks } = usePropertyBlocksStore()
  const [searchValue, setSearchValue] = useState("")

  const handleBlockInput = useHandleBlockInput(propertyBlocks, setPropertyBlocks)
  const handleArrowNavigation = useHandleArrowNavigation(
    // setPropertyBlockRefs,
    propertyBlockRefs,
    textBlocks,
    propertyBlocks,
    "property"
  )
  const handleKeyDown = useHandleKeyDown(
    textBlocks,
    propertyBlocks,
    setTextBlocks,
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
    textBlocks,
    propertyBlocks,
    setTextBlocks,
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
        ref={(el) => {
          propertyBlockRefs.current[propertyBlock?.id] = el
          // if (propertyBlock?.id) {
          //   setPropertyBlockRefs((prevPropBlockRefs) => ({
          //     ...prevPropBlockRefs,
          //     [propertyBlock?.id]: el,
          //   }))
          // {
          //   "propertyBlock?.id 1": el1,
          //   "propertyBlock?.id 2": el2,
          // }
          // propertyBlockRefs["Jason"].focus()
          // propertyBlockRefs.current[propertyBlock?.id] = el
          // }
        }}
        onChange={(e) => {
          handleInputChange(e)
          handleBlockInput(e, propertyBlock?.id)
        }}
        onKeyDown={(e) => {
          handleKeyDown(e, propertyBlock?.id, textBlock?.id)
          handleLinkKeyDown(e, propertyBlock?.id)
          handleArrowNavigation(e, propertyBlock?.id, textBlock?.id)
        }}
        rows={1}
        // data-id={propertyBlock?.id}
        data-id={`${propertyBlock?.id}-${textBlock?.id}`}
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
