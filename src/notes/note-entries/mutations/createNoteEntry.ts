import { resolver } from "@blitzjs/rpc"
import db from "db"
import { CreateNoteEntrySchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(CreateNoteEntrySchema),
  resolver.authorize(),
  async (input) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const noteEntry = await db.noteEntry.create({ data: input })

    return noteEntry
  }
)
