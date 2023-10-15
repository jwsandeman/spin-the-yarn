import { BlockType, useBlocksStore } from "src/store/blocksStore"
import { useHandleFocusShift } from "./useHandleFocusShift"
import { PropertyBlockType } from "src/store/propertyBlocksStore"

// TODO - refactor component to use useHandleFocusShift hook where possible

// BUG - arrow navigation is not working for properties as it is currently relying on index and property block indexes arent being mapped in any order like the text blocks are
// BUG - when pressing enter in a property, the arrow navigation stops working. most likely related tot he above bug

type FocusableBlock = {
  id: string
  content: string
  style: string
  type: string
}

// export const useHandleArrowNavigation = <T extends FocusableBlock>(
//   blockRefs: React.MutableRefObject<(HTMLTextAreaElement | null)[]>,
//   blocks: T[],
//   blockType: "block" | "property"
// ) => {
export const useHandleArrowNavigation = (
  blockRefs: React.MutableRefObject<(HTMLTextAreaElement | null)[]>,
  blocks: BlockType[],
  propertyBlocks: PropertyBlockType[],
  blockType: "block" | "property"
) => {
  const { focusContext, setFocusContext } = useBlocksStore()
  const { handleFocusShiftToProperty } = useHandleFocusShift()

  return (e: React.KeyboardEvent<HTMLTextAreaElement>, blockId: string) => {
    const textarea = e.target as HTMLTextAreaElement

    const currentBlockIndex = blocks.findIndex((block) => block.id === blockId)
    // const currentPropertyBlockIndex = propertyBlocks.findIndex(
    //   (propertyBlock) => propertyBlock.id === blockId
    // )
    // const currentBlockIndex = blocks.findIndex((block) => block.id === blockId)

    // If Up arrow is pressed and we're at the start of the textarea, and it's not the first textarea
    if (e.key === "ArrowUp" && textarea.selectionStart === 0 && currentBlockIndex > 0) {
      e.preventDefault()

      // if (currentPropertyBlockIndex > -1) {
      if (blockType === "property") {
        // current block is a property
        const associatedTextBlockIndex = blocks.findIndex((block) => block.propertyId === blockId)
        const prevTextBlock = blocks[associatedTextBlockIndex - 1]
        if (prevTextBlock) {
          // setFocusContext({ type: blockType, id: prevBlockId })
          handleFocusShiftToProperty(prevTextBlock)
        }
      }
    }
    // If Down arrow is pressed and we're at the end of the textarea, and it's not the last textarea
    else if (
      e.key === "ArrowDown" &&
      textarea.selectionStart === textarea.value.length &&
      currentBlockIndex < blocks.length - 1
    ) {
      e.preventDefault()

      // if (currentPropertyBlockIndex > -1) {
      if (blockType === "property") {
        // current block is a property
        const associatedTextBlock = blocks.find((block) => block.propertyId === blockId)
        const associatedTextBlockIndex = blocks.findIndex((block) => block.propertyId === blockId)
        const nextTextBlock = blocks[associatedTextBlockIndex + 1]
        if (nextTextBlock) {
          // setFocusContext({ type: blockType, id: prevBlockId })
          handleFocusShiftToProperty(nextTextBlock)
        }
      }
      const nextBlockId = blocks[currentBlockIndex + 1]?.id
      if (nextBlockId) {
        // setFocusContext({ type: blockType, id: nextBlockId })
      }
    }
  }
}
