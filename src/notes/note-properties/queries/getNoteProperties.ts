import { paginate } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db, { Prisma } from "db"

interface GetNotePropertiesInput
  extends Pick<Prisma.NotePropertyFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetNotePropertiesInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: noteProperties,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.noteProperty.count({ where }),
      query: (paginateArgs) => db.noteProperty.findMany({ ...paginateArgs, where, orderBy }),
    })

    return {
      noteProperties,
      nextPage,
      hasMore,
      count,
    }
  }
)
