import create from "zustand"
import { useTextBlocksStore } from "./textBlockStore"
import { usePropertyBlocksStore } from "./propertyBlockStore"

export type ReferenceBlockType = {
  id: string
  propertyBlockId: string
  textBlockId: string
}

type ReferenceBlockState = {
  referenceBlocks: ReferenceBlockType[]
  setReferenceBlocks: (
    referenceBlocks:
      | ReferenceBlockType[]
      | ((prevReferenceBlocks: ReferenceBlockType[]) => ReferenceBlockType[])
  ) => void
  createReferenceBlock: (propertyBlockId: string, textBlockId: string) => ReferenceBlockType
  getReferenceBlockById: (id: string) => ReferenceBlockType | undefined
}

export const useReferenceBlockStore = create<ReferenceBlockState>((set, get) => {
  return {
    referenceBlocks: [],
    setReferenceBlocks: (referenceBlocks) => {
      set((state) => ({
        referenceBlocks:
          typeof referenceBlocks === "function"
            ? referenceBlocks(state.referenceBlocks)
            : referenceBlocks,
      }))
    },
    createReferenceBlock: (propertyBlockId, textBlockId) => {
      const newReference = {
        id: Math.random().toString(36).substr(2, 9),
        propertyBlockId,
        textBlockId,
      }
      set((state) => ({ referenceBlocks: [...state.referenceBlocks, newReference] }))
      return newReference
    },
    getReferenceBlockById: (id) => {
      return get().referenceBlocks.find((block) => block.id === id)
    },
  }
})
