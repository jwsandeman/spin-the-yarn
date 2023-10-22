import React from "react"
import { BlockType, useBlocksStore } from "src/store/textBlockStore"
import { useFocusStore } from "src/store/focusStore"

export const useHandleFocusShift = () => {
  const { setFocusContext } = useFocusStore()

  const handleFocusShiftToProperty = (block: BlockType) => {
    const targetPropertyId = `${block.propertyId}-${block.id}`
    setFocusContext({ type: "property", id: targetPropertyId })

    const targetElement = document.querySelector(`[data-id="${targetPropertyId}"]`)
    console.log(targetElement)
    if (targetElement && "focus" in targetElement) {
      ;(targetElement as HTMLElement).focus()
    }
  }

  const handleFocusShiftToTextBlock = (block: BlockType) => {
    const targetElement = document.querySelector(`[data-id="${block.id}"]`)
    if (targetElement && "focus" in targetElement) {
      ;(targetElement as HTMLElement).focus()
    }
  }

  return {
    handleFocusShiftToProperty,
    handleFocusShiftToTextBlock,
  }
}
