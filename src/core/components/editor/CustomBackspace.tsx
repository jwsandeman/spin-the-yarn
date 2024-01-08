import { Extension } from "@tiptap/core"
import { Selection } from "@tiptap/pm/state"

export const CustomBackspace = (handleBackspace) => {
  return Extension.create({
    name: "customBackspace",

    addKeyboardShortcuts() {
      return {
        Backspace: ({ editor }) => {
          // Check if the current node is any of the following
          if (
            editor.isActive("paragraph") ||
            editor.isActive("heading") ||
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
            editor.isActive("tableBodyCell") ||
            editor.isActive("blockquote") ||
            editor.isActive("codeBlock") ||
            editor.isActive("mention")
          ) {
            // If it is, do the normal 'Backspace' key behavior
            return false
          } else {
            // If it's not, call your handler function
            handleBackspace()

            return true
          }
        },
      }
    },
  })
}
