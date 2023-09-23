import { resolver } from "@blitzjs/rpc"
import db from "db"
import { DeleteNotePropertySchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(DeleteNotePropertySchema),
  resolver.authorize(),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const noteProperty = await db.noteProperty.deleteMany({ where: { id } })

    return noteProperty
  }
)
