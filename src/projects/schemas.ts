import { z } from "zod"
import { Status } from "@prisma/client"

const StatusEnum = z.union(Object.values(Status).map((value) => z.literal(value as string)) as any)

export const CreateProjectSchema = z.object({
  userId: z.number(),
  title: z.string(),
  published: z.boolean(),
  wordCount: z.number(),
  id: z.number(),
  status: StatusEnum,
  // template: __fieldName__: z.__zodType__(),
})
export const UpdateProjectSchema = z.object({
  userId: z.number(),
  title: z.string(),
  published: z.boolean(),
  wordCount: z.number(),
  id: z.number(),
  status: StatusEnum,
  // template: __fieldName__: z.__zodType__(),
})

export const DeleteProjectSchema = z.object({
  id: z.number(),
})
