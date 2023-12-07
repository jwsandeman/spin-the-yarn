import React from "react"
import { IconProps } from "src/utils/commonTypes"

export const ChaptersIcon: React.FC<IconProps> = ({
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
      <path d="M 11 6 L 11 58 L 53 58 L 53 24.154297 C 53 22.117297 52.280703 20.144938 50.970703 18.585938 L 42.109375 8.0429688 C 41.021375 6.7479688 39.416609 6 37.724609 6 L 11 6 z M 15 10 L 36.695312 10 C 39.985312 10 41 11.365078 41 12.580078 C 41 14.365078 39 17 39 17 C 48.761 21.62 48.816406 21.618547 48.816406 25.185547 C 48.816406 30.185547 49 54 49 54 L 15 54 L 15 10 z M 22 26 L 22 30 L 42 30 L 42 26 L 22 26 z M 22 34 L 22 38 L 42 38 L 42 34 L 22 34 z M 22 42 L 22 46 L 35 46 L 35 42 L 22 42 z"></path>
    </svg>
  )
}
