import React, { useRef } from "react"
import { useDrag, useDrop } from "react-dnd"
import { EntryBlock } from "./EntryBlock"
import { PropertyBlock } from "./PropertyBlock"
import { isPromise } from "util/types"
import { isPropertyBlockType } from "src/store/propertyBlockStore"
import { useGetSourceProperty } from "src/hooks/useGetSourceProperty"

const DRAG_TYPE = "TEXT_BLOCK"

type DragItem = {
  index: number
  type: string // This should match the type you provided in the useDrag hook
}

type DropCollectedProps = {
  isOver: boolean
}

export const DraggableBlock = ({ propertyBlock, index, moveBlock }) => {
  const ref = useRef(null)
  const { isSourceProperty } = useGetSourceProperty()

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

  // return (
  //   <div
  //     ref={ref}
  //     className={`flex items-start ${dropzoneClasses} ${isDragging ? "opacity-50" : "opacity-100"}`}
  //   >
  //     {!isPropertyBlockType(propertyBlock) && (
  //       <span
  //         className="text-secondary -ml-3 -mr-1 pt-1.5 drag-icon text-xs transform hover:scale-125 transition-transform duration-200"
  //         title="Drag to reorder"
  //       >
  //         ⏀
  //       </span>
  //     )}
  //     {isSourceProperty(propertyBlock) && (
  //       <span
  //         className="text-secondary -ml-3 -mr-1 pt-1.5 drag-icon text-xs transform hover:scale-125 transition-transform duration-200"
  //         title="Drag to reorder"
  //       >
  //         ☼
  //       </span>
  //     )}
  //     <PropertyBlock propertyBlock={propertyBlock} />
  //     <span
  //       className="text-gray-300 mr-2 pt-0.5 drag-icon transform hover:scale-125 transition-transform duration-200"
  //       title="Drag to reorder"
  //     >
  //       ⠿
  //     </span>
  //     <EntryBlock propertyBlock={propertyBlock} />
  //   </div>
  // )

  return (
    <div
      ref={ref}
      className={`flex items-start ${dropzoneClasses} ${isDragging ? "opacity-50" : "opacity-100"}`}
    >
      <div className="flex-shrink-0 w-2 h-2 justify-center items-center">
        {" "}
        {/* Fixed width and height, centered content */}
        {!isPropertyBlockType(propertyBlock) && (
          <span className="text-secondary drag-icon text-xs">⏀</span>
        )}
        {isSourceProperty(propertyBlock) && (
          <span className="text-secondary drag-icon text-xs">☼</span>
        )}
      </div>
      <PropertyBlock propertyBlock={propertyBlock} />
      <div className="flex-shrink-0 w-2 h-2 justify-center items-center">
        {" "}
        {/* Fixed width and height, centered content */}
        <span
          className="text-gray-300 drag-icon transform hover:scale-125 transition-transform duration-200"
          title="Drag to reorder"
        >
          ⠿
        </span>
      </div>
      <EntryBlock propertyBlock={propertyBlock} />
    </div>
  )

  // return (
  //   <div
  //     ref={ref}
  //     className={`flex items-center ${dropzoneClasses} ${
  //       isDragging ? "opacity-50" : "opacity-100"
  //     } bg-transparent rounded-lg shadow-sm`}
  //   >
  //     <div className="flex-shrink-0 w-8 h-8 flex justify-center items-center mr-2">
  //       {!isPropertyBlockType(propertyBlock) && (
  //         <span
  //           className="text-primary flex items-center justify-center rounded-full bg-transparent shadow-sm p-2"
  //           title="Drag to reorder"
  //         >
  //           ⏀ {/* Icon */}
  //         </span>
  //       )}
  //       {isSourceProperty(propertyBlock) && (
  //         <span
  //           className="text-secondary flex items-center justify-center rounded-full bg-transparent shadow-sm p-2"
  //           title="Drag to reorder"
  //         >
  //           ☼ {/* Icon */}
  //         </span>
  //       )}
  //     </div>
  //     <PropertyBlock propertyBlock={propertyBlock} />
  //     <div className="flex-shrink-0 w-8 h-8 flex justify-center items-center mr-2">
  //       <span
  //         className="text-accent flex items-center justify-center rounded-full bg-transparent shadow-sm p-2"
  //         title="Drag to reorder"
  //       >
  //         ⠿ {/* Icon */}
  //       </span>
  //     </div>
  //     <EntryBlock propertyBlock={propertyBlock} />
  //   </div>
  // )
}
