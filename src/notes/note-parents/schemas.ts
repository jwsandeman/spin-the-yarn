// When directly working with note-parents on their own
import { z } from "zod"

export const CreateNoteParentSchema = z.object({
  noteId: z.number(),
  parentId: z.number(),
  parentType: z.string(),
  title: z.string(),
  // id: z.number(), // should not be neccessary
  // template: __fieldName__: z.__zodType__(),
})
export const UpdateNoteParentSchema = z.object({
  noteId: z.number(),
  parentId: z.number(),
  parentType: z.string(),
  title: z.string(),
  // id: z.number(), // should not be neccessary
  // template: __fieldName__: z.__zodType__(),
})

export const DeleteNoteParentSchema = z.object({
  id: z.number(),
})
