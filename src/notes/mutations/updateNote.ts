import { resolver } from "@blitzjs/rpc"
import { NotFoundError, AuthenticationError } from "blitz"
import db from "db"
import { UpdateNoteSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(UpdateNoteSchema),
  resolver.authorize(),
  async ({ id, ...data }, ctx) => {
    const userId = ctx.session.userId

    const note = await db.note.findFirst({ where: { id, userId } })

    if (!note) throw new NotFoundError()
    if (note.userId !== userId) throw new AuthenticationError()

    return await db.note.update({
      where: { id },
      data: {
        ...data,
        parents: {
          create: data.parents?.create,
          connect: data.parents?.connect,
          disconnect: data.parents?.disconnect,
          update: data.parents?.update,
          upsert: data.parents?.upsert,
        },
      },
    })
  }
)
