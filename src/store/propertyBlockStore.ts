import { PropertyBlock } from "src/core/components/PropertyBlock"
import { create } from "zustand"

export type PropertyBlockType = {
  id: string
  entryBlockId: string
  content: string
  order: number
  type: string
  style?: string
  height?: string
}

export type LinkedPropertyBlockType = {
  id: string
  propertyBlockId: string
  entryBlockId: string
  order: number
}

// Type guard function to check wether it is a property or linkedProperty
export const isPropertyBlockType = (
  block: PropertyBlockType | LinkedPropertyBlockType
): block is PropertyBlockType => {
  return !("propertyBlockId" in block)
}

type PropertyBlockState = {
  propertyBlocks: Array<PropertyBlockType | LinkedPropertyBlockType>
  setPropertyBlocks: (
    propertyBlocks:
      | Array<PropertyBlockType | LinkedPropertyBlockType>
      | ((
          prevPropertyBlocks: Array<PropertyBlockType | LinkedPropertyBlockType>
        ) => Array<PropertyBlockType | LinkedPropertyBlockType>)
  ) => void
  currentPropertyBlock: PropertyBlockType | LinkedPropertyBlockType | null
  setCurrentPropertyBlock: (block: PropertyBlockType | LinkedPropertyBlockType | null) => void
  createPropertyBlock: (
    propertyBlockId: string,
    entryBlockId: string,
    content?: string
  ) => PropertyBlockType
  convertPropertyBlockToLinkedPropertyBlock: (
    existingBlockId: string,
    referenceBlockId: string
  ) => LinkedPropertyBlockType
  convertLinkedPropertyBlockToPropertyBlock: (
    existingBlockId: string,
    sourceBlockContent: string
  ) => PropertyBlockType
  getPropertyBlockById: (id: string) => PropertyBlockType | LinkedPropertyBlockType | undefined
}

export const usePropertyBlockStore = create<PropertyBlockState>((set, get) => {
  return {
    propertyBlocks: [],
    setPropertyBlocks: (propertyBlocks) => {
      set((state) => ({
        propertyBlocks:
          typeof propertyBlocks === "function"
            ? propertyBlocks(state.propertyBlocks)
            : propertyBlocks,
      }))
    },
    currentPropertyBlock: null,
    setCurrentPropertyBlock: (block) => set({ currentPropertyBlock: block }),
    createPropertyBlock: (propertyBlockId, entryBlockId, content = "") => {
      const currentMaxOrder = get()
        .propertyBlocks.filter(isPropertyBlockType)
        .reduce((max, block) => Math.max(max, block.order), 0)
      const newOrder = currentMaxOrder + 1
      const newBlock = {
        id: propertyBlockId,
        entryBlockId: entryBlockId,
        content,
        style: "",
        type: "property",
        order: newOrder,
      }
      set((state) => ({ propertyBlocks: [...state.propertyBlocks, newBlock] }))
      return newBlock
    },
    convertPropertyBlockToLinkedPropertyBlock: (existingBlockId, referenceBlockId) => {
      const existingBlock = get().propertyBlocks.find((block) => block.id === existingBlockId)
      if (!existingBlock || "propertyBlockId" in existingBlock) {
        // Handle the case where the block doesn't exist or is already a linked block
        throw new Error("Property block not found or already a linked block.")
      }
      const linkedBlock: LinkedPropertyBlockType = {
        id: existingBlock.id,
        propertyBlockId: referenceBlockId,
        entryBlockId: existingBlock.entryBlockId,
        order: existingBlock.order,
      }
      set((state) => ({
        propertyBlocks: state.propertyBlocks.map((block) =>
          block.id === existingBlockId ? linkedBlock : block
        ),
      }))
      return linkedBlock
    },
    convertLinkedPropertyBlockToPropertyBlock: (existingBlockId, sourceBlockContent) => {
      const linkedBlock = get().propertyBlocks.find((block) => block.id === existingBlockId)
      if (!linkedBlock || !("propertyBlockId" in linkedBlock)) {
        // Handle the case where the block doesn't exist or is not a linked block
        throw new Error("Linked block not found or block is not a linked block.")
      }
      // Create a new property block based on the linked block
      const newPropertyBlock: PropertyBlockType = {
        id: linkedBlock.id,
        entryBlockId: linkedBlock.entryBlockId,
        content: `"${sourceBlockContent}" property deleted`, // Set content to source block content with alert message
        order: linkedBlock.order,
        type: "property", // Assuming this is the default type for a property block
        style: "", // Reset style or set it to some default value
        height: "",
      }
      // Update the propertyBlocks array with the new property block
      set((state) => ({
        propertyBlocks: state.propertyBlocks.map((block) =>
          block.id === linkedBlock.id ? newPropertyBlock : block
        ),
      }))
      return newPropertyBlock
    },
    getPropertyBlockById: (id) => {
      return get().propertyBlocks.find((block) => block.id === id)
    },
  }
})
