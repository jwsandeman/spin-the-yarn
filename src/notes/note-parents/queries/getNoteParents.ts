import { paginate } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db, { Prisma } from "db"

interface GetNoteParentsInput
  extends Pick<Prisma.NoteParentFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetNoteParentsInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: noteParents,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.noteParent.count({ where }),
      query: (paginateArgs) => db.noteParent.findMany({ ...paginateArgs, where, orderBy }),
    })

    return {
      noteParents,
      nextPage,
      hasMore,
      count,
    }
  }
)
