// TODO  get rid of this store - no longer needed

import { create } from "zustand"

export type BlockContainerType = {
  id: string
  propertyBlockId: string
  EntryBlockId: string
  order: number
}

type BlockContainerState = {
  blockContainers: BlockContainerType[]
  setBlockContainers: (
    blockContainers:
      | BlockContainerType[]
      | ((prevBlockContainers: BlockContainerType[]) => BlockContainerType[])
  ) => void
  createBlockContainer: (propertyBlockId: string, EntryBlockId: string) => BlockContainerType
  getBlockContainersById: (id: string) => BlockContainerType | undefined
}

export const useBlockContainerStore = create<BlockContainerState>((set, get) => {
  return {
    blockContainers: [],
    setBlockContainers: (blockContainers) => {
      set((state) => ({
        blockContainers:
          typeof blockContainers === "function"
            ? blockContainers(state.blockContainers)
            : blockContainers,
      }))
    },
    createBlockContainer: (propertyBlockId, EntryBlockId) => {
      const currentMaxOrder = get().blockContainers.reduce(
        (max, block) => Math.max(max, block.order),
        0
      )
      const newOrder = currentMaxOrder + 1
      const newBlockContainer = {
        id: Math.random().toString(36).substr(2, 9),
        propertyBlockId,
        EntryBlockId,
        order: newOrder,
      }
      set((state) => ({ blockContainers: [...state.blockContainers, newBlockContainer] }))
      return newBlockContainer
    },
    getBlockContainersById: (id) => {
      return get().blockContainers.find((block) => block.id === id)
    },
  }
})
