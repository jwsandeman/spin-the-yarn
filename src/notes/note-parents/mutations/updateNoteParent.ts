import { resolver } from "@blitzjs/rpc"
import db from "db"
import { UpdateNoteParentSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(UpdateNoteParentSchema),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const noteParent = await db.noteParent.update({ where: { id }, data })

    return noteParent
  }
)
