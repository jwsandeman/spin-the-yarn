import create from "zustand"

export type PropertyBlockType = {
  id: string
  content: string
  style: string
  type: string
  height?: string
  blockId?: string
}

type PropertyBlockState = {
  propertyBlocks: PropertyBlockType[]
  setPropertyBlocks: (
    propertyBlocks:
      | PropertyBlockType[]
      | ((prevPropertyBlocks: PropertyBlockType[]) => PropertyBlockType[])
  ) => void
  focusIndex: number | null
  setFocusIndex: (index: number | null) => void
  focusPropertyId: number | null
  setFocusPropertyId: (index: number | null) => void
}

export const usePropertyBlocksStore = create<PropertyBlockState>((set) => ({
  propertyBlocks: [
    {
      // auto-increment id
      id: Math.random().toString(36).substr(2, 9),
      content: "",
      // style: "text-blue-500 bg-pink-100",
      style: "",
      type: "property",
    },
  ],
  focusIndex: null,
  setFocusIndex: (index) => set({ focusIndex: index }),
  focusPropertyId: null,
  setFocusPropertyId: (index) => set({ focusIndex: index }),
  setPropertyBlocks: (propertyBlocks) =>
    set((state) => ({
      propertyBlocks:
        typeof propertyBlocks === "function"
          ? propertyBlocks(state.propertyBlocks)
          : propertyBlocks,
    })),
}))
