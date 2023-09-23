import { resolver } from "@blitzjs/rpc"
import db from "db"
import { CreateNoteSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(CreateNoteSchema),
  resolver.authorize(),
  async (input, ctx) => {
    const userId = ctx.session.userId

    const { parents, ...noteData } = input

    const note = await db.note.create({
      data: {
        ...noteData,
        userId,
        parents: {
          create: parents?.create,
          connect: parents?.connect,
        },
      },
    })

    return note
  }
)
