import { usePropertyBlockStore } from "src/store/propertyBlockStore"
import { useUIStore } from "src/store/uiStore"

export const useHandleArrowNavigation = (blockType: string, propertyBlockOrder: number) => {
  const { setFocusContext } = useUIStore()
  const { propertyBlocks } = usePropertyBlockStore()

  const handleArrowNavigation = (arrowKey) => {
    // const textarea = e.target as HTMLTextAreaElement
    const prevPropertyBlock = propertyBlocks.find((b) => b.order === propertyBlockOrder - 1)
    const nextPropertyBlock = propertyBlocks.find((b) => b.order === propertyBlockOrder + 1)
    // If Up arrow is pressed and we're at the start of the textarea, and it's not the first block
    if (
      arrowKey === "up" &&
      // textarea.selectionStart === 0 &&
      propertyBlockOrder > 0 &&
      prevPropertyBlock
    ) {
      // e.preventDefault()
      setFocusContext(
        blockType === "property"
          ? { type: "property", id: prevPropertyBlock.id }
          : { type: "entry", id: prevPropertyBlock.entryBlockId }
      )
    }
    // If Down arrow is pressed and we're at the end of the textarea, and it's not the last textarea
    else if (
      arrowKey === "down" &&
      // textarea.selectionStart === textarea.value.length &&
      propertyBlockOrder < propertyBlocks.length - 1 &&
      nextPropertyBlock
    ) {
      // e.preventDefault()
      setFocusContext(
        nextPropertyBlock && blockType === "property"
          ? { type: "property", id: nextPropertyBlock.id }
          : { type: "entry", id: nextPropertyBlock.entryBlockId }
      )
    }
  }

  return handleArrowNavigation
}
