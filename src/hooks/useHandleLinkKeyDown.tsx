import ReactDOM from "react-dom"
import { useEffect, useState } from "react"
import { BlockType } from "src/store/blocksStore"
import { PropertyBlockType } from "src/store/propertyBlocksStore"

// TODO - refactor this component (especially getCaretCoordinates) into hooks to seperate concerns

// BUG - when inserting and linking properties, the focus is not placed in the corresponding textarea

export const useHandleLinkKeyDown = (
  blocks: BlockType[],
  propertyBlocks: PropertyBlockType[],
  setBlocks: (blocks: BlockType[] | ((prevBlocks: BlockType[]) => BlockType[])) => void,
  setPropertyBlocks: (
    propertyBlocks: PropertyBlockType[] | ((prevBlocks: BlockType[]) => BlockType[])
  ) => void,
  searchValue: string,
  setSearchValue: (value: string) => void
) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState({ left: 0, top: 0 })
  const [dropdownOptions, setDropdownOptions] = useState<PropertyBlockType[]>([])
  const [activeOptionIndex, setActiveOptionIndex] = useState(0)

  useEffect(() => {
    if (searchValue) {
      const filteredPropertyBlockContents = propertyBlocks.filter(
        (propertyBlock) =>
          propertyBlock.content.includes(searchValue) && propertyBlock.content !== `@${searchValue}`
      )
      setDropdownOptions(filteredPropertyBlockContents)
    } else {
      setDropdownOptions([]) // Reset dropdown options if searchValue is empty
    }
  }, [searchValue, propertyBlocks])

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

  // const handleDropdownSelect = (selectedOption: string, propertyBlockId: string) => {
  const handleDropdownSelect = (
    selectedPropertyBlock: PropertyBlockType,
    propertyBlockId: string
  ) => {
    const currentPropertyBlock = propertyBlocks.find(
      (propertyBlock) => propertyBlock.id === propertyBlockId
    )
    const associatedTextBlock = blocks.find((block) => block.propertyId === propertyBlockId)

    if (currentPropertyBlock && associatedTextBlock) {
      // Add the text block Id to the selected propertyBlock blockIds array
      const updatedPropertyBlocks = propertyBlocks.map((propertyBlock) =>
        propertyBlock.id === selectedPropertyBlock.id
          ? {
              ...propertyBlock,
              blockIds: [...(propertyBlock.blockIds || []), associatedTextBlock.id],
            }
          : propertyBlock
      )
      // Add the property block id to the text block
      const updatedBlocks = blocks.map((block) =>
        block.id === associatedTextBlock.id
          ? { ...block, propertyId: selectedPropertyBlock.id }
          : block
      )
      // remove the currentPropertyBlock from the propertyBlocks array permanently
      const filteredPropertyBlocks = updatedPropertyBlocks.filter(
        (propertyBlock) => propertyBlock.id !== currentPropertyBlock.id
      )

      ReactDOM.unstable_batchedUpdates(() => {
        setPropertyBlocks(filteredPropertyBlocks)
        setBlocks(updatedBlocks)
        setSearchValue("") // Reset the search value
        setDropdownVisible(false) // Close the dropdown
      })
    }
  }

  const handleLinkKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>,
    propertyBlockId: string
  ) => {
    if (e.key === "@") {
      const position = e.currentTarget.selectionStart
      const { left, top } = getCaretCoordinates(e.currentTarget, position)
      ReactDOM.unstable_batchedUpdates(() => {
        setDropdownPosition({ left, top })
        setDropdownVisible(true)
      })
    }

    // Handle arrow navigation in the dropdown menu if it's visible
    if (isDropdownVisible) {
      if (e.key === "ArrowDown") {
        e.preventDefault() // Prevent cursor movement in the textarea
        setActiveOptionIndex((prevIndex) => (prevIndex + 1) % dropdownOptions.length)
      } else if (e.key === "ArrowUp") {
        e.preventDefault() // Prevent cursor movement in the textarea
        setActiveOptionIndex(
          (prevIndex) => (prevIndex - 1 + dropdownOptions.length) % dropdownOptions.length
        )
      } else if (e.key === "Enter") {
        e.preventDefault() // Prevent form submission or other default behavior
        if (dropdownOptions[activeOptionIndex]) {
          const selectedOption = dropdownOptions[activeOptionIndex]
          if (selectedOption) {
            handleDropdownSelect(selectedOption, propertyBlockId)
          }
        }
      }
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    const caretPos = e.target.selectionStart
    const lastAtPos = value.lastIndexOf("@", caretPos - 1)
    if (lastAtPos !== -1) {
      const searchText = value.slice(lastAtPos + 1, caretPos)
      setSearchValue(searchText)
    } else {
      setSearchValue("") // Reset search value if "@" is not present
    }
  }

  return {
    handleLinkKeyDown,
    handleInputChange,
    handleDropdownSelect,
    isDropdownVisible,
    setDropdownVisible,
    dropdownOptions,
    dropdownPosition,
    activeOptionIndex,
  }
}
