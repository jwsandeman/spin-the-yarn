import React from "react"
import { IconProps } from "src/utils/commonTypes"

export const ShowcaseIcon: React.FC<IconProps> = ({
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
      <path d="M 4 10 L 4 54 L 61 54 L 61 10 L 4 10 z M 7 14 L 58 14 L 57 51 L 8 50 L 7 14 z M 11 17 L 11 47 L 54 47 L 54 17 L 11 17 z M 17.5 20 C 19.157 20 20.5 21.343 20.5 23 C 20.5 24.657 19.157 26 17.5 26 C 15.843 26 14.5 24.657 14.5 23 C 14.5 21.343 15.843 20 17.5 20 z M 42.5 22 L 49.5 32 L 52 44 L 13 44 L 14.5 38 L 23.5 32 L 26.5 34 L 24.5 38 L 26.5 40 L 33.5 30 L 37.5 29 L 42.5 22 z"></path>
    </svg>
  )
}
