import { BlockType, useBlocksStore } from "src/store/blocksStore"
import { PropertyBlockType } from "src/store/propertyBlocksStore"
import { useHandleFocusShift } from "./useHandleFocusShift"

// TODO - Add back slash command to create new dropdown menu with formatting options
// TODO - refactor this component to seperate concerns
// TODO - when backspacing in an empty text block it should shift focus to the associated property block
// TODO - refactor component to use useHandleFocusShift hook where possible

// ?BUG - when pressing enter in a property it doesnt add focus to the new property below
// ?BUG - backspace is not working in linked properties now because im currently using the property block id to set the focus and it is getting confused when there are multiple properties with the same Id (seems to working when there is no prev property/text block. more investigation is required)

export const useHandleKeyDown = (
  blocks: BlockType[],
  propertyBlocks: PropertyBlockType[],
  setBlocks: (blocks: BlockType[] | ((prevBlocks: BlockType[]) => BlockType[])) => void,
  setPropertyBlocks: (
    propertyBlocks: PropertyBlockType[] | ((prevBlocks: PropertyBlockType[]) => PropertyBlockType[])
  ) => void,
  blockType: "block" | "property"
) => {
  const { setFocusIndex, focusContext, setFocusContext } = useBlocksStore()
  const { handleFocusShiftToProperty, handleFocusShiftToTextBlock } = useHandleFocusShift()
  // console.log("property blocks", propertyBlocks)
  // console.log("blocks", blocks)

  return (
    e: React.KeyboardEvent<HTMLTextAreaElement>,
    propertyBlockId: string,
    textBlockId: string
  ) => {
    const blockId = blockType === "block" ? textBlockId : propertyBlockId
    // not sure if this helps or not???
    // setFocusContext({ type: e.currentTarget.dataset.type as string, id: blockId }) // Get the type from the dataset
    // console.log("focusContext", focusContext)

    // ========== ENTER ========== //

    if (e.key === "Enter" && blockId) {
      e.preventDefault() // Prevents the default action of the enter key

      // If "Shift" + "Enter" is pressed, allow default behavior (new line in textarea)
      if (e.shiftKey) {
        return
      }

      // If only "Enter" is pressed, add a new block directly below the current block
      // Create a new text block
      const newBlock = {
        id: Math.random().toString(36).substr(2, 9),
        content: "",
        style: "", // Adjust as needed
        type: "textArea", // Adjust as needed
        propertyId: "",
      }
      // Create a new property block
      const newPropertyBlock = {
        id: Math.random().toString(36).substr(2, 9),
        content: "",
        style: "font-bold",
        type: "",
        height: "auto",
        blockIds: [newBlock.id],
      }
      // Associate the new text block with the new property block
      newBlock.propertyId = newPropertyBlock.id

      const currentBlockIndex = blocks.findIndex((block) => block.id === textBlockId)
      setBlocks((prevBlocks) => {
        const updatedBlocks = [...prevBlocks]
        // Insert new block after current block
        updatedBlocks.splice(currentBlockIndex + 1, 0, newBlock)
        if (blockType === "block") {
          // console.log("blockType", blockType)
          // setFocusContext({ type: blockType, id: newBlock.id })
        }
        return updatedBlocks
      })
      setPropertyBlocks((prevPropertyBlocks) => {
        const updatedPropertyBlocks = [...prevPropertyBlocks, newPropertyBlock]
        if (blockType === "property") {
          // console.log("blockType", blockType)
          // setFocusContext({ type: blockType, id: newPropertyBlock.id })
          // setFocusContext({ type: blockType, id: newBlock.id })
        }
        return updatedPropertyBlocks
      })
      // check if its a block or property then set focus context
      if (blockType === "block") {
        setFocusContext({ type: blockType, id: newBlock.id })
        // console.log("setting text block focus: ", "newBlockId", newBlock.id)
      } else {
        // console.log("blockType in property focus setter", blockType)
        setFocusContext({ type: blockType, id: newPropertyBlock.id })
        // console.log("setting property block focus: ", "newPropertyBlockId", newPropertyBlock.id)
      }
      // console.log("focusContext", focusContext)
    }

    // ========== BACKSPACE ========== //

    if (e.key === "Backspace" && blockId) {
      if (e.shiftKey) {
        return
      }

      const currentBlockIndex = blocks.findIndex((block) => block.id === blockId)
      const currentPropertyBlockIndex = propertyBlocks.findIndex(
        (propertyBlock) => propertyBlock.id === blockId
      )
      const currentPropertyBlock = propertyBlocks.find(
        (propertyBlock) => propertyBlock.id === blockId
      )

      if (currentPropertyBlockIndex > -1) {
        // Current block is a property block
        const associatedTextBlock = blocks.find((block) => block.propertyId === blockId)
        const associatedTextBlockIndex = blocks.findIndex((block) => block.propertyId === blockId)
        const prevTextBlock = blocks[associatedTextBlockIndex - 1]
        const nextTextBlock = blocks[associatedTextBlockIndex + 1]
        if (
          associatedTextBlock &&
          !propertyBlocks[currentPropertyBlockIndex]?.content &&
          !associatedTextBlock?.content &&
          (prevTextBlock || nextTextBlock)
        ) {
          if (prevTextBlock) {
            // console.log("prevTextBlockId", prevTextBlock)
            handleFocusShiftToProperty(prevTextBlock)
            // setFocusContext({ type: "property", id: prevPropertyBlockId })
          } else if (nextTextBlock) {
            // console.log("nextPropertyBlockId", nextTextBlock)
            handleFocusShiftToProperty(nextTextBlock)
            // setFocusContext({ type: "property", id: nextPropertyBlockId })
          }
          setBlocks((prevBlocks) => {
            const updatedBlocks = [...prevBlocks]
            updatedBlocks.splice(updatedBlocks.indexOf(associatedTextBlock), 1) // remove the associated text block
            return updatedBlocks.filter((block) => block.id !== blockId) // Delete the current text block from the store
          })
          // remove associated property block from propertyBlocks array if it isnt linked to another text block
          if (currentPropertyBlock) {
            if (currentPropertyBlock.blockIds?.length === 1) {
              setPropertyBlocks((prevPropertyBlocks) => {
                const updatedPropertyBlocks = [...prevPropertyBlocks]
                updatedPropertyBlocks.splice(currentPropertyBlockIndex, 1) // Delete the current property block
                return updatedPropertyBlocks
              })
            } else {
              setPropertyBlocks((prevPropertyBlocks) => {
                const updatedPropertyBlocks = [...prevPropertyBlocks]
                const updatedPropertyBlock = { ...currentPropertyBlock }
                updatedPropertyBlock.blockIds = updatedPropertyBlock.blockIds?.filter(
                  (blockId) => blockId !== textBlockId
                )
                updatedPropertyBlocks.splice(currentPropertyBlockIndex, 1, updatedPropertyBlock) // Delete the current property block
                return updatedPropertyBlocks
              })
            }
          }
          // setPropertyBlocks((prevPropertyBlocks) => {
          //   const updatedPropertyBlocks = [...prevPropertyBlocks]
          //   updatedPropertyBlocks.splice(currentPropertyBlockIndex, 1) // Delete the current property block
          //   return updatedPropertyBlocks
          // })
          e.preventDefault()
        }
      } else {
        // Current block is a text block
        const associatedPropertyBlock = propertyBlocks.find(
          (propertyBlock) => propertyBlock.id === blocks[currentBlockIndex]?.propertyId
        )
        const prevBlock = blocks[currentBlockIndex - 1]
        const nextBlock = blocks[currentBlockIndex + 1]
        if (
          associatedPropertyBlock &&
          !blocks[currentBlockIndex]?.content &&
          !associatedPropertyBlock?.content &&
          (prevBlock || nextBlock)
        ) {
          setBlocks((prevBlocks) => {
            const updatedBlocks = [...prevBlocks]
            // updatedBlocks.splice(updatedBlocks.indexOf(associatedPropertyBlock), 1) // Delete the associated property block
            updatedBlocks.splice(currentBlockIndex, 1) // Delete the current text block
            return updatedBlocks.filter((block) => block.id !== blockId) // Delete the current text block
          })
          if (prevBlock) {
            // setFocusContext({ type: "block", id: prevBlockId })
            handleFocusShiftToTextBlock(prevBlock)
          } else if (nextBlock) {
            // setFocusContext({ type: "block", id: nextBlockId })
            handleFocusShiftToTextBlock(nextBlock)
          }
          e.preventDefault()
        }
      }
    }

    // ========== TAB ========== //

    if (e.key === "Tab" && blockId) {
      e.preventDefault() // Prevent default tab behavior
      // Handle Shift + Tab
      if (e.shiftKey) {
        if (blocks.find((block) => block.id === blockId)) {
          // If a textBlock is focused, find the associated property block and set the focus to it
          const currentTextBlock = blocks.find((block) => block.id === blockId)
          if (currentTextBlock) {
            handleFocusShiftToProperty(currentTextBlock)
          }
        } else if (propertyBlocks.find((propertyBlock) => propertyBlock.id === blockId)) {
          // If a property is focused, find its associated textBlock and set the focus to the previous text block
          // console.log("shift+tab current blockId", blockId)
          const associatedTextBlockIndex = blocks.findIndex((block) => block.id === textBlockId)
          const prevTextBlock = blocks[associatedTextBlockIndex - 1]
          if (prevTextBlock) {
            setFocusContext({ type: "block", id: prevTextBlock.id })
          }
        }
        // Handle Tab
      } else {
        if (blocks.find((block) => block.id === blockId)) {
          // If a textBlock is focused, find the next property block and set the focus to it
          const currentTextBlockIndex = blocks.findIndex((block) => block.id === blockId)
          const nextTextBlock = blocks[currentTextBlockIndex + 1]
          if (nextTextBlock) {
            handleFocusShiftToProperty(nextTextBlock)
          }
        } else if (propertyBlocks.find((propertyBlock) => propertyBlock.id === blockId)) {
          // If a property is focused, find its associated textBlock and set the focus to it
          const associatedTextBlock = blocks.find((block) => block.id === textBlockId)
          if (associatedTextBlock) {
            setFocusContext({ type: "block", id: associatedTextBlock.id })
          }
        }
      }
    }
  }
}
