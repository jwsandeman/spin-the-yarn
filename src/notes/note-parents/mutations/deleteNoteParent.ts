import { resolver } from "@blitzjs/rpc"
import db from "db"
import { DeleteNoteParentSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(DeleteNoteParentSchema),
  resolver.authorize(),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const noteParent = await db.noteParent.deleteMany({ where: { id } })

    return noteParent
  }
)
