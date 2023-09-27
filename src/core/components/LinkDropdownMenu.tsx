import { PropertyBlockType } from "src/store/propertyBlocksStore"

type DropdownMenuProps = {
  options: PropertyBlockType[]
  activeOptionIndex: number
  onSelect: (option: PropertyBlockType) => void
  onClose: () => void
  position: { left: number; top: number }
}

export const LinkDropdownMenu: React.FC<DropdownMenuProps> = ({
  options,
  activeOptionIndex,
  onSelect,
  onClose,
  position,
}) => {
  const dropdownStyle = {
    left: `${position.left + 4}px`,
    top: `${position.top + 28}px`,
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, option: PropertyBlockType) => {
    if (e.key === "Enter") {
      onSelect(option)
    }
  }

  return (
    // <div className="relative bg-green-300" style={dropdownStyle}>
    <div
      className="absolute z-10 w-full text-xs bg-neutral-100 border border-neutral-200 rounded-md shadow-lg transition-transform transform scale-95 opacity-1 group-hover:opacity-100 group-hover:scale-100"
      style={dropdownStyle}
    >
      {options.map((option, index) => (
        <div
          key={option.id}
          className={`dropdownOption cursor-pointer py-1 px-2 hover:bg-neutral-200 ${
            index === activeOptionIndex ? "bg-neutral-200" : ""
          }`}
          tabIndex={0} // Make the div focusable
          onKeyDown={(e) => handleKeyDown(e, option)}
          onClick={() => onSelect(option)}
        >
          {option.content}
        </div>
      ))}
      {/* <button onClick={onClose}>Close</button> */}
    </div>
  )
}
