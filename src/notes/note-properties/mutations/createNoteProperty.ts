import { resolver } from "@blitzjs/rpc"
import db from "db"
import { CreateNotePropertySchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(CreateNotePropertySchema),
  resolver.authorize(),
  async (input) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const noteProperty = await db.noteProperty.create({ data: input })

    return noteProperty
  }
)
