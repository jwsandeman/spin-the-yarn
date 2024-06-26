import { useEntryBlocksStore } from "src/store/entryBlockStore"
import {
  LinkedPropertyBlockType,
  PropertyBlockType,
  isPropertyBlockType,
  usePropertyBlockStore,
} from "src/store/propertyBlockStore"
import { useUIStore } from "src/store/uiStore"
import { useCreateBlocks } from "../../../hooks/useCreateBlocks"
import { useUpdatePropertyBlocksOrder } from "../../../hooks/useUpdatePropertyBlocksOrder"
import { useGetSourceProperty } from "../../../hooks/useGetSourceProperty"
import { useEffect } from "react"
import { WARNING_TYPES } from "src/utils/commonConfig"
import { useDeleteBlocks } from "../../../hooks/useDeleteBlocks"

// TODO - when backspacing in an empty text block it should shift focus to the associated property block if the property has content otherwise it will delete the block as normal

export const useHandleBackspace = (
  blockType: string,
  propertyBlock: PropertyBlockType | LinkedPropertyBlockType
  // isDropdownVisible?: boolean | false
) => {
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
  const { deleteBlocks, deleteSourcePropertyBlocks } = useDeleteBlocks()
  const updatePropertyBlocksOrder = useUpdatePropertyBlocksOrder()
  const { getSourceProperty, isSourceProperty } = useGetSourceProperty()

  const showDeletePropertyWarning = () => {
    setCurrentWarningType(WARNING_TYPES.DELETE_PROPERTY)
    setShowWarning(true)
  }

  useEffect(() => {
    console.log("useHandleBackspace firing...")
  }, [])

  useEffect(() => {
    if (
      userAccepted &&
      currentPropertyBlock &&
      isPropertyBlockType(currentPropertyBlock) &&
      currentWarningType === WARNING_TYPES.DELETE_PROPERTY
    ) {
      // Combined logic to handle converting linked properties and deleting the current property and entry blocks
      deleteSourcePropertyBlocks(currentPropertyBlock)
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
    deleteSourcePropertyBlocks,
    setCurrentWarningType,
    setUserAccepted,
    setCurrentPropertyBlock,
  ])

  const handleBackspace = () => {
    if (!propertyBlock) {
      return
    }

    const prevPropertyBlock = propertyBlocks.find((b) => b.order === propertyBlock.order - 1)
    const nextPropertyBlock = propertyBlocks.find((b) => b.order === propertyBlock.order + 1)
    const sourceProperty = getSourceProperty(propertyBlock)
    const associatedEntryBlock = entryBlocks.find((b) => b.id === propertyBlock.entryBlockId)

    // ========== ENTER ========== //

    // if (!isDropdownVisible && e.key === "Enter") {
    //   // If "Shift" + "Enter" is pressed, allow default behavior (new line in textarea)
    //   if (e.shiftKey) {
    //     return
    //   }
    //   e.preventDefault() // Prevents the default action of the enter key
    //   const { newPropertyBlock } = createBlocksHook.createBlocks()
    //   if (newPropertyBlock) {
    //     console.log("creating new property block with enter", newPropertyBlock)
    //     const updatedPropertyBlocks = [...propertyBlocks, newPropertyBlock]
    //     // Remove newly created property block from array
    //     const filteredPropertyBlocks = updatedPropertyBlocks.filter(
    //       (b) => b.id !== newPropertyBlock.id
    //     )
    //     // Insert newly created property block into correct position after current property block
    //     filteredPropertyBlocks.splice(propertyBlock.order + 1, 0, newPropertyBlock)
    //     setPropertyBlocks(updatePropertyBlocksOrder(filteredPropertyBlocks))
    //   }
    //   setFocusContext(
    //     blockType === "property"
    //       ? { type: "property", id: newPropertyBlock.id }
    //       : { type: "entry", id: newPropertyBlock.entryBlockId }
    //   )
    // }

    // ========== BACKSPACE ========== //

    // if (e.key === "Backspace") {
    //   if (e.shiftKey) {
    //     return
    //   }

    if (
      sourceProperty &&
      associatedEntryBlock &&
      !sourceProperty.content &&
      !associatedEntryBlock.content
    ) {
      if (isSourceProperty(propertyBlock)) {
        // if its the source block it will give a warning that block will be deleted from everywhere for the user to accept. They wont really be deleted they will just be converted back into normal property blocks with the content having placeholer text saying "${sourcePropertyContent} property deleted". this way user's will learn very quickly how linked properties work.
        setCurrentPropertyBlock(propertyBlock)
        showDeletePropertyWarning()
        // e.preventDefault()
        // e.stopPropagation() // prevents backspace behaviour from propagating in next block
        console.log("deleted source block")
      } else {
        // Remove the unlinked property or linked property from the store
        console.log("deleting unlinked property or linked property block")
        console.log("entry blocks in normal property deletion", entryBlocks)
        deleteBlocks(propertyBlock.id)
        // e.preventDefault()
        // e.stopPropagation() // prevents backspace behaviour from propagating in next block
      }
      // }

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
    // }

    // ========== TAB ========== //

    // if (e.key === "Tab") {
    //   e.preventDefault()

    //   // Handle Shift + Tab
    //   if (e.shiftKey) {
    //     if (prevPropertyBlock || blockType === "entry") {
    //       setFocusContext(
    //         blockType === "property"
    //           ? { type: "entry", id: prevPropertyBlock?.entryBlockId }
    //           : { type: "property", id: propertyBlock.id }
    //       )
    //     }
    //     // Handle Tab
    //   } else {
    //     if (nextPropertyBlock || blockType === "property") {
    //       setFocusContext(
    //         blockType === "property"
    //           ? { type: "entry", id: propertyBlock.entryBlockId }
    //           : { type: "property", id: nextPropertyBlock?.id }
    //       )
    //     }
    //   }
    // }
  }

  return handleBackspace
}
