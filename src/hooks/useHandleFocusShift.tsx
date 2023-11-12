import React from "react"
import { EntryBlockType } from "src/store/entryBlockStore"
import { useUIStore } from "src/store/uiStore"

// TODO - Get rid of this component, DOM manipulation === BAD

export const useHandleFocusShift = () => {
  const { setFocusContext } = useUIStore()

  const handleFocusShiftToProperty = (block: EntryBlockType) => {
    const targetPropertyId = `${block.propertyBlockId}-${block.id}`
    setFocusContext({ type: "property", id: targetPropertyId })

    const targetElement = document.querySelector(`[data-id="${targetPropertyId}"]`)
    console.log(targetElement)
    if (targetElement && "focus" in targetElement) {
      ;(targetElement as HTMLElement).focus()
    }
  }

  const handleFocusShiftToEntryBlock = (block: EntryBlockType) => {
    const targetElement = document.querySelector(`[data-id="${block.id}"]`)
    if (targetElement && "focus" in targetElement) {
      ;(targetElement as HTMLElement).focus()
    }
  }

  return {
    handleFocusShiftToProperty,
    handleFocusShiftToEntryBlock,
  }
}
