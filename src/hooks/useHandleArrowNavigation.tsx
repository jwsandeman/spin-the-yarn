import { usePropertyBlockStore } from "src/store/propertyBlockStore"
import { useUIStore } from "src/store/uiStore"

export const useHandleArrowNavigation = (
  blockType: "entry" | "property",
  handleBlockRef: () => void
) => {
  const { setFocusContext } = useUIStore()
  const { propertyBlocks } = usePropertyBlockStore()

  return (
    e: React.KeyboardEvent<HTMLTextAreaElement>,
    propertyBlockId: string,
    entryBlockId: string,
    propertyBlockOrder: number
  ) => {
    e.preventDefault()
    const textarea = e.target as HTMLTextAreaElement

    const prevPropertyBlock = propertyBlocks.find((b) => b.order === propertyBlockOrder - 1)
    const nextPropertyBlock = propertyBlocks.find((b) => b.order === propertyBlockOrder + 1)
    // If Up arrow is pressed and we're at the start of the textarea, and it's not the first block
    if (
      e.key === "ArrowUp" &&
      textarea.selectionStart === 0 &&
      propertyBlockOrder > 0 &&
      prevPropertyBlock
    ) {
      setFocusContext(
        blockType === "property"
          ? { type: "property", id: prevPropertyBlock.id }
          : { type: "entry", id: prevPropertyBlock.entryBlockId }
      )
    }
    // If Down arrow is pressed and we're at the end of the textarea, and it's not the last textarea
    else if (
      e.key === "ArrowDown" &&
      textarea.selectionStart === textarea.value.length &&
      propertyBlockOrder < propertyBlocks.length - 1 &&
      nextPropertyBlock
    ) {
      setFocusContext(
        nextPropertyBlock && blockType === "property"
          ? { type: "property", id: nextPropertyBlock.id }
          : { type: "entry", id: nextPropertyBlock.entryBlockId }
      )
    }
  }
}
