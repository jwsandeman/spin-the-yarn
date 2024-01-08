import React from "react"
import { IconProps } from "src/utils/commonTypes"

export const LatestIcon: React.FC<IconProps> = ({
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
      <path d="M 21 8.9199219 L 14 10.919922 L 8.3046875 9.2929688 L 5 11.474609 L 5 50 C 5 53.314 7.686 56 11 56 L 49 56 L 53 56 L 53.324219 56 C 56.508219 56 59.137453 53.511031 59.314453 50.332031 L 61 20 L 53 20 L 53 11.884766 L 49.230469 9.3457031 L 42.0625 10.9375 L 35 8.9199219 L 28 10.919922 L 21 8.9199219 z M 21 13.080078 L 28 15.080078 L 35 13.080078 L 41.9375 15.0625 L 49 13.492188 L 49 20 L 49 52 L 11 52 C 9.895 52 9 51.105 9 50 L 9 13.650391 L 14 15.080078 L 21 13.080078 z M 14 20 L 14 40 L 32 40 L 32 20 L 14 20 z M 36 20 L 36 24 L 44 24 L 44 20 L 36 20 z M 36 28 L 36 32 L 44 32 L 44 28 L 36 28 z M 36 36 L 36 40 L 44 40 L 44 36 L 36 36 z M 14 44 L 14 48 L 32 48 L 32 44 L 14 44 z M 36 44 L 36 48 L 44 48 L 44 44 L 36 44 z"></path>
    </svg>
  )
}