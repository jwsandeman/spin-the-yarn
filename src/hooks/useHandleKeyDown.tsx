import { useEntryBlocksStore } from "src/store/entryBlockStore"
import {
  LinkedPropertyBlockType,
  isPropertyBlockType,
  usePropertyBlockStore,
} from "src/store/propertyBlockStore"
import { useUIStore } from "src/store/uiStore"
import { useCreateBlocks } from "./useCreateBlocks"
import { useUpdatePropertyBlocksOrder } from "./useUpdatePropertyBlocksOrder"
import { useGetSourceProperty } from "./useGetSourceProperty"
import { useEffect } from "react"
import { WARNING_TYPES } from "src/utils/commonConfig"

// TODO - Add back slash command to create new dropdown menu with formatting options
// TODO - refactor this component to seperate concerns
// TODO - when backspacing in an empty text block it should shift focus to the associated property block if the property has content otherwise it will delete the block as normal

export const useHandleKeyDown = (blockType: "entry" | "property") => {
  const {
    setFocusContext,
    setShowWarning,
    userAccepted,
    setUserAccepted,
    currentWarningType,
    setCurrentWarningType,
  } = useUIStore()
  const {
    propertyBlocks,
    setPropertyBlocks,
    currentPropertyBlock,
    setCurrentPropertyBlock,
    convertLinkedPropertyBlockToPropertyBlock,
  } = usePropertyBlockStore()
  const { entryBlocks, setEntryBlocks } = useEntryBlocksStore()
  const createBlocksHook = useCreateBlocks()
  const updatePropertyBlocksOrder = useUpdatePropertyBlocksOrder()
  const { getSourceProperty, isSourceProperty } = useGetSourceProperty()

  const showDeletePropertyWarning = () => {
    setCurrentWarningType(WARNING_TYPES.DELETE_PROPERTY)
    setShowWarning(true)
  }

  useEffect(() => {
    if (
      userAccepted &&
      currentPropertyBlock &&
      isPropertyBlockType(currentPropertyBlock) &&
      currentWarningType === WARNING_TYPES.DELETE_PROPERTY
    ) {
      // Find all associated linkedProperties and convert them back into normal property blocks
      const linkedPropertyBlocks = propertyBlocks.filter((b) => !isPropertyBlockType(b))
      const associatedLinkedPropertyIds = linkedPropertyBlocks
        .filter((b: LinkedPropertyBlockType) => b.propertyBlockId === currentPropertyBlock.id)
        .map((b) => b.id)
      const updatedPropertyBlocks = propertyBlocks.map((block) =>
        associatedLinkedPropertyIds.includes(block.id)
          ? convertLinkedPropertyBlockToPropertyBlock(block.id, currentPropertyBlock.content)
          : block
      )
      // Remove the source property from the store
      const filteredPropertyBlocks = updatedPropertyBlocks.filter(
        (b) => b.id !== currentPropertyBlock.id
      )
      setPropertyBlocks(updatePropertyBlocksOrder(filteredPropertyBlocks))
      // Reset userAccepted and pendingDeletionBlock for future actions
      setCurrentWarningType("")
      setUserAccepted(false)
      setCurrentPropertyBlock(null)
    }
  }, [
    userAccepted,
    setUserAccepted,
    currentPropertyBlock,
    setCurrentPropertyBlock,
    currentWarningType,
    setCurrentWarningType,
  ])

  return (e: React.KeyboardEvent<HTMLTextAreaElement>, propertyBlock) => {
    const prevPropertyBlock = propertyBlocks.find((b) => b.order === propertyBlock.order - 1)
    const nextPropertyBlock = propertyBlocks.find((b) => b.order === propertyBlock.order + 1)
    const associatedEntryBlock = entryBlocks.find((b) => b.id === propertyBlock.entryBlockId)
    const sourceProperty = propertyBlock ? getSourceProperty(propertyBlock) : null

    // ========== ENTER ========== //

    if (e.key === "Enter") {
      e.preventDefault() // Prevents the default action of the enter key

      // If "Shift" + "Enter" is pressed, allow default behavior (new line in textarea)
      if (e.shiftKey) {
        return
      }
      const { newPropertyBlock } = createBlocksHook.createBlocks()
      if (newPropertyBlock) {
        const updatedPropertyBlocks = [...propertyBlocks, newPropertyBlock]
        // Insert new block after current block
        updatedPropertyBlocks.splice(propertyBlock.order + 1, 0, newPropertyBlock)
        setPropertyBlocks(updatePropertyBlocksOrder(updatedPropertyBlocks))
      }
      setFocusContext(
        blockType === "property"
          ? { type: "property", id: newPropertyBlock.id }
          : { type: "entry", id: newPropertyBlock.entryBlockId }
      )
    }

    // ========== BACKSPACE ========== //

    if (e.key === "Backspace") {
      e.preventDefault()

      if (e.shiftKey) {
        return
      }
      // set focus to previous/next block
      // const prevPropertyBlock = propertyBlocks.find((b) => b.order === propertyBlock.order - 1)
      // const nextPropertyBlock = propertyBlocks.find((b) => b.order === propertyBlock.order + 1)
      // const associatedEntryBlock = entryBlocks.find((b) => b.id === propertyBlock.entryBlockId)
      // const sourceProperty = propertyBlock ? getSourceProperty(propertyBlock) : null
      if (
        associatedEntryBlock &&
        !propertyBlock.content &&
        !associatedEntryBlock.content &&
        (prevPropertyBlock || nextPropertyBlock)
      ) {
        if (prevPropertyBlock) {
          setFocusContext(
            blockType === "property"
              ? { type: "property", id: prevPropertyBlock.id }
              : { type: "entry", id: prevPropertyBlock.entryBlockId }
          )
        } else if (nextPropertyBlock) {
          setFocusContext(
            blockType === "property"
              ? { type: "property", id: nextPropertyBlock.id }
              : { type: "entry", id: nextPropertyBlock.entryBlockId }
          )
        }

        // remove property block from store
        if (isSourceProperty(propertyBlock)) {
          // if its the source block it will give a warning that block will be deleted from everywhere for the user to accept. They wont really be deleted they will just be converted back into normal property blocks with the content having placeholer text saying "${sourcePropertyContent} property deleted". this way user's will learn very quickly how linked properties work.
          setCurrentPropertyBlock(propertyBlock)
          showDeletePropertyWarning()
          // useEffect taks care of the rest of the logic
          // if (userAccepted) {
          //   // Find all associated linkedProperties and convert them back into normal property blocks
          //   const linkedPropertyBlocks = propertyBlocks.filter((b) => !isPropertyBlockType(b))
          //   const associatedLinkedPropertyIds = linkedPropertyBlocks
          //     .filter((b: LinkedPropertyBlockType) => b.propertyBlockId === propertyBlock.id)
          //     .map((b) => b.id)
          //   const updatedPropertyBlocks = propertyBlocks.map((block) =>
          //     associatedLinkedPropertyIds.includes(block.id)
          //       ? convertLinkedPropertyBlockToPropertyBlock(block.id, propertyBlock.content)
          //       : block
          //   )
          //   // Remove the source property from the store
          //   const filteredPropertyBlocks = updatedPropertyBlocks.filter(
          //     (b) => b.id !== propertyBlock.id
          //   )
          //   setPropertyBlocks(updatePropertyBlocksOrder(filteredPropertyBlocks))
          //   setUserAccepted(false)
          // }
        } else {
          // Remove the source property from the store
          const updatedPropertyBlocks = [...propertyBlocks]
          const filteredPropertyBlocks = updatedPropertyBlocks.filter(
            (b) => b.id !== propertyBlock.id
          )
          setPropertyBlocks(updatePropertyBlocksOrder(filteredPropertyBlocks))
        }

        // remove entry block from store
        const updatedEntryBlocks = [...entryBlocks]
        const filteredEntryBlocks = updatedEntryBlocks.filter(
          (b) => b.id === propertyBlock.entryBlockId
        )
        setEntryBlocks(filteredEntryBlocks)
      }
    }

    // ========== TAB ========== //

    if (e.key === "Tab") {
      e.preventDefault()

      // Handle Shift + Tab
      if (e.shiftKey) {
        if (prevPropertyBlock) {
          setFocusContext(
            blockType === "property"
              ? { type: "entry", id: prevPropertyBlock.entryBlockId }
              : { type: "property", id: propertyBlock.id }
          )
        }
        // Handle Tab
      } else {
        if (nextPropertyBlock) {
          setFocusContext(
            blockType === "property"
              ? { type: "entry", id: propertyBlock.entryBlockId }
              : { type: "property", id: nextPropertyBlock.id }
          )
        }
      }
    }
  }
}
