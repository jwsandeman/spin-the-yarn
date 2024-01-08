import React from "react"
import { IconProps } from "src/utils/commonTypes"

export const ProjectsIcon: React.FC<IconProps> = ({
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
      <path d="M 26 6 C 23.81506 6 22 7.8150603 22 10 L 22 12 L 5 12 L 5 29 C 5 31.21 6.79 33 9 33 L 28 33 L 28 29 L 36 29 L 36 33 L 55 33 C 57.21 33 59 31.21 59 29 L 59 12 L 42 12 L 42 10 C 42 7.8150603 40.18494 6 38 6 L 26 6 z M 26 10 L 38 10 L 38 12 L 26 12 L 26 10 z M 30 31 L 30 37 L 34 37 L 34 31 L 30 31 z M 5 35 L 5 50 C 5 52.21 6.79 54 9 54 L 55 54 C 57.21 54 59 52.21 59 50 L 59 36 L 36 35.570312 L 36 39 L 28 39 L 28 35.429688 L 5 35 z"></path>
    </svg>
  )
}