import React from "react"
import { IconProps } from "src/utils/commonTypes"

export const ExploreIcon: React.FC<IconProps> = ({
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
      <path d="M 13 7 L 13 11 L 24 11 L 24 7 L 13 7 z M 40 7 L 40 11 L 51 11 L 51 7 L 40 7 z M 10 13 C 9 41 6 46 6 46 L 28 46 L 28 35 L 36.033203 35 L 36.033203 46 L 58.033203 46 C 58.033203 46 55.033203 41 54.033203 13 L 37.033203 13 L 37.033203 20 L 27 20 L 27 13 L 10 13 z M 26 25 L 27 25 L 27 26 L 29 26 L 29 25 L 31 25 L 31 26 L 33 26 L 33 25 L 35.033203 25 L 35.033203 26 L 37.033203 26 L 37.033203 25 L 38.033203 25 C 38.585203 25 39.033203 25.448 39.033203 26 L 39.033203 28 C 39.033203 28.552 38.585203 29 38.033203 29 L 26 29 C 25.448 29 25 28.552 25 28 L 25 26 C 25 25.448 25.448 25 26 25 z M 4 49 L 4 56 L 28.996094 56 L 28.996094 49 L 4 49 z M 35 49 L 35 56 L 59.996094 56 L 59.996094 49 L 35 49 z"></path>
    </svg>
  )
}
