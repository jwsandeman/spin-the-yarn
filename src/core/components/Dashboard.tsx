import React from "react"

export const Dashboard = ({ children }) => {
  return (
    <div className="h-auto m-5 p-5 rounded-2xl border border-dashed border-gray-300/40 justify-center items-center">
      {/* <span className="text-neutral">Dashboard</span> */}
      <span className="text-neutral">{children}</span>
    </div>
  )
}
