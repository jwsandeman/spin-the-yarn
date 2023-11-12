import { create } from "zustand"

type FocusContext = {
  id: string
  type?: string
} | null

type UIState = {
  focusIndex: number | null
  setFocusIndex: (index: number | null) => void
  focusContext: FocusContext | null
  setFocusContext: (context: FocusContext) => void
  showWarning: boolean
  setShowWarning: (show: boolean) => void
  userAccepted: boolean
  setUserAccepted: (accepted: boolean) => void
  currentWarningType: string
  setCurrentWarningType: (warningTypewarningType: string) => void
}

export const useUIStore = create<UIState>((set) => ({
  focusIndex: null,
  setFocusIndex: (index) => set({ focusIndex: index }),
  focusContext: null,
  setFocusContext: (context) => set({ focusContext: context }),
  showWarning: false,
  setShowWarning: (show) => set({ showWarning: show }),
  userAccepted: false,
  setUserAccepted: (accepted) => set({ userAccepted: accepted }),
  currentWarningType: "",
  setCurrentWarningType: (warningType) => set({ currentWarningType: warningType }),
}))
