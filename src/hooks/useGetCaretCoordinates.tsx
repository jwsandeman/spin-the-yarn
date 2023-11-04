import React from "react"

export const useGetCaretCoordinates = () => {
  const getCaretCoordinates = (element: HTMLTextAreaElement, position: number) => {
    const doc = element.ownerDocument || element.document
    const win = doc.defaultView || doc.parentWindow
    let sel, range, rect

    if (typeof win.getSelection !== "undefined") {
      sel = win.getSelection()
      if (sel.rangeCount > 0) {
        range = win.getSelection().getRangeAt(0).cloneRange()
        range.setStart(element, 0)
        range.setEnd(element, position)
        rect = range.getBoundingClientRect()
        return {
          left: rect.left + win.scrollX,
          top: rect.bottom + win.scrollY,
        }
      }
    }
    return { left: 0, top: 0 }
  }

  return getCaretCoordinates
}
