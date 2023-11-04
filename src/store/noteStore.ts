import { create } from "zustand"

export type NoteType = {
  id: string
}

type NotesState = {
  notes: NoteType[]
  setNotes: (Notes: NoteType[] | ((prevNotes: NoteType[]) => NoteType[])) => void
  createNote: (content?: string) => NoteType
  getNoteById: (id: string) => NoteType | undefined
}

export const useNotesStore = create<NotesState>((set, get) => {
  return {
    notes: [],
    setNotes: (notes) => {
      set((state) => ({
        notes: typeof notes === "function" ? notes(state.notes) : notes,
      }))
    },
    createNote: (content = "") => {
      const newBlock = {
        id: Math.random().toString(36).substr(2, 9),
      }
      set((state) => ({ notes: [...state.notes, newBlock] }))
      return newBlock
    },
    getNoteById: (id) => {
      return get().notes.find((block) => block.id === id)
    },
  }
})
