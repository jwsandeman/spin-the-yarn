import { NotFoundError } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db from "db"
import { z } from "zod"

const GetNote = z.object({
  id: z.number().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(resolver.zod(GetNote), resolver.authorize(), async ({ id }, ctx) => {
  const userId = ctx.session.userId

  const note = await db.note.findFirst({ where: { id, userId } })

  if (!note) throw new NotFoundError()

  return note
})
