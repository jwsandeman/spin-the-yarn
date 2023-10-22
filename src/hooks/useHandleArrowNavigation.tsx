import { TextBlockType, useTextBlocksStore } from "src/store/textBlockStore"
import { useHandleFocusShift } from "./useHandleFocusShift"
import { PropertyBlockType } from "src/store/propertyBlockStore"
import { useFocusStore } from "src/store/focusStore"

// ?BUG/TODO Convert textBlockRefs and propertyBlockRefs to Rossis new useState format in all affected components

type FocusableBlock = {
  id: string
  content: string
  style: string
  type: string
}

export const useHandleArrowNavigation = (
  setTextBlockRefs: React.MutableRefObject<(HTMLTextAreaElement | null)[]>,
  blocks: TextBlockType[],
  propertyBlocks: PropertyBlockType[],
  blockType: "block" | "property"
) => {
  const { focusContext, setFocusContext } = useFocusStore()
  const { handleFocusShiftToProperty, handleFocusShiftToTextBlock } = useHandleFocusShift()

  return (
    e: React.KeyboardEvent<HTMLTextAreaElement>,
    propertyBlockId: string,
    textBlockId: string
  ) => {
    const textarea = e.target as HTMLTextAreaElement
    const currentTextBlockIndex = blocks.findIndex((block) => block.id === textBlockId)

    // If Up arrow is pressed and we're at the start of the textarea, and it's not the first textarea
    if (e.key === "ArrowUp" && textarea.selectionStart === 0 && currentTextBlockIndex > 0) {
      e.preventDefault()
      const prevTextBlock = blocks[currentTextBlockIndex - 1]
      if (blockType === "block" && prevTextBlock) {
        handleFocusShiftToTextBlock(prevTextBlock)
      } else if (blockType === "property" && prevTextBlock) {
        handleFocusShiftToProperty(prevTextBlock)
      }
    }
    // If Down arrow is pressed and we're at the end of the textarea, and it's not the last textarea
    else if (
      e.key === "ArrowDown" &&
      textarea.selectionStart === textarea.value.length &&
      currentTextBlockIndex < blocks.length - 1
    ) {
      e.preventDefault()
      const nextTextBlock = blocks[currentTextBlockIndex + 1]
      if (blockType === "block" && nextTextBlock) {
        handleFocusShiftToTextBlock(nextTextBlock)
      } else if (blockType === "property" && nextTextBlock) {
        handleFocusShiftToProperty(nextTextBlock)
      }
    }
  }
}
