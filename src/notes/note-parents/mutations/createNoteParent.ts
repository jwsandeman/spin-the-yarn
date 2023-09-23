import { resolver } from "@blitzjs/rpc"
import db from "db"
import { CreateNoteParentSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(CreateNoteParentSchema),
  resolver.authorize(),
  async (input) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const noteParent = await db.noteParent.create({ data: input })

    return noteParent
  }
)
