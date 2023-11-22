import React, { useEffect, useRef, useState } from "react"
import { useHandleArrowNavigation } from "src/hooks/useHandleArrowNavigation"
import { useHandleBlockInput } from "src/hooks/useHandleBlockInput"
import { useHandleKeyDown } from "src/hooks/useHandleKeyDown"
import { useHandleLinkKeyDown } from "src/hooks/useHandleLinkKeyDown"
import { LinkDropdownMenu } from "./LinkDropdownMenu"
import { useUIStore } from "src/store/uiStore"
import WarningModal from "./WarningModal"
import { useGetSourceProperty } from "src/hooks/useGetSourceProperty"

// TODO add wsiwyg editor options when text is highlighted

export const PropertyBlock = ({ propertyBlock }) => {
  const { focusContext, showWarning } = useUIStore()
  const { getSourceProperty } = useGetSourceProperty()
  const [searchValue, setSearchValue] = useState("")
  const propertyBlockRef = useRef<HTMLTextAreaElement | null>(null)

  const handleBlockRef = () => {
    if (focusContext?.id === propertyBlock?.id && propertyBlockRef.current) {
      propertyBlockRef.current.focus()
    }
  }

  const handleBlockInput = useHandleBlockInput("property")
  const handleArrowNavigation = useHandleArrowNavigation("property", handleBlockRef)
  const {
    handleLinkKeyDown,
    handleInputChange,
    handleDropdownSelect,
    isDropdownVisible,
    setDropdownVisible,
    dropdownPosition,
    dropdownOptions,
    activeOptionIndex,
  } = useHandleLinkKeyDown(searchValue, setSearchValue)
  const handleKeyDown = useHandleKeyDown("property", isDropdownVisible)

  useEffect(() => {
    handleBlockRef()
  }, [focusContext, propertyBlock.id])

  const handleResize = () => {
    const current = propertyBlockRef.current
    if (current) {
      // Set the height to 'auto' first to ensure the size is recalculated correctly
      current.style.height = "auto"
      // Set the height to the scrollHeight plus a little extra space
      current.style.height = `${current.scrollHeight}px`
    }
  }

  // Run handleResize when propertyBlock.content changes
  useEffect(() => {
    handleResize()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propertyBlock?.content])

  // useEffect(() => {
  //   console.log("property block component => ", propertyBlock)
  //   console.log("property block component => ", getSourceProperty(propertyBlock))
  // }, [propertyBlock])

  return (
    <div className="relative">
      {propertyBlock && (
        <textarea
          style={{ height: getSourceProperty(propertyBlock)?.height }}
          className="w-1/5 min-w-[100px] max-w-[400px] resize-none bg-transparent border-none focus:outline-none textarea-xs text-neutral-600"
          value={getSourceProperty(propertyBlock)?.content}
          ref={propertyBlockRef}
          onChange={(e) => {
            console.log("onChange firing")
            handleInputChange(e)
            handleBlockInput(e, propertyBlock.id)
          }}
          onKeyDown={(e) => {
            console.log("onKeyDown firing")
            handleKeyDown(e, propertyBlock)
            handleLinkKeyDown(e, propertyBlock.id)
            handleArrowNavigation(
              e,
              propertyBlock.id,
              propertyBlock.entryBlockId,
              propertyBlock.order
            )
          }}
          rows={1}
          data-id={`${propertyBlock.id}-${propertyBlock.entryBlockId}`}
          data-type="property"
        />
      )}
      {/* Dropdown select */}
      {propertyBlock && isDropdownVisible && (
        <LinkDropdownMenu
          options={dropdownOptions}
          activeOptionIndex={activeOptionIndex}
          onSelect={(option) => handleDropdownSelect(option, propertyBlock.id)}
          onClose={() => setDropdownVisible(false)}
          position={dropdownPosition}
        />
      )}
      {showWarning && <WarningModal />}
    </div>
  )
}
