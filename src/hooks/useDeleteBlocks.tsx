import { useEntryBlocksStore } from "../store/entryBlockStore"
import {
  LinkedPropertyBlockType,
  PropertyBlockType,
  isPropertyBlockType,
  usePropertyBlockStore,
} from "../store/propertyBlockStore"
import { useUpdatePropertyBlocksOrder } from "./useUpdatePropertyBlocksOrder"

export const useDeleteBlocks = () => {
  const { setPropertyBlocks, propertyBlocks, convertLinkedPropertyBlockToPropertyBlock } =
    usePropertyBlockStore.getState()
  const { setEntryBlocks, entryBlocks } = useEntryBlocksStore.getState()
  const updatePropertyBlocksOrder = useUpdatePropertyBlocksOrder()

  const deleteBlocks = (propertyBlockId) => {
    // Update property blocks state by filtering out the deleted block and then updating the order
    setPropertyBlocks((prevBlocks) => {
      const filteredBlocks = prevBlocks.filter((block) => block.id !== propertyBlockId)
      return updatePropertyBlocksOrder(filteredBlocks)
    })

    // Update entry blocks state by filtering out associated entry block
    setEntryBlocks((prevBlocks) =>
      prevBlocks.filter((block) => block.propertyBlockId !== propertyBlockId)
    )
  }

  const deleteSourcePropertyBlocks = (currentPropertyBlock) => {
    // Combined logic to handle converting linked properties and deleting the current property and entry blocks
    const updatedPropertyBlocks = propertyBlocks.reduce<
      (PropertyBlockType | LinkedPropertyBlockType)[]
    >((acc, block) => {
      if (block.id === currentPropertyBlock.id) {
        // Skip adding the current property block as it's being deleted
        return acc
      } else if (
        !isPropertyBlockType(block) &&
        "propertyBlockId" in block &&
        block.propertyBlockId === currentPropertyBlock.id
      ) {
        // Convert linked property blocks and add them to the accumulator
        acc.push(convertLinkedPropertyBlockToPropertyBlock(block.id, currentPropertyBlock.content))
      } else {
        // Add all other blocks to the accumulator
        acc.push(block)
      }
      return acc
    }, [])

    // Update property block state with updated blocks
    setPropertyBlocks(updatePropertyBlocksOrder(updatedPropertyBlocks))

    // Update entry blocks state by filtering out associated entry block
    setEntryBlocks((prevBlocks) =>
      prevBlocks.filter((block) => block.propertyBlockId !== currentPropertyBlock.id)
    )
  }

  return { deleteBlocks, deleteSourcePropertyBlocks }
}
