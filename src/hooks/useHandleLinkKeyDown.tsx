import ReactDOM from "react-dom"
import { useEffect, useState } from "react"
import {
  PropertyBlockType,
  isPropertyBlockType,
  usePropertyBlockStore,
} from "src/store/propertyBlockStore"
import { useUIStore } from "src/store/uiStore"
import { useGetCaretCoordinates } from "./useGetCaretCoordinates"

// TODO - add styling to linked properties so user knows they are linked elsewhere and any changes they make will be reflected elsewhere

export const useHandleLinkKeyDown = (
  searchValue: string,
  setSearchValue: (value: string) => void
) => {
  const { setFocusContext } = useUIStore()
  const { propertyBlocks, convertPropertyBlockToLinkedPropertyBlock } = usePropertyBlockStore()
  const getCaretCoordinates = useGetCaretCoordinates()
  const [isDropdownVisible, setDropdownVisible] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState({ left: 0, top: 0 })
  const [dropdownOptions, setDropdownOptions] = useState<PropertyBlockType[]>([])
  const [activeOptionIndex, setActiveOptionIndex] = useState(0)

  useEffect(() => {
    if (searchValue) {
      const filteredPropertyBlockContents = propertyBlocks
        .filter(isPropertyBlockType) // Filter out LinkedPropertyBlockType objects
        .filter(
          (propertyBlock) =>
            propertyBlock.content.includes(searchValue) &&
            propertyBlock.content !== `@${searchValue}`
        )
      setDropdownOptions(filteredPropertyBlockContents)
    } else {
      setDropdownOptions([]) // Reset dropdown options if searchValue is empty
    }
  }, [searchValue, propertyBlocks])

  const handleDropdownSelect = (
    selectedPropertyBlock: PropertyBlockType,
    propertyBlockId: string
  ) => {
    const linkedPropertyBlock = convertPropertyBlockToLinkedPropertyBlock(
      propertyBlockId,
      selectedPropertyBlock.id
    )
    // const propertyBlock = propertyBlocks.find((b) => b.id === propertyBlockId)
    if (linkedPropertyBlock) {
      ReactDOM.unstable_batchedUpdates(() => {
        setFocusContext({ type: "entry", id: linkedPropertyBlock.entryBlockId })
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
      // e.preventDefault() // Prevent cursor movement in the textarea

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
      } else if (isDropdownVisible && e.key === "Enter") {
        e.preventDefault() // Prevent form submission or other default behavior
        e.stopPropagation() // Prevent event from propagating further
        if (dropdownOptions[activeOptionIndex]) {
          const selectedOption = dropdownOptions[activeOptionIndex]
          if (selectedOption) {
            handleDropdownSelect(selectedOption, propertyBlockId)
          }
        }
        return
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
