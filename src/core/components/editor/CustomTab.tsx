import { Extension } from "@tiptap/core"

export const CustomTab = (handleTab, handleShiftTab) => {
  return Extension.create({
    name: "customTab",

    addKeyboardShortcuts() {
      return {
        Tab: ({ editor }) => {
          // Check if the current node is any of the following
          if (
            editor.isActive("bulletList") ||
            editor.isActive("orderedList") ||
            editor.isActive("taskList") ||
            editor.isActive("table") ||
            editor.isActive("tableRow") ||
            editor.isActive("tableCell") ||
            editor.isActive("tableHeader") ||
            editor.isActive("tableHeaderCell") ||
            editor.isActive("tableFooter") ||
            editor.isActive("tableFooterCell") ||
            editor.isActive("tableBody") ||
            editor.isActive("tableBodyCell")
          ) {
            // If it is, do the normal 'Backspace' key behavior
            return false
          } else {
            // If it's not, call your handler function
            handleTab()

            return true
          }
        },
        "Shift-Tab": ({ editor }) => {
          // Check if the current node is any of the following
          if (
            editor.isActive("bulletList") ||
            editor.isActive("orderedList") ||
            editor.isActive("taskList") ||
            editor.isActive("table") ||
            editor.isActive("tableRow") ||
            editor.isActive("tableCell") ||
            editor.isActive("tableHeader") ||
            editor.isActive("tableHeaderCell") ||
            editor.isActive("tableFooter") ||
            editor.isActive("tableFooterCell") ||
            editor.isActive("tableBody") ||
            editor.isActive("tableBodyCell")
          ) {
            // If it is, do the normal 'Shift+Tab' key behavior
            return false
          } else {
            // If it's not, call your handler function
            handleShiftTab()
            editor.commands.blur()

            return true
          }
        },
      }
    },
  })
}
