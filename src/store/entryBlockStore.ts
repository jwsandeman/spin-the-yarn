import { create } from "zustand"

export type EntryBlockType = {
  id: string
  propertyBlockId: string
  content: string
  style: string
  type: string
  height?: string
}

type EntryBlocksState = {
  entryBlocks: EntryBlockType[]
  setEntryBlocks: (
    entryBlocks: EntryBlockType[] | ((prevEntryBlocks: EntryBlockType[]) => EntryBlockType[])
  ) => void
  createEntryBlock: (
    entryBlockId: string,
    propertyBlock: string,
    content?: string
  ) => EntryBlockType
  deleteEntryBlock: (entryBlockId: string) => void
  getEntryBlockById: (id: string) => EntryBlockType | undefined
}

export const useEntryBlocksStore = create<EntryBlocksState>((set, get) => {
  return {
    entryBlocks: [],
    setEntryBlocks: (entryBlocks) => {
      set((state) => ({
        entryBlocks:
          typeof entryBlocks === "function" ? entryBlocks(state.entryBlocks) : entryBlocks,
      }))
    },
    createEntryBlock: (entryBlockId, propertyBlockId, content = "") => {
      const newBlock = {
        id: entryBlockId,
        propertyBlockId: propertyBlockId,
        content,
        style: "",
        type: "entry",
      }
      set((state) => ({ entryBlocks: [...state.entryBlocks, newBlock] }))
      return newBlock
    },
    deleteEntryBlock: (entryBlockId) => {
      set((state) => ({
        entryBlocks: state.entryBlocks.filter((block) => block.id !== entryBlockId),
      }))
    },
    getEntryBlockById: (id) => {
      return get().entryBlocks.find((block) => block.id === id)
    },
  }
})
