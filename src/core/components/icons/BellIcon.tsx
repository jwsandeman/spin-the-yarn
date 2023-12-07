import React from "react"
import { IconProps } from "src/utils/commonTypes"

export const BellIcon: React.FC<IconProps> = ({
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
      <path d="M 32 6 C 17.641 6 6 17.641 6 32 C 6 46.359 17.641 58 32 58 C 46.359 58 58 46.359 58 32 C 58 17.641 46.359 6 32 6 z M 32 10 C 44.15 10 54 19.85 54 32 C 54 44.15 44.15 54 32 54 C 19.85 54 10 44.15 10 32 C 10 19.85 19.85 10 32 10 z M 30.5 14 L 31 18 L 33 18 L 33.5 14 L 30.5 14 z M 44.021484 18.564453 L 33.25 28.203125 A 4 4 0 0 0 32 28 A 4 4 0 0 0 32 36 A 4 4 0 0 0 32.722656 35.931641 L 40.816406 42.638672 L 42.640625 40.816406 L 35.931641 32.720703 A 4 4 0 0 0 35.796875 30.75 L 45.435547 19.978516 L 44.021484 18.564453 z M 14 30.5 L 14 33.5 L 18 33 L 18 31 L 14 30.5 z M 50 30.5 L 46 31 L 46 33 L 50 33.5 L 50 30.5 z M 31 46 L 30.5 50 L 33.5 50 L 33 46 L 31 46 z"></path>
    </svg>
  )
}
