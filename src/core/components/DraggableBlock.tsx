import React, { useEffect, useMemo, useRef, useState } from "react"
import { useDrag, useDrop } from "react-dnd"
import { TextBlock } from "./TextBlock"
import { PropertyTextBlock } from "./PropertyTextBlock"
import { PropertyBlockType, usePropertyBlocksStore } from "src/store/propertyBlocksStore"
import { useBlocksStore } from "src/store/blocksStore"

const DRAG_TYPE = "TEXT_BLOCK"

type DragItem = {
  index: number
  type: string // This should match the type you provided in the useDrag hook
}

type DropCollectedProps = {
  isOver: boolean
}

export const DraggableBlock = ({ block, index, moveBlock, textBlockRefs, propertyBlockRefs }) => {
  // export const DraggableBlock = ({ block, index, moveBlock, textBlockRefs }) => {
  const ref = useRef(null)
  const { propertyBlocks, setPropertyBlocks } = usePropertyBlocksStore()
  const { blocks, setBlocks } = useBlocksStore()

  // Drop logic
  const [{ isOver }, drop] = useDrop<DragItem, any, DropCollectedProps>({
    accept: DRAG_TYPE,
    hover: (item, monitor) => {
      if (!ref.current) return
      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) return

      moveBlock(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  })

  // Drag logic
  const [{ isDragging }, drag] = useDrag({
    type: DRAG_TYPE,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  // Combine the drag and drop refs
  drag(drop(ref))

  // Use the isOver value to conditionally apply Tailwind classes
  const dropzoneClasses = isOver
    ? "shadow-lg transform transition-transform duration-200" // This is the class when a draggable item is hovering
    : ""

  const [currentPropertyBlock, setCurrentPropertyBlock] = useState<PropertyBlockType | null>(null)

  // this is causing infinite loop
  useEffect(() => {
    const existingPropertyBlock = propertyBlocks.find(
      (propertyBlock) => propertyBlock.id === block.propertyId
    )

    let newPropertyBlock: PropertyBlockType

    if (!existingPropertyBlock) {
      newPropertyBlock = {
        id: Math.random().toString(36).substr(2, 9),
        content: "",
        style: "font-bold",
        type: "",
        height: "auto",
        blockId: block.id,
      }
      setPropertyBlocks((prevBlocks) => [...prevBlocks, newPropertyBlock])
    } else {
      newPropertyBlock = existingPropertyBlock
    }

    setCurrentPropertyBlock(newPropertyBlock)

    // Update the TextBlock to store the id of the associated PropertyTextBlock
    setBlocks((prevBlocks) => {
      const updatedBlocks = [...prevBlocks]
      const currentBlock = updatedBlocks[index]
      if (currentBlock) {
        currentBlock.propertyId = newPropertyBlock.id
      }
      return updatedBlocks
    })
    // console.log("Blocks", blocks)
    // console.log("Property Blocks", propertyBlocks)
  }, [block, setPropertyBlocks, setBlocks, index, propertyBlocks])

  return (
    <div
      ref={ref}
      className={`flex items-start ${dropzoneClasses} ${isDragging ? "opacity-50" : "opacity-100"}`}
    >
      <PropertyTextBlock
        propertyBlock={currentPropertyBlock}
        textBlock={block}
        index={index}
        // index={currentPropertyBlock?.id}
        propertyBlockRefs={propertyBlockRefs}
        // className={currentPropertyBlock?.style}
      />
      <span
        className="text-gray-300 mr-2 pt-0.5 drag-icon transform hover:scale-125 transition-transform duration-200"
        title="Drag to reorder"
      >
        ⠿
      </span>
      <TextBlock block={block} index={index} textBlockRefs={textBlockRefs} />
    </div>
  )
}
