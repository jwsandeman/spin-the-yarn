import React from "react"
import { IconProps } from "src/utils/commonTypes"

export const BooksIcon: React.FC<IconProps> = ({
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
      <path d="M 8.6835938 6.9511719 C 7.0117969 6.9495938 6 7 6 7 L 6 13.128906 C 3.51 13.580906 2 14 2 14 L 2 56 C 2 56 13.861628 52.463626 27 54.822266 L 27 57 C 27 57 29 58 32 58 C 35 58 37 57 37 57 L 37 54.822266 C 50.138372 52.463626 62 56 62 56 L 62 14 C 62 14 60.49 13.580906 58 13.128906 L 58 7 C 58 7 41.801 6.1937187 32 11.136719 C 24.64925 7.4294687 13.698984 6.9559062 8.6835938 6.9511719 z M 9 11 C 21.064226 11 27.206721 12.781714 30 13.966797 L 30 46 L 34 45 L 34 13.966797 C 36.793279 12.781714 42.935774 11 55 11 L 55 48 C 37 48 32 52 32 52 C 32 52 27 48 9 48 L 9 11 z"></path>
    </svg>
  )
}
