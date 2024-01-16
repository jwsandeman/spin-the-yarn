import React from "react"
import { IconProps } from "src/utils/commonTypes"

export const StrikethroughIcon: React.FC<IconProps> = ({
  className = "lucide lucide-strikethrough",
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
      <path d="M16 4H9a3 3 0 0 0-2.83 4" />
      <path d="M14 12a4 4 0 0 1 0 8H6" />
      <line x1="4" x2="20" y1="12" y2="12" />
    </svg>
  )
}
