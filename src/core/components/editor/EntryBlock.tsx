import React, { useEffect, useRef } from "react"
import { useHandleArrowNavigation } from "src/hooks/useHandleArrowNavigation"
import { useHandleBlockInput } from "src/core/components/oldEditor/useHandleBlockInput"
// import { useHandleKeyDown } from "src/core/components/editor/useHandleBackspace"
import { useEntryBlocksStore } from "src/store/entryBlockStore"
import { useUIStore } from "src/store/uiStore"
import { Editor } from "./Editor"
import { useHandleEnter } from "./useHandleEnter"

// TODO add wsiwyg editor options when text is highlighted

export const EntryBlock = ({ propertyBlock }) => {
  const { entryBlocks } = useEntryBlocksStore()
  const { focusContext } = useUIStore()
  // const entryBlockRef = useRef<HTMLTextAreaElement | null>(null)
  const entryBlockRef = useRef<HTMLDivElement | null>(null)

  // const { handleEnter } = useHandleEnter()

  // const handleBlockRef = () => {
  //   if (focusContext?.id === entryBlock?.id && entryBlockRef.current) {
  //     entryBlockRef.current.focus()
  //   }
  // }

  // const handleBlockInput = useHandleBlockInput("entry")
  // const handleArrowNavigation = useHandleArrowNavigation("entry", handleBlockRef)
  // const handleKeyDown = useHandleKeyDown("entry")

  const entryBlock = entryBlocks.find((e) => e.id === propertyBlock.entryBlockId)

  // useEffect(() => {
  //   handleBlockRef()
  // }, [focusContext, entryBlock?.id])

  return (
    <>
      {entryBlock && propertyBlock && (
        <div
          // <textarea
          // contentEditable
          style={{ height: entryBlock.height }}
          className="w-full resize-none bg-transparent border-none focus:outline-none textarea-xs text-neutral-300 bg-slate-50"
          // value={entryBlock.content}
          ref={entryBlockRef}
          // onChange={(e) => handleBlockInput(e, entryBlock.id)}
          // onInput={(e) => handleBlockInput(e, entryBlock.id)}
          onKeyDown={(e) => {
            // handleKeyDown(e, propertyBlock)
            // handleArrowNavigation(e, propertyBlock.id, entryBlock.id, propertyBlock.order)
          }}
          // rows={1}
          tabIndex={0} // allows div to be focused
          data-id={entryBlock.id}
          data-type="entry"
        >
          <Editor
            content={entryBlock.content}
            // onEnter={() => handleEnter("entry", propertyBlock)}
            blockType="entry"
            blockId={entryBlock.id}
            propertyBlock={propertyBlock}
            isFocused={focusContext?.id === entryBlock.id}
          />
        </div>
      )}
    </>
  )
}
