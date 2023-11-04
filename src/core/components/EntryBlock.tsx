import React, { useEffect, useRef } from "react"
import { useHandleArrowNavigation } from "src/hooks/useHandleArrowNavigation"
import { useHandleBlockInput } from "src/hooks/useHandleBlockInput"
import { useHandleKeyDown } from "src/hooks/useHandleKeyDown"
import { useEntryBlocksStore } from "src/store/entryBlockStore"
import { useUIStore } from "src/store/uiStore"

// TODO add wsiwyg editor options when text is highlighted

export const EntryBlock = ({ propertyBlock }) => {
  const { entryBlocks } = useEntryBlocksStore()
  const { focusContext } = useUIStore()
  const entryBlockRef = useRef<HTMLTextAreaElement | null>(null)

  const handleBlockRef = () => {
    if (focusContext?.id === entryBlock?.id && entryBlockRef.current) {
      entryBlockRef.current.focus()
    }
  }

  const handleBlockInput = useHandleBlockInput("entry")
  const handleArrowNavigation = useHandleArrowNavigation("entry", handleBlockRef)
  const handleKeyDown = useHandleKeyDown("entry")

  const entryBlock = entryBlocks.find((e) => e.id === propertyBlock.entryBlockId)

  useEffect(() => {
    handleBlockRef()
  }, [focusContext, entryBlock?.id])

  return (
    <>
      {entryBlock && propertyBlock && (
        <textarea
          style={{ height: entryBlock.height }}
          className="w-full resize-none bg-transparent border-none focus:outline-none textarea-xs text-neutral-600"
          value={entryBlock.content}
          ref={entryBlockRef}
          onChange={(e) => handleBlockInput(e, entryBlock.id)}
          onKeyDown={(e) => {
            handleKeyDown(e, propertyBlock)
            handleArrowNavigation(e, propertyBlock.id, entryBlock.id, propertyBlock.order)
          }}
          rows={1}
          data-id={entryBlock.id}
          data-type="entry"
        />
      )}
    </>
  )
}
