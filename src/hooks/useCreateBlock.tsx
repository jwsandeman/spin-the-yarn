import { useTextBlocksStore } from "../store/textBlockStore"
import { usePropertyBlocksStore } from "../store/propertyBlockStore"
import { useReferenceBlockStore } from "../store/referenceBlockStore"

export const useCreateBlock = () => {
  const createBlock = () => {
    const textBlock = useTextBlocksStore.getState().createTextBlock()
    const propertyBlock = usePropertyBlocksStore.getState().createPropertyBlock()
    const referenceBlock = useReferenceBlockStore
      .getState()
      .createReferenceBlock(textBlock.id, propertyBlock.id)

    return referenceBlock
  }

  return {
    createBlock,
  }
}
