import React from "react"

type Props = {}

export const GraphCards = (props: Props) => {
  return (
    <>
      <section className="card col-span-12 bg-primary text-primary-content shadow-sm xl:col-span-6">
        <div className="card-body pb-0">
          <h2 className="card-title">21,500 USD</h2>
          <a className="link-hover link text-xs">Revenue report →</a>
        </div>
        {/* <tc-column
              className="h-full w-full p-4 pt-0 [--shape-color:oklch(var(--pc))]"
              values="[12,10,12,4,13,16,14,10,12,11,17,18,16,17,20,14,15,13,12,14]"
              min="0"
              shape-radius="4"
              shape-gap="4"
            ></tc-column> */}
      </section>
      <section className="card col-span-12 bg-base-100 shadow-sm xl:col-span-4">
        <div className="card-body">
          <h2 className="card-title">Sources</h2>
          <div className="flex items-center gap-10">
            <div className="grow">
              <div className="flex items-center gap-2">
                <span className="badge badge-xs bg-[#19D6BF]"></span>
                Direct
              </div>
              <div className="flex items-center gap-2">
                <span className="badge badge-xs bg-[#A838FF]"></span>
                Social
              </div>
              <div className="flex items-center gap-2">
                <span className="badge badge-xs bg-[#3C37FF]"></span>
                Search
              </div>
              <div className="flex items-center gap-2">
                <span className="badge badge-xs bg-[#FFBD3C]"></span>
                Email
              </div>
            </div>
            {/* <tc-pie
                className="h-32 w-32 shrink-0 [--shape-color-1:#A838FF] [--shape-color-2:#19D6BF] [--shape-color-3:#3C37FF] [--shape-color-4:#FFBD3C]"
                values="[35,68,22,16]"
                shape-size="30"
                shape-gap="6"
              ></tc-pie> */}
          </div>
        </div>
      </section>
      <section className="card col-span-12 bg-base-100 shadow-sm xl:col-span-4">
        <div className="card-body pb-0">
          <h2 className="card-title">19,000</h2>
          <p>Downloads</p>
        </div>
        {/* <tc-line
            className="h-full w-full rounded-box [--area-opacity:.2] [--shape-color:#19D6BF]"
            values="[6,5,2,11,13,16,14,14,14,15,18,16,18,15,19,16,20,18,12,14]"
            min="0"
          ></tc-line> */}
      </section>
      <section className="card col-span-12 bg-base-100 shadow-sm xl:col-span-4">
        <div className="card-body pb-0">
          <h2 className="card-title">32,800</h2>
          <p>Unique visitors</p>
        </div>
        {/* <tc-line
            className="h-full w-full rounded-box [--area-opacity:.2] [--shape-color:#A838FF]"
            values="[12,10,12,4,13,16,14,10,12,11,17,18,16,17,20,14,15,13,12,14]"
            min="0"
          ></tc-line> */}
      </section>
      <section className="card col-span-12 bg-base-100 shadow-sm xl:col-span-5">
        <div className="card-body pb-0">
          <h2 className="card-title">32,800</h2>
          <p>From 84 countries</p>
        </div>
        <svg
          data-src="https://unpkg.com/@svg-maps/world@1.0.1/world.svg"
          className="m-4 fill-base-content/80"
        />
      </section>
    </>
  )
}
