import { useTextBlocksStore } from "./textBlockStore"
import { usePropertyBlocksStore } from "./propertyBlockStore"
import { useReferenceBlockStore } from "./referenceBlockStore"

export const initializeBlockStores = () => {
  const textBlock = useTextBlocksStore.getState().createTextBlock()
  const propertyBlock = usePropertyBlocksStore.getState().createPropertyBlock()
  useReferenceBlockStore.getState().createReferenceBlock(textBlock.id, propertyBlock.id)
}
