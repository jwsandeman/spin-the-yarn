import create from "zustand"

type FocusContext = {
  type: string
  id: string
} | null

type FocusState = {
  focusIndex: number | null
  setFocusIndex: (index: number | null) => void
  focusContext: FocusContext | null
  setFocusContext: (context: FocusContext) => void
}

export const useFocusStore = create<FocusState>((set) => {
  return {
    focusIndex: null,
    setFocusIndex: (index) => set({ focusIndex: index }),
    focusContext: null as FocusContext | null,
    setFocusContext: (context: FocusContext) => {
      set({ focusContext: context })
      console.log("focusContext", context)
    },
  }
})
