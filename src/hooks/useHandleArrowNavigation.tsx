import { useBlocksStore } from "src/store/blocksStore"

// BUG - arrow navigation is not working for preoperties as it is currently relying on index and property block indexes arent being mapped in any order like the text blocks are

type FocusableBlock = {
  id: string
  content: string
  style: string
  type: string
}

export const useHandleArrowNavigation = <T extends FocusableBlock>(
  blockRefs: React.MutableRefObject<(HTMLTextAreaElement | null)[]>,
  blocks: T[],
  blockType: "block" | "property"
) => {
  const { focusContext, setFocusContext } = useBlocksStore()

  return (e: React.KeyboardEvent<HTMLTextAreaElement>, blockId: string) => {
    const textarea = e.target as HTMLTextAreaElement

    const currentBlockIndex = blocks.findIndex((block) => block.id === blockId)

    // If Up arrow is pressed and we're at the start of the textarea, and it's not the first textarea
    if (e.key === "ArrowUp" && textarea.selectionStart === 0 && currentBlockIndex > 0) {
      e.preventDefault()
      const prevBlockId = blocks[currentBlockIndex - 1]?.id
      if (prevBlockId) {
        setFocusContext({ type: blockType, id: prevBlockId })
      }
    }
    // If Down arrow is pressed and we're at the end of the textarea, and it's not the last textarea
    else if (
      e.key === "ArrowDown" &&
      textarea.selectionStart === textarea.value.length &&
      currentBlockIndex < blocks.length - 1
    ) {
      e.preventDefault()
      const nextBlockId = blocks[currentBlockIndex + 1]?.id
      if (nextBlockId) {
        setFocusContext({ type: blockType, id: nextBlockId })
      }
    }
  }
}
