import React from "react"
import { IconProps } from "src/utils/commonTypes"

export const UnderlineIcon: React.FC<IconProps> = ({
  className = "lucide lucide-underline",
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
      <path d="M6 4v6a6 6 0 0 0 12 0V4" />
      <line x1="4" x2="20" y1="20" y2="20" />
    </svg>
  )
}
