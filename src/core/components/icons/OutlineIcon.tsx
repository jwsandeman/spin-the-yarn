import React from "react"
import { IconProps } from "src/utils/commonTypes"

export const OutlineIcon: React.FC<IconProps> = ({
  className = "text-primary",
  size = 24,
  fill = "currentColor",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      fill={fill}
    >
      <path d="M 45 7 A 8 8 0 0 0 38.90625 20.169922 L 33.279297 29.115234 L 21.707031 29.886719 A 8 8 0 0 0 14 24 A 8 8 0 0 0 14 40 A 8 8 0 0 0 21.714844 34.113281 L 33.279297 34.884766 L 38.90625 43.830078 A 8 8 0 0 0 45 57 A 8 8 0 0 0 45 41 A 8 8 0 0 0 42.550781 41.388672 L 38.287109 32 L 42.552734 22.607422 A 8 8 0 0 0 45 23 A 8 8 0 0 0 45 7 z"></path>
    </svg>
  )
}