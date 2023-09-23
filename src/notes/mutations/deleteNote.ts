import { resolver } from "@blitzjs/rpc"
import { NotFoundError, AuthenticationError } from "blitz"
import db from "db"
import { DeleteNoteSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(DeleteNoteSchema),
  resolver.authorize(),
  async ({ id }, ctx) => {
    const userId = ctx.session.userId

    const note = await db.note.findFirst({ where: { id, userId } })

    if (!note) throw new NotFoundError()
    if (note.userId !== userId) throw new AuthenticationError()

    await db.note.delete({ where: { id } })

    return note
  }
)
