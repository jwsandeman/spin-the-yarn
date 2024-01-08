import { Extension } from "@tiptap/core"

export const CustomArrowNavigation = (handleArrowNavigation) => {
  return Extension.create({
    name: "customArrowNavigation",

    addKeyboardShortcuts() {
      return {
        ArrowUp: ({ editor }) => {
          // Your custom ArrowUp behavior here
          handleArrowNavigation("up")
          return true
        },
        ArrowDown: ({ editor }) => {
          // Your custom ArrowDown behavior here
          handleArrowNavigation("down")
          return true
        },
        ArrowLeft: ({ editor }) => {
          // Your custom ArrowLeft behavior here
          handleArrowNavigation("left")
          return false
        },
        ArrowRight: ({ editor }) => {
          // Your custom ArrowRight behavior here
          handleArrowNavigation("right")
          return false
        },
      }
    },
  })
}
