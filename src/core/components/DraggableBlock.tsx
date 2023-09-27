import React, { useEffect, useMemo, useRef, useState } from "react"
import { useDrag, useDrop } from "react-dnd"
import { TextBlock } from "./TextBlock"
import { PropertyTextBlock } from "./PropertyTextBlock"
import { PropertyBlockType, usePropertyBlocksStore } from "src/store/propertyBlocksStore"
import { useBlocksStore } from "src/store/blocksStore"
import { set } from "zod"

// TODO - move the useEffect into the enter keydown handler so that both text and property get created at the same time. it will be easier to associate them and set the focus plus that logic doesnt really belong in this component

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

  useEffect(() => {
    const associatedPropertyBlock = propertyBlocks.find(
      (propertyBlock) => propertyBlock.id === block.propertyId
    )
    let newPropertyBlock: PropertyBlockType | null = null

    if (associatedPropertyBlock) {
      newPropertyBlock = associatedPropertyBlock
    } else {
      // else associate intial property with intial text block
      const initialPropertyBlock = propertyBlocks[0]
      if (initialPropertyBlock) {
        setBlocks((prevBlocks) => {
          const updatedBlocks = [...prevBlocks]
          const currentBlock = updatedBlocks[index]
          if (currentBlock) {
            currentBlock.propertyId = initialPropertyBlock.id
          }
          return updatedBlocks
        })
        newPropertyBlock = initialPropertyBlock
      }
    }
    if (newPropertyBlock) {
      setCurrentPropertyBlock(newPropertyBlock)
    }
  }, [block.propertyId, index, propertyBlocks, setBlocks])

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
      <TextBlock
        block={block}
        propertyBlock={currentPropertyBlock}
        index={index}
        textBlockRefs={textBlockRefs}
      />
    </div>
  )
}
