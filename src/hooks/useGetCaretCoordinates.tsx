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

// This is the updated version that can handle content editable areas. this will most likely break my app as all of my other components are using text areas but will need to be converted to content editable areas

// export const useGetCaretCoordinates = () => {
//   const getCaretCoordinates = () => {
//     const selection = window.getSelection();
//     if (!selection.rangeCount) return { left: 0, top: 0 };

//     const range = selection.getRangeAt(0).cloneRange();
//     range.collapse(true);
//     const rect = range.getClientRects()[0];

//     if (rect) {
//       return {
//         left: rect.left + window.scrollX,
//         top: rect.top + window.scrollY,
//       };
//     }
//     return { left: 0, top: 0 };
//   };

//   return getCaretCoordinates;
// };
