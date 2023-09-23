import { z } from "zod"

// Schemas for NoteParent operations
const NoteParentCreateSchema = z.object({
  title: z.string(),
  parentId: z.number(),
  parentType: z.string(),
})

const NoteParentConnectSchema = z.object({
  id: z.number(),
})

const NoteParentUpdateSchema = z.object({
  data: z.object({
    title: z.string().optional(),
    parentId: z.number().optional(),
    parentType: z.string().optional(),
  }),
  where: NoteParentConnectSchema,
})

const NoteParentUpsertSchema = z.object({
  create: NoteParentCreateSchema,
  update: NoteParentUpdateSchema,
  where: NoteParentConnectSchema,
})

// Main Note schemas
export const CreateNoteSchema = z.object({
  noteTemplateId: z.number(),
  title: z.string(),
  published: z.boolean(),
  wordCount: z.number(),
  userId: z.number(),
  parents: z
    .object({
      create: z.array(NoteParentCreateSchema).optional(),
      connect: z.array(NoteParentConnectSchema).optional(),
    })
    .optional(),
})

export const UpdateNoteSchema = z.object({
  id: z.number(),
  noteTemplateId: z.number().optional(),
  title: z.string().optional(),
  published: z.boolean().optional(),
  wordCount: z.number().optional(),
  userId: z.number().optional(),
  parents: z
    .object({
      create: z.array(NoteParentCreateSchema).optional(),
      connect: z.array(NoteParentConnectSchema).optional(),
      disconnect: z.array(NoteParentConnectSchema).optional(),
      update: z.array(NoteParentUpdateSchema).optional(),
      upsert: z.array(NoteParentUpsertSchema).optional(),
    })
    .optional(),
})

export const DeleteNoteSchema = z.object({
  id: z.number(),
})
