import create from "zustand"

export type PropertyBlockType = {
  id: string
  content: string
  style: string
  type: string
  height?: string
  blockIds?: string[]
}

type PropertyBlockState = {
  propertyBlocks: PropertyBlockType[]
  setPropertyBlocks: (
    propertyBlocks:
      | PropertyBlockType[]
      | ((prevPropertyBlocks: PropertyBlockType[]) => PropertyBlockType[])
  ) => void
  createPropertyBlock: (content?: string) => PropertyBlockType
  getPropertyBlockById: (id: string) => PropertyBlockType | undefined
}

export const usePropertyBlocksStore = create<PropertyBlockState>((set, get) => {
  return {
    propertyBlocks: [],
    setPropertyBlocks: (propertyBlocks) => {
      set((state) => ({
        propertyBlocks:
          typeof propertyBlocks === "function"
            ? propertyBlocks(state.propertyBlocks)
            : propertyBlocks,
      }))
    },
    createPropertyBlock: (content = "") => {
      const newBlock = {
        id: Math.random().toString(36).substr(2, 9),
        content,
        style: "",
        type: "property",
      }
      set((state) => ({ propertyBlocks: [...state.propertyBlocks, newBlock] }))
      return newBlock
    },
    getPropertyBlockById: (id) => {
      return get().propertyBlocks.find((block) => block.id === id)
    },
  }
})
