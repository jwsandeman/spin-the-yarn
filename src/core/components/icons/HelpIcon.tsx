import React from "react"
import { IconProps } from "src/utils/commonTypes"

export const HelpIcon: React.FC<IconProps> = ({
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
      <path d="M32,6C17.641,6,6,17.641,6,32c0,14.359,11.641,26,26,26s26-11.641,26-26C58,17.641,46.359,6,32,6z M32.021,16 C33.555,16,35,17.346,35,18.981C35,20.727,33.555,22,32.021,22C30.225,22,29,20.727,29,18.981C29,17.346,30.225,16,32.021,16z M39,47h-5h-4h-5v-3l5-1V30h-4v-3l8-1v17l5,1V47z"></path>
    </svg>
  )
}
