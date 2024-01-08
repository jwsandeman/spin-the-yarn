import React from "react"
import { IconProps } from "src/utils/commonTypes"

export const BookIcon: React.FC<IconProps> = ({
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
      <path d="M 9 7 L 9 57 L 45 57 C 47.209 57 49 55.209 49 53 L 49 11 C 49 8.791 47.209 7 45 7 L 9 7 z M 51.957031 9.9433594 L 51.019531 53.933594 L 54.019531 53.996094 L 54.957031 10.007812 L 51.957031 9.9433594 z M 29 20 C 31.761 20 34 22.239 34 25 L 34 26.285156 C 34 29.046156 31.857 32 29 32 C 26.143 32 24 29.046156 24 26.285156 L 24 25 C 24 22.239 26.239 20 29 20 z M 29.001953 36 C 33.050953 36 36.599078 36.956094 38.580078 37.621094 C 39.605078 37.965094 40.363313 38.830625 40.570312 39.890625 L 40.984375 42 L 17.015625 42 L 17.429688 39.890625 C 17.637687 38.830625 18.395922 37.965094 19.419922 37.621094 C 21.401922 36.955094 24.951953 36 29.001953 36 z"></path>
    </svg>
  )
}