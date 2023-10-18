import create from "zustand"

// TODO - [NOT SURE ABOUT THIS YET] consolidate property blocks into this store as well so that i can intially associate a property block with a text block

export type BlockType = {
  id: string
  content: string
  style: string
  type: string
  height?: string
  propertyId?: string
}

export type PropertyBlockType = {
  id: string
  content: string
  style: string
  type: string
  height?: string
  blockIds?: string[]
}

export type ReferenceBlock = {
  id: string
  propBlockId?: string
  blockIds?: string[]
}

type FocusContext = {
  type: string
  id: string
} | null

type BlocksState = {
  blocks: BlockType[]
  setBlocks: (blocks: BlockType[] | ((prevBlocks: BlockType[]) => BlockType[])) => void
  // propertyBlocks: PropertyBlockType[]
  // setPropertyBlocks: (
  //   propertyBlocks:
  //     | PropertyBlockType[]
  //     | ((prevPropertyBlocks: PropertyBlockType[]) => PropertyBlockType[])
  // ) => void
  focusIndex: number | null
  setFocusIndex: (index: number | null) => void
  focusContext: FocusContext | null
  setFocusContext: (context: FocusContext) => void
}

export const useBlocksStore = create<BlocksState>((set) => {
  const blockId = Math.random().toString(36).substr(2, 9)
  const propertyId = Math.random().toString(36).substr(2, 9)

  return {
    blocks: [
      {
        id: blockId,
        content: "",
        style: "",
        type: "textArea",
        propertyId: propertyId,
      },
    ],
    // propertyBlocks: [
    //   {
    //     id: propertyId,
    //     content: "",
    //     style: "",
    //     type: "property",
    //     blockIds: [blockId],
    //   },
    // ],
    focusIndex: null,
    setFocusIndex: (index) => set({ focusIndex: index }),
    focusContext: null as FocusContext | null,
    setFocusContext: (context: FocusContext) => {
      set({ focusContext: context })
      console.log("focusContext", context)
    },
    setBlocks: (blocks) => {
      set((state) => ({ blocks: typeof blocks === "function" ? blocks(state.blocks) : blocks }))
    },
    // setPropertyBlocks: (propertyBlocks) =>
    // set((state) => ({
    //   propertyBlocks:
    //     typeof propertyBlocks === "function"
    //       ? propertyBlocks(state.propertyBlocks)
    //       : propertyBlocks,
    // })),
  }
})
