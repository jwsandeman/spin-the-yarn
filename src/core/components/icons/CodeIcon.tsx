import React from "react"
import { IconProps } from "src/utils/commonTypes"

export const CodeIcon: React.FC<IconProps> = ({
  className = "lucide lucide-code",
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}
