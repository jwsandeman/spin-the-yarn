import { resolver } from "@blitzjs/rpc"
import db from "db"
import { UpdateNoteEntrySchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(UpdateNoteEntrySchema),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const noteEntry = await db.noteEntry.update({ where: { id }, data })

    return noteEntry
  }
)
