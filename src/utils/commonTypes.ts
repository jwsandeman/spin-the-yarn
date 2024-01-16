import { SVGProps } from "react"
import { LinkedPropertyBlockType, PropertyBlockType } from "src/store/propertyBlockStore"

export type IconProps = {
  iconPath: SVGProps<SVGSVGElement>
  href?: string
  buttonClass?: string
  buttonSize?: string
  buttonShape?: string
  iconClass?: string
  iconColor?: string
  iconSize?: number
  fill?: string
  strokeWidth?: string
  isLink?: boolean
  isButton?: boolean
}

export type EditorProps = {
  content: string
  // onEnter: (e: React.KeyboardEvent<HTMLDivElement>, propertyBlock: any) => void
  blockType: string
  blockId: string
  propertyBlock: PropertyBlockType | LinkedPropertyBlockType
  isFocused: boolean
}
