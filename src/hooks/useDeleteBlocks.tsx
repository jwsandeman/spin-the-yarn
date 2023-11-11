import { useEntryBlocksStore } from "../store/entryBlockStore"
import { usePropertyBlockStore } from "../store/propertyBlockStore"

export const useDeleteBlocks = () => {
  const deleteBlocks = (propertyBlockId) => {
    // Delete from PropertyBlockStore
    usePropertyBlockStore
      .getState()
      .setPropertyBlocks((prevBlocks) => prevBlocks.filter((block) => block.id !== propertyBlockId))

    // Delete from EntryBlockStore
    useEntryBlocksStore
      .getState()
      .setEntryBlocks((prevBlocks) =>
        prevBlocks.filter((block) => block.propertyBlockId !== propertyBlockId)
      )

    return usePropertyBlockStore.getState().propertyBlocks
  }

  return deleteBlocks
}
