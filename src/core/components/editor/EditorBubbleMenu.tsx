import { Editor } from "@tiptap/core"
import { BubbleMenu } from "@tiptap/react"
import React from "react"
import { BoldIcon } from "../iconPaths/BoldIcon"
import { ItalicIcon } from "../iconPaths/ItalicIcon"
import { StrikethroughIcon } from "../iconPaths/StrikethroughIcon"
import { UnderlineIcon } from "../iconPaths/UnderlineIcon"
import { HighlightIcon } from "../iconPaths/HighlightIcon"
import { CodeIcon } from "../iconPaths/CodeIcon"
import { LinkIcon } from "../iconPaths/LinkIcon"

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
