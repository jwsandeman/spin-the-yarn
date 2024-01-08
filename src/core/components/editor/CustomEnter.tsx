import { Extension } from "@tiptap/core"
// import { useHandleEnter } from "./useHandleEnter"

export const CustomEnter = (handleEnter, propertyBlocks) => {
  // const handleEnter = useHandleEnter()
  console.log("enterDebug: custom enter firing => ", propertyBlocks)

  return Extension.create({
    name: "customEnter",

    addKeyboardShortcuts() {
      return {
        Enter: ({ editor }) => {
          // Check if the current node is any of the following
          if (
            // editor.isActive("paragraph") ||
            // editor.isActive("heading") ||
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
            editor.isActive("codeBlock")
          ) {
            // If it is, do the default 'Enter' key behavior
            return false
          } else {
            // If it's not, call your handler function
            console.log("enterDebug: before handle enter", propertyBlocks)
            handleEnter()
            console.log("enterDebug: after handle enter", propertyBlocks)

            editor.commands.blur()

            return true
          }
        },
      }
    },
  })
}
