import { useEntryBlocksStore } from "../store/entryBlockStore"
import { usePropertyBlockStore } from "../store/propertyBlockStore"

export const useCreateBlocks = () => {
  const createBlocks = () => {
    const entryBlockId = Math.random().toString(36).substr(2, 9)
    const propertyBlockId = Math.random().toString(36).substr(2, 9)

    const newEntryBlock = useEntryBlocksStore
      .getState()
      .createEntryBlock(entryBlockId, propertyBlockId)
    const newPropertyBlock = usePropertyBlockStore
      .getState()
      .createPropertyBlock(propertyBlockId, entryBlockId)

    return { newPropertyBlock, newEntryBlock }
  }

  return {
    createBlocks,
  }
}
