import React from "react"
import { IconProps } from "src/utils/commonTypes"

export const ItalicIcon: React.FC<IconProps> = ({
  className = "lucide lucide-italic",
  size = 24,
  fill = "currentColor",
  strokeWidth = "1",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={fill}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
      className={className}
    >
      <line x1="19" x2="10" y1="4" y2="4" />
      <line x1="14" x2="5" y1="20" y2="20" />
      <line x1="15" x2="9" y1="4" y2="20" />
    </svg>
  )
}
