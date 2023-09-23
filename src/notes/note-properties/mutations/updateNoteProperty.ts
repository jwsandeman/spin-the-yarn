import { resolver } from "@blitzjs/rpc"
import db from "db"
import { UpdateNotePropertySchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(UpdateNotePropertySchema),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const noteProperty = await db.noteProperty.update({ where: { id }, data })

    return noteProperty
  }
)
