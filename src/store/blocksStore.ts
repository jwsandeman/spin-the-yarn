import create from "zustand"

export type BlockType = {
  id: string
  content: string
  style: string
  type: string
  height?: string
  propertyId?: string
}

type FocusContext = {
  type: string
  id: string
} | null

type BlocksState = {
  blocks: BlockType[]
  setBlocks: (blocks: BlockType[] | ((prevBlocks: BlockType[]) => BlockType[])) => void
  focusIndex: number | null
  setFocusIndex: (index: number | null) => void
  focusContext: FocusContext | null
  setFocusContext: (context: FocusContext) => void
}

export const useBlocksStore = create<BlocksState>((set) => ({
  blocks: [
    {
      // auto-increment id
      id: Math.random().toString(36).substr(2, 9),
      content: "",
      // style: "text-blue-500 bg-pink-100",
      style: "",
      type: "textArea",
    },
  ],
  focusIndex: null,
  setFocusIndex: (index) => set({ focusIndex: index }),
  focusContext: null as FocusContext | null,
  setFocusContext: (context: FocusContext) => set({ focusContext: context }),
  setBlocks: (blocks) =>
    set((state) => ({ blocks: typeof blocks === "function" ? blocks(state.blocks) : blocks })),
}))
