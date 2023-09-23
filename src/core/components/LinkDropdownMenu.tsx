type DropdownMenuProps = {
  options: string[]
  onSelect: (option: string) => void
  onClose: () => void
  onEnter: (e: React.KeyboardEvent<HTMLDivElement>, option: string) => void
  position: { left: number; top: number }
}

export const LinkDropdownMenu: React.FC<DropdownMenuProps> = ({
  options,
  onSelect,
  onClose,
  onEnter,
  position,
}) => {
  const dropdownStyle = {
    left: `${position.left}px`,
    top: `${position.top}px`,
  }

  return (
    <div className="absolute bg-slate-300" style={dropdownStyle}>
      {options.map((option, index) => (
        <div
          key={index}
          className="dropdownOption"
          onKeyDown={() => onEnter(e, option)}
          onClick={() => onSelect(option)}
        >
          {option}
        </div>
      ))}
      <button onClick={onClose}>Close</button>
    </div>
  )
}
