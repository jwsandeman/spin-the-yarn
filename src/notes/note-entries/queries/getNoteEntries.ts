import { paginate } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db, { Prisma } from "db"

interface GetNoteEntriesInput
  extends Pick<Prisma.NoteEntryFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetNoteEntriesInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: noteEntries,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.noteEntry.count({ where }),
      query: (paginateArgs) => db.noteEntry.findMany({ ...paginateArgs, where, orderBy }),
    })

    return {
      noteEntries,
      nextPage,
      hasMore,
      count,
    }
  }
)
