import { useState } from "react"
import { BlockType } from "src/store/blocksStore"
import { PropertyBlockType } from "src/store/propertyBlocksStore"

export const useHandleLinkKeyDown = (
  blocks: BlockType[],
  propertyBlocks: PropertyBlockType[],
  updateFunction: (propertyBlocks: BlockType[] | ((prevBlocks: BlockType[]) => BlockType[])) => void
) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState({ left: 0, top: 0 })
  const [dropdownOptions, setDropdownOptions] = useState<string[]>([])
  const [currentInput, setCurrentInput] = useState("")

  const getCaretCoordinates = (element: HTMLTextAreaElement) => {
    const range = document.getSelection()?.getRangeAt(0)
    if (!range) return { left: 0, top: 0 }

    const rect = range.getBoundingClientRect()
    return {
      left: rect.left + window.scrollX,
      top: rect.bottom + window.scrollY,
    }
  }

  const handleDropdownSelect = (selectedOption: string, propertyBlockId: string) => {
    const selectedPropertyBlock = propertyBlocks.find(
      (propertyBlock) => propertyBlock.content === selectedOption
    )

    if (selectedPropertyBlock) {
      // Update the content of the propertyBlock with the selected option
      const updatedPropertyBlocks = propertyBlocks.map((propertyBlock) =>
        propertyBlock.id === propertyBlockId
          ? { ...propertyBlock, content: selectedOption }
          : propertyBlock
      )
      updateFunction(updatedPropertyBlocks)
      setDropdownVisible(false) // Close the dropdown
    }
  }

  const handleLinkKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>, blockId: string) => {
    if (e.key === "@") {
      const { left, top } = getCaretCoordinates(e.currentTarget)
      const currentPropertyBlockContents = propertyBlocks
        .filter((propertyBlock) => propertyBlock.content)
        .map((propertyBlock) => propertyBlock.content)

      setDropdownPosition({ left, top })
      setDropdownOptions(currentPropertyBlockContents)
      setDropdownVisible(true)
    } else if (isDropdownVisible) {
      setCurrentInput((prevInput) => prevInput + e.key)
      const filteredOptions = propertyBlocks
        .filter((propertyBlock) => propertyBlock.content.includes(currentInput))
        .map((propertyBlock) => propertyBlock.content)
      setDropdownOptions(filteredOptions)
    }
  }

  return {
    handleLinkKeyDown,
    handleDropdownSelect,
    isDropdownVisible,
    setDropdownVisible,
    dropdownOptions,
    setDropdownOptions,
    dropdownPosition,
  }
}
