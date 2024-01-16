import React from "react"
import { IconProps } from "src/utils/commonTypes"

export const BoldIcon: React.FC<IconProps> = ({
  className = "lucide lucide-bold",
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
      <path d="M14 12a4 4 0 0 0 0-8H6v8" />
      <path d="M15 20a4 4 0 0 0 0-8H6v8Z" />
    </svg>
  )
}
