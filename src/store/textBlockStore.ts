import create from "zustand"

export type TextBlockType = {
  id: string
  content: string
  style: string
  type: string
  height?: string
  propertyBlockId?: string
}

type TextBlocksState = {
  textBlocks: TextBlockType[]
  setTextBlocks: (
    textBlocks: TextBlockType[] | ((prevTextBlocks: TextBlockType[]) => TextBlockType[])
  ) => void
  createTextBlock: (content?: string) => TextBlockType
  getTextBlockById: (id: string) => TextBlockType | undefined
}

export const useTextBlocksStore = create<TextBlocksState>((set, get) => {
  return {
    textBlocks: [],
    setTextBlocks: (textBlocks) => {
      set((state) => ({
        textBlocks: typeof textBlocks === "function" ? textBlocks(state.textBlocks) : textBlocks,
      }))
    },
    createTextBlock: (content = "") => {
      const newBlock = {
        id: Math.random().toString(36).substr(2, 9),
        content,
        style: "",
        type: "textArea",
      }
      set((state) => ({ textBlocks: [...state.textBlocks, newBlock] }))
      return newBlock
    },
    getTextBlockById: (id) => {
      return get().textBlocks.find((block) => block.id === id)
    },
  }
})
