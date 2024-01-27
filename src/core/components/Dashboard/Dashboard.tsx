import React from "react"
import { Stats } from "./Stats"
import { SimpleTable } from "./SimpleTable"
import { GraphCards } from "./GraphCards"
import { FormSections } from "./FormSections"
import { RecentActivity } from "./RecentActivity"
import { List } from "./List"

export const Dashboard = () => {
  return (
    <>
      <Stats />
      <SimpleTable />
      <GraphCards />
      <FormSections />
      <RecentActivity />
      <List type="placeholder" elements={undefined} />
    </>
  )
}
