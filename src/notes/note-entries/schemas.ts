import { z } from "zod"

export const CreateNoteEntrySchema = z.object({
  noteId: z.undefined(),
  title: z.string(),
  published: z.boolean(),
  wordCount: z.number(),
  id: z.string(),
  // template: __fieldName__: z.__zodType__(),
})
export const UpdateNoteEntrySchema = z.object({
  id: z.number(),
  noteId: z.undefined(),
  // template: __fieldName__: z.__zodType__(),
})

export const DeleteNoteEntrySchema = z.object({
  id: z.number(),
})
