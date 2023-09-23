import { z } from "zod"

export const CreateNotePropertySchema = z.object({
  noteTemplateId: z.number(),
  title: z.string(),
  id: z.number(),
  // template: __fieldName__: z.__zodType__(),
})
export const UpdateNotePropertySchema = z.object({
  id: z.number(),
  noteTemplateId: z.number(),
  // template: __fieldName__: z.__zodType__(),
})

export const DeleteNotePropertySchema = z.object({
  id: z.number(),
})
