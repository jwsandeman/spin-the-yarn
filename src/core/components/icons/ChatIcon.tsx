import React from "react"
import { IconProps } from "src/utils/commonTypes"

export const ChatIcon: React.FC<IconProps> = ({
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
      <path d="M 32 6 A 26 26 0 0 0 10.429688 46.460938 L 8 58 L 20.59375 55.347656 A 26 26 0 0 0 32 58 A 26 26 0 0 0 32 6 z"></path>
    </svg>
  )
}
