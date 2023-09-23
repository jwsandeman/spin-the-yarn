import { resolver } from "@blitzjs/rpc"
import db from "db"
import { DeleteNoteEntrySchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(DeleteNoteEntrySchema),
  resolver.authorize(),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const noteEntry = await db.noteEntry.deleteMany({ where: { id } })

    return noteEntry
  }
)
