import React from "react"
import { IconProps } from "src/utils/commonTypes"

export const NewsfeedIcon: React.FC<IconProps> = ({
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
      <path d="M8,8v48h48V8H8z M19.122,13c2.258,0,3.712,1.643,3.712,1.643S24.288,13,26.546,13C29.006,13,31,15.007,31,17.482	C31,21.964,22.834,27,22.834,27s-8.166-5.036-8.166-9.518C14.668,15.007,16.662,13,19.122,13z M50,52H13v-2h37V52z M50,46H13v-2h37	V46z M50,40H13v-2h37V40z M50,34H13v-3l37,1V34z M50,27H35v-2h15V27z M50,21H35v-2h15V21z M50,15H35v-2l15-1V15z"></path>
    </svg>
  )
}
