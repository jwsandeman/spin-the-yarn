import { LinkedPropertyBlockType, PropertyBlockType } from "src/store/propertyBlockStore"

export type IconProps = {
  className?: string
  size?: number
  fill?: string
  strokeWidth?: string
}

export type EditorProps = {
  content: string
  // onEnter: (e: React.KeyboardEvent<HTMLDivElement>, propertyBlock: any) => void
  blockType: string
  blockId: string
  propertyBlock: PropertyBlockType | LinkedPropertyBlockType
  isFocused: boolean
}
