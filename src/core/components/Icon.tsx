import React from "react"
import { IconProps } from "src/utils/commonTypes"

export const Icon: React.FC<IconProps> = ({
  iconPath,
  href = "#",
  buttonClass = "btn-ghost",
  buttonSize = "btn-md",
  buttonShape = "btn-circle",
  iconClass,
  iconColor = "text-base-content",
  iconSize = 24,
  fill = "currentColor",
  strokeWidth = 1,
  isLink,
  isButton,
}) => {
  return (
    <div className={isButton ? `btn ${buttonSize} ${buttonShape} ${buttonClass}` : "flex"}>
      {isLink ? (
        <a href={href} rel="noreferrer" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={iconSize}
            height={iconSize}
            viewBox="0 0 24 24"
            fill="none"
            stroke={fill}
            stroke-width={strokeWidth}
            stroke-linecap="round"
            stroke-linejoin="round"
            className={`lucide lucide-menu ${iconColor} ${iconClass}`}
          >
            <>{iconPath}</>
          </svg>
        </a>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={iconSize}
          height={iconSize}
          viewBox="0 0 24 24"
          fill="none"
          stroke={fill}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
          className={`lucide lucide-menu ${iconColor}`}
        >
          <>{iconPath}</>
        </svg>
      )}
    </div>
  )
}
