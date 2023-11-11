import { useEntryBlocksStore } from "src/store/entryBlockStore"
import {
  LinkedPropertyBlockType,
  PropertyBlockType,
  isPropertyBlockType,
  usePropertyBlockStore,
} from "src/store/propertyBlockStore"
import { useUIStore } from "src/store/uiStore"
import { useCreateBlocks } from "./useCreateBlocks"
import { useUpdatePropertyBlocksOrder } from "./useUpdatePropertyBlocksOrder"
import { useGetSourceProperty } from "./useGetSourceProperty"
import { useEffect } from "react"
import { WARNING_TYPES } from "src/utils/commonConfig"
import { useDeleteBlocks } from "./useDeleteBlocks"

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
  const deleteBlocks = useDeleteBlocks()
  const updatePropertyBlocksOrder = useUpdatePropertyBlocksOrder()
  const { getSourceProperty, isSourceProperty } = useGetSourceProperty()

  const showDeletePropertyWarning = () => {
    setCurrentWarningType(WARNING_TYPES.DELETE_PROPERTY)
    setShowWarning(true)
  }

  const getAdjacentPropertyBlock = (order, direction = "prev") => {
    return propertyBlocks.find((b) => b.order === order + (direction === "prev" ? -1 : 1))
  }

  const sourcePropertyDeletion = (currentPropertyBlock) => {
    // Combined logic to handle both linked properties and deleting the current block
    const updatedPropertyBlocks = propertyBlocks.reduce<
      (PropertyBlockType | LinkedPropertyBlockType)[]
    >((acc, block) => {
      if (block.id === currentPropertyBlock.id) {
        // Skip adding the current property block as it's being deleted
        return acc
      } else if (!isPropertyBlockType(block) && block.propertyBlockId === currentPropertyBlock.id) {
        // Convert linked property blocks and add them to the accumulator
        acc.push(convertLinkedPropertyBlockToPropertyBlock(block.id, currentPropertyBlock.content))
      } else {
        // Add all other blocks to the accumulator
        acc.push(block)
      }
      return acc
    }, [])
  }
  // useEffect(() => {
  //   if (
  //     userAccepted &&
  //     currentPropertyBlock &&
  //     isPropertyBlockType(currentPropertyBlock) &&
  //     currentWarningType === WARNING_TYPES.DELETE_PROPERTY
  //   ) {
  //     // Find all associated linkedProperties and convert them back into normal property blocks
  //     console.log("converting linkedProperty to normal property")
  //     const linkedPropertyBlocks = propertyBlocks.filter((b) => !isPropertyBlockType(b))
  //     const associatedLinkedPropertyIds = linkedPropertyBlocks
  //       .filter((b: LinkedPropertyBlockType) => b.propertyBlockId === currentPropertyBlock.id)
  //       .map((b) => b.id)
  //     const updatedPropertyBlocks = propertyBlocks.map((block) =>
  //       associatedLinkedPropertyIds.includes(block.id)
  //         ? convertLinkedPropertyBlockToPropertyBlock(block.id, currentPropertyBlock.content)
  //         : block
  //     )
  //     // Remove the source property from the array
  //     // const filteredPropertyBlocks = updatedPropertyBlocks.filter(
  //     //   (b) => b.id !== currentPropertyBlock.id
  //     // )
  //     // Update the order of blocks and save to store
  //     // setPropertyBlocks(updatePropertyBlocksOrder(filteredPropertyBlocks))
  //     setPropertyBlocks(updatedPropertyBlocks)
  //     // delete the property block and associated entry block from store
  //     setPropertyBlocks(updatePropertyBlocksOrder(deleteBlocks(currentPropertyBlock.id)))
  //     // Reset userAccepted and pendingDeletionBlock for future actions
  //     setCurrentWarningType("")
  //     setUserAccepted(false)
  //     setCurrentPropertyBlock(null)
  //   }
  // }, [
  //   userAccepted,
  //   setUserAccepted,
  //   currentPropertyBlock,
  //   setCurrentPropertyBlock,
  //   currentWarningType,
  //   setCurrentWarningType,
  // ])

  useEffect(() => {
    if (
      userAccepted &&
      currentPropertyBlock &&
      isPropertyBlockType(currentPropertyBlock) &&
      currentWarningType === WARNING_TYPES.DELETE_PROPERTY
    ) {
      // Combined logic to handle both linked properties and deleting the current block
      // const updatedPropertyBlocks = propertyBlocks.reduce<
      //   (PropertyBlockType | LinkedPropertyBlockType)[]
      // >((acc, block) => {
      //   if (block.id === currentPropertyBlock.id) {
      //     // Skip adding the current property block as it's being deleted
      //     return acc
      //   } else if (
      //     !isPropertyBlockType(block) &&
      //     block.propertyBlockId === currentPropertyBlock.id
      //   ) {
      //     // Convert linked property blocks and add them to the accumulator
      //     acc.push(
      //       convertLinkedPropertyBlockToPropertyBlock(block.id, currentPropertyBlock.content)
      //     )
      //   } else {
      //     // Add all other blocks to the accumulator
      //     acc.push(block)
      //   }
      //   return acc
      // }, [])

      const updatedPropertyBlocks = sourcePropertyDeletion(currentPropertyBlock)

      // Update the store once with the new array
      setPropertyBlocks(updatePropertyBlocksOrder(updatedPropertyBlocks))
      deleteBlocks(currentPropertyBlock.id) // Assuming this also handles entry block deletion

      // Reset state values
      setCurrentWarningType("")
      setUserAccepted(false)
      setCurrentPropertyBlock(null)
    }
  }, [
    userAccepted,
    currentPropertyBlock,
    currentWarningType,
    propertyBlocks,
    setPropertyBlocks,
    deleteBlocks,
    convertLinkedPropertyBlockToPropertyBlock,
    updatePropertyBlocksOrder,
  ])

  return (e: React.KeyboardEvent<HTMLTextAreaElement>, propertyBlock) => {
    // const prevPropertyBlock = propertyBlocks.find((b) => b.order === propertyBlock.order - 1)
    // const nextPropertyBlock = propertyBlocks.find((b) => b.order === propertyBlock.order + 1)
    const prevPropertyBlock = getAdjacentPropertyBlock(propertyBlock.order, "prev")
    const nextPropertyBlock = getAdjacentPropertyBlock(propertyBlock.order, "next")
    const associatedEntryBlock = entryBlocks.find((b) => b.id === propertyBlock.entryBlockId)
    // const sourceProperty = propertyBlock ? getSourceProperty(propertyBlock) : null

    // ========== ENTER ========== //

    if (e.key === "Enter") {
      // If "Shift" + "Enter" is pressed, allow default behavior (new line in textarea)
      if (e.shiftKey) {
        return
      }
      e.preventDefault() // Prevents the default action of the enter key
      const { newPropertyBlock } = createBlocksHook.createBlocks()
      if (newPropertyBlock) {
        console.log("creating new property block with enter", newPropertyBlock)
        const updatedPropertyBlocks = [...propertyBlocks, newPropertyBlock]
        // Remove newly created property block from array
        const filteredPropertyBlocks = updatedPropertyBlocks.filter(
          (b) => b.id !== newPropertyBlock.id
        )
        // Insert newly created property block into correct position after current property block
        filteredPropertyBlocks.splice(propertyBlock.order + 1, 0, newPropertyBlock)
        // updatedPropertyBlocks.splice(propertyBlock.order + 1, 0, newPropertyBlock)
        setPropertyBlocks(updatePropertyBlocksOrder(filteredPropertyBlocks))
      }
      setFocusContext(
        blockType === "property"
          ? { type: "property", id: newPropertyBlock.id }
          : { type: "entry", id: newPropertyBlock.entryBlockId }
      )
    }

    // ========== BACKSPACE ========== //

    if (e.key === "Backspace") {
      if (e.shiftKey) {
        return
      }

      if (
        associatedEntryBlock &&
        !propertyBlock.content &&
        !associatedEntryBlock.content &&
        (prevPropertyBlock || nextPropertyBlock)
      ) {
        // remove property block from store
        if (isSourceProperty(propertyBlock)) {
          // if its the source block it will give a warning that block will be deleted from everywhere for the user to accept. They wont really be deleted they will just be converted back into normal property blocks with the content having placeholer text saying "${sourcePropertyContent} property deleted". this way user's will learn very quickly how linked properties work.
          setCurrentPropertyBlock(propertyBlock)
          showDeletePropertyWarning()
          console.log("deleting source block")
        } else {
          // Remove the unlinked property or linked property from the store
          console.log("deleting unlinked property or linked property block")
          console.log("entry blocks in normal property deletion", entryBlocks)
          setPropertyBlocks(updatePropertyBlocksOrder(deleteBlocks(propertyBlock.id)))
        }

        e.preventDefault()
        e.stopPropagation() // prevents backspace behaviour from propagating in next block

        if (prevPropertyBlock) {
          console.log("there is a previous property, setting focus to that")
          setFocusContext(
            blockType === "property"
              ? { type: "property", id: prevPropertyBlock.id }
              : { type: "entry", id: prevPropertyBlock.entryBlockId }
          )
        } else if (nextPropertyBlock) {
          console.log("there is a next property, setting focus to that")
          setFocusContext(
            blockType === "property"
              ? { type: "property", id: nextPropertyBlock.id }
              : { type: "entry", id: nextPropertyBlock.entryBlockId }
          )
        }
        console.log("entryBlocks => ", entryBlocks)
        console.log("propertyBlocks => ", propertyBlocks)
      }
    }

    // ========== TAB ========== //

    if (e.key === "Tab") {
      e.preventDefault()

      // Handle Shift + Tab
      if (e.shiftKey) {
        if (prevPropertyBlock || blockType === "entry") {
          setFocusContext(
            blockType === "property"
              ? { type: "entry", id: prevPropertyBlock?.entryBlockId }
              : { type: "property", id: propertyBlock.id }
          )
        }
        // Handle Tab
      } else {
        if (nextPropertyBlock || blockType === "property") {
          setFocusContext(
            blockType === "property"
              ? { type: "entry", id: propertyBlock.entryBlockId }
              : { type: "property", id: nextPropertyBlock?.id }
          )
        }
      }
    }
  }
}
