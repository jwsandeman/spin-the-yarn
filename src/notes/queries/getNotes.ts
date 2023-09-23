import { paginate } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db, { Prisma } from "db"

interface GetNotesInput
  extends Pick<Prisma.NoteFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetNotesInput, ctx) => {
    const userId = ctx.session.userId

    const {
      items: notes,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.note.count({ where: { ...where, userId } }),
      query: (paginateArgs) =>
        db.note.findMany({ ...paginateArgs, where: { ...where, userId }, orderBy }),
    })

    return {
      notes,
      nextPage,
      hasMore,
      count,
    }
  }
)
