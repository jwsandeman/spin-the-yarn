import { useEntryBlocksStore } from "./entryBlockStore"
import { usePropertyBlockStore } from "./propertyBlockStore"

export const initializeBlockStores = () => {
  const entryBlocks = useEntryBlocksStore.getState().entryBlocks
  const propertyBlocks = usePropertyBlockStore.getState().propertyBlocks

  if (entryBlocks.length === 0 && propertyBlocks.length === 0) {
    const entryBlockId = Math.random().toString(36).substr(2, 9)
    const propertyBlockId = Math.random().toString(36).substr(2, 9)

    const entryBlock = useEntryBlocksStore
      .getState()
      .createEntryBlock(entryBlockId, propertyBlockId)
    const propertyBlock = usePropertyBlockStore
      .getState()
      .createPropertyBlock(propertyBlockId, entryBlockId)
  }
}
