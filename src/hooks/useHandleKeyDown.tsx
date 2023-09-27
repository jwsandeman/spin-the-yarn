import { useState } from "react"
import { BlockType, useBlocksStore } from "src/store/blocksStore"
import { PropertyBlockType } from "src/store/propertyBlocksStore"

// TODO - Add back slash command to create new modal with formatting options
// TODO - refactor this component to seperate concerns

// BUG - when pressing enter in a property it doesnt add focus to the new property below
// BUG - backspacing in a property block does not shift the focus to the property block above
// BUG - backspacing in the first text block in the page(array) does not shift the focus to the next available text block below
// BUG - tab doesnt work correctly for linked properties now because im currently using the property block id to set the focus and it is getting confused when there are multiple properties with the same Id
// BUG - backspace is not working in linked properties for the same reason as above

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
  console.log("property blocks", propertyBlocks)
  console.log("blocks", blocks)

  return (
    e: React.KeyboardEvent<HTMLTextAreaElement>,
    propertyBlockId: string,
    textBlockId: string
  ) => {
    const blockId = blockType === "block" ? textBlockId : propertyBlockId
    setFocusContext({ type: e.currentTarget.dataset.type as string, id: blockId }) // Get the type from the dataset

    // ----- ENTER -----
    if (e.key === "Enter" && blockId) {
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
        console.log("blockType", blockType)
        if (blockType === "block") {
          setFocusContext({ type: blockType, id: newBlock.id })
        }
        return updatedBlocks
      })
      setPropertyBlocks((prevPropertyBlocks) => {
        const updatedPropertyBlocks = [...prevPropertyBlocks, newPropertyBlock]
        if (blockType === "property") {
          console.log("blockType", blockType)
          // setFocusContext({ type: blockType, id: newPropertyBlock.id })
          setFocusContext({ type: blockType, id: newBlock.id })
        }
        return updatedPropertyBlocks
      })
      e.preventDefault() // Prevents the default action of the enter key
    }

    // ----- @ ----- THIS IS TO BE REMOVED
    // On @ Keydown - this will be used to link to other elements using a dropdown menu
    if (e.key === "@" && blockId) {
      // find all of the current property blocks and add their content to an array
      const currentPropertyBlocks = propertyBlocks.filter((propertyBlock) => propertyBlock.content)
      const currentPropertyBlockContents = currentPropertyBlocks.map(
        (propertyBlock) => propertyBlock.content
      )
      // present a drop down menu that populates with the current property blocks content options and then allows the user to select one
      // if the user selects one, add the property block id to the current text block and add the text block id to the property block's array of text block Id's (this will allow for multiple text blocks to be associated with a single property block)
    }

    // ----- BACKSPACE -----
    if (e.key === "Backspace" && blockId) {
      if (e.shiftKey) {
        return
      }

      const currentBlockIndex = blocks.findIndex((block) => block.id === blockId)
      const currentPropertyBlockIndex = propertyBlocks.findIndex(
        (propertyBlock) => propertyBlock.id === blockId
      )

      if (currentPropertyBlockIndex > -1) {
        // Current block is a property block
        const associatedTextBlock = blocks.find((block) => block.propertyId === blockId)
        if (
          associatedTextBlock &&
          !propertyBlocks[currentPropertyBlockIndex]?.content &&
          !associatedTextBlock?.content
        ) {
          setBlocks((prevBlocks) => {
            const updatedBlocks = [...prevBlocks]
            updatedBlocks.splice(updatedBlocks.indexOf(associatedTextBlock), 1) // Delete the associated text block
            return updatedBlocks.filter((block) => block.id !== blockId) // Delete the current property block
          })
          // need to find associated textBlock index because property block indexes arent being mapped in any order like the text blocks are

          // i think this might be deleteing the text block before it can ge the previous property block id???
          const associatedTextBlockIndex = blocks.findIndex((block) => block.propertyId === blockId)
          console.log("associatedTextBlockIndex", associatedTextBlockIndex)
          const prevPropertyBlockId = blocks[associatedTextBlockIndex - 1]?.propertyId
          if (prevPropertyBlockId) {
            console.log("prevPropertyBlockId", prevPropertyBlockId)
            setFocusContext({ type: "block", id: prevPropertyBlockId })
          }
          e.preventDefault()
        }
      } else {
        // Current block is a text block
        const associatedPropertyBlock = propertyBlocks.find(
          (propertyBlock) => propertyBlock.id === blocks[currentBlockIndex]?.propertyId
        )
        if (
          associatedPropertyBlock &&
          !blocks[currentBlockIndex]?.content &&
          !associatedPropertyBlock?.content
        ) {
          setBlocks((prevBlocks) => {
            const updatedBlocks = [...prevBlocks]
            // updatedBlocks.splice(updatedBlocks.indexOf(associatedPropertyBlock), 1) // Delete the associated property block
            updatedBlocks.splice(currentBlockIndex, 1) // Delete the current text block
            return updatedBlocks.filter((block) => block.id !== blockId) // Delete the current text block
          })
          const prevBlockId = blocks[currentBlockIndex - 1]?.id
          if (prevBlockId) {
            setFocusContext({ type: "block", id: prevBlockId })
          }
          e.preventDefault()
        }
      }
    }

    // ----- TAB -----
    if (e.key === "Tab" && blockId) {
      e.preventDefault() // Prevent default tab behavior

      // Handle Shift + Tab
      if (e.shiftKey) {
        if (blocks.find((block) => block.id === blockId)) {
          // If a textBlock is focused, find the previous property block and set the focus to it
          const currentTextBlock = blocks.find((block) => block.id === blockId)
          const prevPropertyBlock = propertyBlocks.find(
            (propertyBlock) => propertyBlock.id === currentTextBlock?.propertyId
          )
          if (prevPropertyBlock) {
            setFocusContext({ type: "property", id: prevPropertyBlock.id })
          }
        } else if (propertyBlocks.find((propertyBlock) => propertyBlock.id === blockId)) {
          // If a property is focused, find its associated textBlock and set the focus to the previous text block
          const associatedTextBlockIndex = blocks.findIndex((block) => block.propertyId === blockId)
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
          const associatedPropertyBlock = propertyBlocks.find(
            (propertyBlock) => propertyBlock.id === nextTextBlock?.propertyId
          )
          if (associatedPropertyBlock) {
            setFocusContext({ type: "property", id: associatedPropertyBlock.id })
          }
        } else if (propertyBlocks.find((propertyBlock) => propertyBlock.id === blockId)) {
          // If a property is focused, find its associated textBlock and set the focus to it
          const associatedTextBlock = blocks.find((block) => block.propertyId === blockId)
          if (associatedTextBlock) {
            setFocusContext({ type: "block", id: associatedTextBlock.id })
          }
        }
      }
    }
  }
}
