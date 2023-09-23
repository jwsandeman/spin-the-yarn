import { BlockType, useBlocksStore } from "src/store/blocksStore"

// TODO add logic to allow arrow navigation between properties

export const useHandleArrowNavigation = (
  textBlockRefs: React.MutableRefObject<(HTMLTextAreaElement | null)[]>,
  blocks: BlockType[]
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
        setFocusContext({ type: "block", id: prevBlockId })
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
        setFocusContext({ type: "block", id: nextBlockId })
      }
    }
  }
}
