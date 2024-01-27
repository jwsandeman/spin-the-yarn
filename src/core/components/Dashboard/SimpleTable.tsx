import React from "react"

type Props = {}

export const SimpleTable = (props: Props) => {
  return (
    <section className="card col-span-12 overflow-hidden bg-base-100 shadow-sm xl:col-span-6">
      <div className="card-body grow-0">
        <h2 className="card-title">
          <a className="link-hover link">Transactions</a>
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <tbody>
            <tr>
              <td>Cy Ganderton</td>
              <td>Feb 2nd</td>
              <td>
                <svg
                  data-src="https://unpkg.com/heroicons/20/solid/arrow-up-right.svg"
                  className="inline-block h-5 w-5 text-success"
                ></svg>
                180 USD
              </td>
            </tr>
            <tr>
              <td>Hart Hagerty</td>
              <td>Sep 2nd</td>
              <td>
                <svg
                  data-src="https://unpkg.com/heroicons/20/solid/arrow-up-right.svg"
                  className="inline-block h-5 w-5 text-success"
                ></svg>
                250 USD
              </td>
            </tr>
            <tr>
              <td>Jim Hagerty</td>
              <td>Sep 2nd</td>
              <td>
                <svg
                  data-src="https://unpkg.com/heroicons/20/solid/arrow-up-right.svg"
                  className="inline-block h-5 w-5 text-success"
                ></svg>
                250 USD
              </td>
            </tr>
            <tr>
              <td>Hart Hagerty</td>
              <td>Sep 2nd</td>
              <td>
                <svg
                  data-src="https://unpkg.com/heroicons/20/solid/arrow-down-right.svg"
                  className="inline-block h-5 w-5 text-error"
                ></svg>
                250 USD
              </td>
            </tr>
            <tr>
              <td>Hart Hagerty</td>
              <td>Sep 2nd</td>
              <td>
                <svg
                  data-src="https://unpkg.com/heroicons/20/solid/arrow-down-right.svg"
                  className="inline-block h-5 w-5 text-error"
                ></svg>
                250 USD
              </td>
            </tr>
            <tr>
              <td>Brice Swyre</td>
              <td>Jul 2nd</td>
              <td>
                <svg
                  data-src="https://unpkg.com/heroicons/20/solid/arrow-up-right.svg"
                  className="inline-block h-5 w-5 text-success"
                ></svg>
                320 USD
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
