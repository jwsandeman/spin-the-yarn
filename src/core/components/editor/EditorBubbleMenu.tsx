import { Editor } from "@tiptap/core"
import { BubbleMenu } from "@tiptap/react"
import React from "react"
import { BoldIcon } from "../icons/BoldIcon"
import { ItalicIcon } from "../icons/ItalicIcon"
import { StrikethroughIcon } from "../icons/StrikethroughIcon"
import { UnderlineIcon } from "../icons/UnderlineIcon"
import { HighlightIcon } from "../icons/HighlightIcon"
import { CodeIcon } from "../icons/CodeIcon"
import { LinkIcon } from "../icons/LinkIcon"

type Props = {
  editor: Editor
}

export const EditorBubbleMenu = ({ editor }: Props) => {
  return (
    <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }} className="join">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`join-item btn-neutral btn-sm ${editor.isActive("bold") ? "is-active" : ""}`}
      >
        <BoldIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`join-item btn-neutral btn-sm ${editor.isActive("italic") ? "is-active" : ""}`}
      >
        <ItalicIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`join-item btn-neutral btn-sm ${editor.isActive("strike") ? "is-active" : ""}`}
      >
        <StrikethroughIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`join-item btn-neutral btn-sm ${
          editor.isActive("underline") ? "is-active" : ""
        }`}
      >
        <UnderlineIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={`join-item btn-neutral btn-sm ${
          editor.isActive("highlight") ? "is-active" : ""
        }`}
      >
        <HighlightIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={`join-item btn-neutral btn-sm ${editor.isActive("code") ? "is-active" : ""}`}
      >
        <CodeIcon />
      </button>
      {/* <button
        onClick={() => editor.chain().focus().toggleLink().run()}
        className={`join-item btn-neutral btn-sm ${editor.isActive("link") ? "is-active" : ""}`}
      >
        <LinkIcon />
      </button> */}
    </BubbleMenu>
  )
}
