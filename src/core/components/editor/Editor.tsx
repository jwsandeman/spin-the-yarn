import { BubbleMenu, EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import React, { useEffect } from "react"
import { CustomEnter } from "./CustomEnter"
import { useGetSourceProperty } from "src/hooks/useGetSourceProperty"
import { useEntryBlocksStore } from "src/store/entryBlockStore"
import { usePropertyBlockStore } from "src/store/propertyBlockStore"
import { EditorProps } from "src/utils/commonTypes"
import { useHandleEnter } from "./useHandleEnter"
import { useHandleBackspace } from "./useHandleBackspace"
import { useHandleTab } from "./useHandleTab"
import { CustomBackspace } from "./CustomBackspace"
import { CustomTab } from "./CustomTab"
import { CustomArrowNavigation } from "./CustomArrow"
import Focus from "@tiptap/extension-focus"
import Mention from "@tiptap/extension-mention"
import { suggestion } from "./suggestion"
import { useHandleArrowNavigation } from "src/hooks/useHandleArrowNavigation"
import { EditorBubbleMenu } from "./EditorBubbleMenu"
import Underline from "@tiptap/extension-underline"
import Highlight from "@tiptap/extension-highlight"
import Link from "@tiptap/extension-link"

export const Editor = ({ content, blockType, blockId, propertyBlock, isFocused }: EditorProps) => {
  const { propertyBlocks, setPropertyBlocks } = usePropertyBlockStore()
  const { entryBlocks, setEntryBlocks } = useEntryBlocksStore()
  const { getSourceProperty } = useGetSourceProperty()
  const handleEnter = useHandleEnter(blockType, propertyBlock)
  const handleBackspace = useHandleBackspace(blockType, propertyBlock)
  const [handleTab, handleShiftTab] = useHandleTab(blockType, propertyBlock)
  const handleArrowNavigation = useHandleArrowNavigation(blockType, propertyBlock.order)

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
      }),
      // Focus.configure({
      //   className: "border border-neutral-300 rounded-md box-content p-1",
      //   mode: "all",
      // }),
      Mention.configure({
        HTMLAttributes: {
          class: "border border-black rounded-md box-content",
        },
        suggestion,
      }),
      Underline.configure({
        HTMLAttributes: {
          class: "my-custom-class",
        },
      }),
      Highlight.configure({
        HTMLAttributes: {
          class: "my-custom-class",
        },
        multicolor: true,
      }),
      Link.configure({
        protocols: ["ftp", "mailto"],
        HTMLAttributes: {
          class: "my-custom-class",
        },
      }),
      CustomEnter(handleEnter, propertyBlocks),
      CustomBackspace(handleBackspace),
      CustomTab(handleTab, handleShiftTab),
      CustomArrowNavigation(handleArrowNavigation),
    ],
    editorProps: {
      attributes: {
        class:
          "prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-0 focus:outline-none",
      },
    },
    // content: "<p>Hello World! 🌎️</p>",
    content: content,

    // triggered on every change
    onUpdate: ({ editor }) => {
      const html = editor.getHTML()
      // send the content to an API here
      if (blockType === "property") {
        const newPropertyBlocks = [...propertyBlocks]
        const propertyBlock = newPropertyBlocks.find((b) => b.id === blockId)
        const sourceProperty = propertyBlock ? getSourceProperty(propertyBlock) : null
        if (sourceProperty) {
          sourceProperty.content = html
          // sourceProperty.height = newHeight
          console.log("updated content in propertyBlock")
          console.log("sourceProperty content => ", sourceProperty.content)
          setPropertyBlocks(newPropertyBlocks)
        }
      } else if (blockType === "entry") {
        const newEntryBlocks = [...entryBlocks]
        const entryBlock = newEntryBlocks.find((b) => b.id === blockId)
        if (entryBlock) {
          console.log(`Block with ID ${entryBlock.id} is being updated.`)
          entryBlock.content = html
          // entryBlock.height = newHeight
          console.log("updated content in entryBlock")
          console.log("entryBlock content => ", entryBlock.content)
          setEntryBlocks(newEntryBlocks)
        }
      }
    },
  })

  const [isEditable, setIsEditable] = React.useState(true)

  useEffect(() => {
    // check if focus is on this editor and if so, set the focus context
    if (isFocused) {
      console.log("setting focus context")
      editor?.chain().focus().run()
    }
  }, [isFocused, editor])

  useEffect(() => {
    if (editor) {
      editor.setEditable(isEditable)
    }
  }, [isEditable, editor])

  useEffect(() => {
    console.log("enterDebug: latest property blocks => ", propertyBlocks)
  }, [propertyBlocks])

  return (
    <>
      {/* <div>
        <input type="checkbox" checked={isEditable} onChange={() => setIsEditable(!isEditable)} />
        Editable
      </div> */}
      {editor && <EditorBubbleMenu editor={editor} />}
      <div className="prose">
        <EditorContent editor={editor} />
      </div>
    </>
  )
}
