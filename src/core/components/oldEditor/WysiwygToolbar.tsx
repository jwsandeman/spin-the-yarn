import React, { useEffect, useRef, useState } from "react"

// TODO add ability to stack formatting ie have text that is bold and italic
// TODO add ability to toggle between formatting options whilst the text is still highlighted
// TODO convert other compoenents to content editable so that i can integrate the wysiwyg toolbar

export const WysiwygToolbar = ({ contentEditableRef }) => {
  // const editableRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const [isBold, setIsBold] = useState(false)
  const [isItalic, setIsItalic] = useState(false)
  const [isUnderline, setIsUnderline] = useState(false)
  const [isCode, setIsCode] = useState(false)

  useEffect(() => {
    const handleSelectionChange = () => {
      const selection = document.getSelection()
      if (
        selection &&
        selection.rangeCount > 0 &&
        contentEditableRef.current.contains(selection.anchorNode) &&
        selection.toString().trim() !== ""
      ) {
        const range = selection.getRangeAt(0)
        const rect = range.getBoundingClientRect()
        const editorRect = contentEditableRef.current.getBoundingClientRect()
        setPosition({
          top: rect.top - editorRect.top - 4 - 28,
          left: rect.left - editorRect.left + rect.width / 2,
        })
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey && event.key === "b") {
        event.preventDefault()
        setIsBold(!isBold)
      }
      if (event.metaKey && event.key === "i") {
        event.preventDefault()
        setIsItalic(!isItalic)
      }
      if (event.metaKey && event.key === "u") {
        event.preventDefault()
        setIsUnderline(!isUnderline)
      }
      if (event.metaKey && event.key === "e") {
        event.preventDefault()
        setIsCode(!isCode)
      }

      if (event && event.key === "ArrowRight") {
        const selection = window.getSelection()
        if (selection && selection.rangeCount > 0) {
          const range = selection.getRangeAt(0)
          const node = range.endContainer
          if (node.nodeType === Node.TEXT_NODE && range.endOffset === (node as Text).length) {
            // The cursor is at the end of a text node.
            // Check if the text node is inside a code block.
            let parent = node
            while (parent && parent !== contentEditableRef.current) {
              if (parent.nodeName === "CODE") {
                // The cursor is at the end of a code block.
                // Check if the code block is the last child of its parent.
                if (parent.nextSibling === null) {
                  // The code block is the last child.
                  // Move the cursor out of the code block.
                  range.setStartAfter(parent)
                  range.collapse(true)
                  event.preventDefault()
                }
                break
              }
              parent = parent?.parentNode as Node
            }
          }
        }
      }
    }

    document.addEventListener("selectionchange", handleSelectionChange)
    document.addEventListener("keydown", handleKeyDown)
    const contentEditableElement = contentEditableRef.current
    // contentEditableElement?.addEventListener("selectionchange", handleSelectionChange)
    // contentEditableElement?.addEventListener("keydown", handleKeyDown)
    return () => {
      // contentEditableElement?.removeEventListener("keydown", handleKeyDown)
      // contentEditableElement?.removeEventListener("selectionchange", handleSelectionChange)
      document.removeEventListener("selectionchange", handleSelectionChange)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [contentEditableRef, isBold, isItalic, isUnderline, isCode])

  const handleBoldClick = () => {
    const selection = window.getSelection()
    if (!selection?.rangeCount) return

    let range = selection.getRangeAt(0)
    let selectedText = range.toString()

    setIsBold(!isBold)

    if (
      (isBold && range.startContainer.nodeName === "B") ||
      range.startContainer.parentNode?.nodeName === "B"
    ) {
      // if (isBold) {
      let parent = range.startContainer.parentNode as HTMLElement
      parent.outerHTML = parent.innerHTML
    } else {
      let boldText = document.createElement("b")
      boldText.textContent = selectedText

      range.deleteContents()
      range.insertNode(boldText)
    }
  }

  const handleItalicClick = () => {
    const selection = window.getSelection()
    if (!selection?.rangeCount) return

    let range = selection.getRangeAt(0)
    let selectedText = range.toString()

    if (range.startContainer.parentNode?.nodeName === "I") {
      let parent = range.startContainer.parentNode as HTMLElement
      parent.outerHTML = parent.innerHTML
    } else {
      let italicText = document.createElement("i")
      italicText.textContent = selectedText

      range.deleteContents()
      range.insertNode(italicText)
    }
  }

  const handleUnderlineClick = () => {
    const selection = window.getSelection()
    if (!selection?.rangeCount) return

    let range = selection.getRangeAt(0)
    let selectedText = range.toString()

    if (range.startContainer.parentNode?.nodeName === "U") {
      let parent = range.startContainer.parentNode as HTMLElement
      parent.outerHTML = parent.innerHTML
    } else {
      let underlineText = document.createElement("u")
      underlineText.textContent = selectedText

      range.deleteContents()
      range.insertNode(underlineText)
    }
  }

  const handleCodeClick = () => {
    const selection = window.getSelection()
    if (!selection?.rangeCount) return

    let range = selection.getRangeAt(0)
    let selectedText = range.toString()

    if (range.startContainer.parentNode?.nodeName === "CODE") {
      let parent = range.startContainer.parentNode as HTMLElement
      parent.outerHTML = parent.innerHTML
    } else {
      let codeText = document.createElement("code")
      codeText.classList.add("codeSnippet")
      codeText.textContent = selectedText

      range.deleteContents()
      range.insertNode(codeText)
    }
  }

  return isVisible ? (
    <div
      className="join"
      style={{
        position: "absolute",
        top: `${position.top}px`,
        left: `${position.left}px`,
        transform: "translateX(-50%)",
        display: "flex",
        // gap: "8px",
      }}
    >
      <button className="join-item btn-neutral btn-xs" onClick={handleBoldClick}>
        B
      </button>
      <button className="join-item btn-neutral btn-xs" onClick={handleItalicClick}>
        I
      </button>
      <button className="join-item btn-neutral btn-xs" onClick={handleUnderlineClick}>
        U
      </button>
      <button className="join-item btn-neutral btn-xs" onClick={handleCodeClick}>
        &lt;&gt;
      </button>
      {/* <div ref={editableRef} contentEditable={true}>
        Editable content...
      </div> */}
    </div>
  ) : null
}
