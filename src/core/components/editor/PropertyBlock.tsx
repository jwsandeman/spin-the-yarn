import React, { useEffect, useRef, useState } from "react"
import { useHandleArrowNavigation } from "src/hooks/useHandleArrowNavigation"
import { useHandleBlockInput } from "src/core/components/oldEditor/useHandleBlockInput"
// import { useHandleKeyDown } from "src/core/components/editor/useHandleBackspace"
import { useHandleLinkKeyDown } from "src/hooks/useHandleLinkKeyDown"
import { LinkDropdownMenu } from "../oldEditor/LinkDropdownMenu"
import { useUIStore } from "src/store/uiStore"
import WarningModal from "./WarningModal"
import { useGetSourceProperty } from "src/hooks/useGetSourceProperty"
import { WysiwygToolbar } from "../oldEditor/WysiwygToolbar"
import { Editor } from "./Editor"
import { useHandleEnter } from "./useHandleEnter"

// TODO add wsiwyg editor options when text is highlighted

export const PropertyBlock = ({ propertyBlock }) => {
  const { focusContext, showWarning } = useUIStore()
  const { getSourceProperty } = useGetSourceProperty()
  const [searchValue, setSearchValue] = useState("")
  // const propertyBlockRef = useRef<HTMLTextAreaElement | null>(null)
  const propertyBlockRef = useRef<HTMLDivElement | null>(null)

  // const { handleEnter } = useHandleEnter()

  // const propertyBlockRef = useRef(null)

  // const handleBlockRef = () => {
  //   if (focusContext?.id === propertyBlock?.id && propertyBlockRef.current) {
  //     propertyBlockRef.current.focus()
  //   }
  // }

  // const handleBlockInput = useHandleBlockInput("property")
  // const handleArrowNavigation = useHandleArrowNavigation("property", handleBlockRef)
  // const {
  //   handleLinkKeyDown,
  //   handleInputChange,
  //   handleDropdownSelect,
  //   isDropdownVisible,
  //   setDropdownVisible,
  //   dropdownPosition,
  //   dropdownOptions,
  //   activeOptionIndex,
  // } = useHandleLinkKeyDown(searchValue, setSearchValue)
  // const handleKeyDown = useHandleKeyDown("property", isDropdownVisible)

  // useEffect(() => {
  //   handleBlockRef()
  // }, [focusContext, propertyBlock.id])

  // const handleResize = () => {
  //   const current = propertyBlockRef.current
  //   if (current) {
  //     // Set the height to 'auto' first to ensure the size is recalculated correctly
  //     current.style.height = "auto"
  //     // Set the height to the scrollHeight plus a little extra space
  //     current.style.height = `${current.scrollHeight}px`
  //   }
  // }

  // Run handleResize when propertyBlock.content changes
  // useEffect(() => {
  //   handleResize()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [propertyBlock?.content])

  // useEffect(() => {
  //   console.log("property block component => ", propertyBlock)
  //   console.log("property block component => ", getSourceProperty(propertyBlock))
  // }, [propertyBlock])

  return (
    <div className="relative">
      {propertyBlock && (
        // <textarea
        <div
          // contentEditable
          style={{ height: getSourceProperty(propertyBlock)?.height }}
          className="w-3/5 min-w-[200px] max-w-[1000px] resize-none bg-transparent border-none focus:outline-none textarea-xs text-neutral-300"
          // value={getSourceProperty(propertyBlock)?.content}
          ref={propertyBlockRef}
          // onChange={(e) => {
          // console.log("onChange firing")
          // handleInputChange(e)
          // handleBlockInput(e, propertyBlock.id)
          // }}
          onInput={(e) => {
            // console.log("onChange firing")
            // handleInputChange(e)
            // handleBlockInput(e, propertyBlock.id)
          }}
          onKeyDown={(e) => {
            console.log("onKeyDown firing")
            // handleKeyDown(e, propertyBlock)
            // handleLinkKeyDown(e, propertyBlock.id)
            // handleArrowNavigation(
            // e,
            // propertyBlock.id,
            // propertyBlock.entryBlockId,
            // propertyBlock.order
            // )
          }}
          // rows={1}
          tabIndex={0} // allows div to be focused
          data-id={`${propertyBlock.id}-${propertyBlock.entryBlockId}`}
          data-type="property"
        >
          {/* {getSourceProperty(propertyBlock)?.content} */}
          <Editor
            content={propertyBlock.content}
            // onEnter={() => handleEnter("property", propertyBlock)}
            blockType={"property"}
            blockId={propertyBlock.id}
            propertyBlock={propertyBlock}
            isFocused={focusContext?.id === propertyBlock.id}
          />
        </div>
      )}
      {/* <WysiwygToolbar contentEditableRef={propertyBlockRef} /> */}
      {/* Dropdown select */}
      {/* {propertyBlock && isDropdownVisible && (
        <LinkDropdownMenu
          options={dropdownOptions}
          activeOptionIndex={activeOptionIndex}
          onSelect={(option) => handleDropdownSelect(option, propertyBlock.id)}
          onClose={() => setDropdownVisible(false)}
          position={dropdownPosition}
        />
      )}
      {showWarning && <WarningModal />} */}
    </div>
  )
}
