import React from "react"
import { usePropertyBlockStore } from "src/store/propertyBlockStore"
import { useUIStore } from "src/store/uiStore"

export const useHandleTab = (blockType, propertyBlock) => {
  const { setFocusContext } = useUIStore()
  const { propertyBlocks } = usePropertyBlockStore()

  const prevPropertyBlock = propertyBlocks.find((b) => b.order === propertyBlock.order - 1)
  const nextPropertyBlock = propertyBlocks.find((b) => b.order === propertyBlock.order + 1)

  const handleTab = () => {
    if (!propertyBlock) {
      return
    }

    if (nextPropertyBlock || blockType === "property") {
      setFocusContext(
        blockType === "property"
          ? { type: "entry", id: propertyBlock.entryBlockId }
          : { type: "property", id: nextPropertyBlock?.id }
      )
    }
  }

  const handleShiftTab = () => {
    if (!propertyBlock) {
      return
    }

    if (prevPropertyBlock || blockType === "entry") {
      setFocusContext(
        blockType === "property"
          ? { type: "entry", id: prevPropertyBlock?.entryBlockId }
          : { type: "property", id: propertyBlock.id }
      )
    }
  }

  return [handleTab, handleShiftTab]
}
