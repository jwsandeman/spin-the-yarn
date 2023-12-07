import React from "react"

export const Dashboard = ({ children }) => {
  return (
    // <!-- drawer -->
    // <body className="drawer min-h-screen bg-base-300 lg:drawer-open">
    // {/* <input id="my-drawer" type="checkbox" className="drawer-toggle" /> */}
    // {/* <!-- content --> */}
    // <main className="drawer-content">
    // <div className="grid grid-cols-12 grid-rows-[min-content] gap-y-12 p-4 lg:gap-x-12 lg:p-10">
    <>
      <div className="stats stats-vertical h-auto m-4 col-span-12 w-full rounded-2xl justify-center items-center shadow-sm xl:stats-horizontal">
        {/* <span className="text-neutral">Dashboard</span> */}
        <span className="stat text-neutral">{children}</span>
      </div>
      {/* <!-- stats --> */}
      <section className="stats stats-vertical col-span-12 w-full shadow-sm xl:stats-horizontal">
        <div className="stat">
          <div className="stat-title">Total Page Views</div>
          <div className="stat-value">89,400</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-title">Total Page Views</div>
          <div className="stat-value">89,400</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-title">Total Page Views</div>
          <div className="stat-value">89,400</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-title">Total Page Views</div>
          <div className="stat-value">89,400</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
      </section>
      {/* <!-- /stats --> */}
      {/* <!-- card --> */}
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
      {/* <!-- /card --> */}
      {/* <!-- card --> */}
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
      {/* <!-- /card --> */}
      {/* <!-- card --> */}
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
      {/* <!-- /card --> */}
      {/* <!-- card --> */}
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
      {/* <!-- /card --> */}
      {/* <!-- card --> */}
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
      {/* <!-- /card --> */}
      {/* <!-- header --> */}
      <header className="col-span-12 flex items-center gap-2 lg:gap-4">
        <div className="grow">
          <h1 className="font-light lg:text-2xl">Forms and inputs</h1>
        </div>
      </header>
      {/* <!-- /header --> */}
      {/* <!-- card --> */}
      <section className="col-span-12 xl:col-span-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product name</span>
          </label>
          <input type="text" placeholder="Type here" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <select className="select select-bordered">
            <option disabled selected>
              Pick
            </option>
            <option>T-shirts</option>
            <option>Dresses</option>
            <option>Hats</option>
            <option>Accessories</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Size (cm)</span>
          </label>
          <div className="flex items-center gap-2">
            <input type="text" placeholder="Width" className="input input-bordered w-1/2" />
            ×
            <input type="text" placeholder="Height" className="input input-bordered w-1/2" />
          </div>
        </div>
        <hr className="my-6 border-t-2 border-base-content/5" />
        <div className="form-control">
          <div className="label justify-start gap-2">
            <svg
              data-src="https://unpkg.com/heroicons/20/solid/eye.svg"
              className="h-4 w-4 text-base-content/30"
            ></svg>
            <span className="label-text text-xs font-bold text-base-content/50">
              Choose product visibility
            </span>
          </div>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Visible only for managers</span>
            <input name="visibility" type="radio" className="radio radio-sm" checked />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Visible for all users</span>
            <input name="visibility" type="radio" className="radio radio-sm" checked />
          </label>
        </div>
      </section>
      {/* <!-- /card --> */}
      {/* <!-- card --> */}
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
      {/* <!-- /card --> */}
      {/* <!-- card --> */}
      <section className="card col-span-12 bg-base-100 shadow-sm xl:col-span-3">
        <div className="p-6 pb-0 text-center text-xs font-bold text-base-content/60">
          Recent events
        </div>
        <ul className="menu">
          <li>
            <a className="gap-4">
              <div className="avatar">
                <div className="w-6 rounded-full">
                  <img src="https://picsum.photos/80/80?6" />
                </div>
              </div>
              <span className="text-xs">
                <b>New User</b>
                <br />2 minutes ago
              </span>
            </a>
          </li>
          <li>
            <a className="gap-4">
              <div className="avatar">
                <div className="w-6 rounded-full">
                  <img src="https://picsum.photos/80/80?7" />
                </div>
              </div>
              <span className="text-xs">
                <b>New product added</b>
                <br />1 hour ago
              </span>
            </a>
          </li>
          <li>
            <a className="gap-4">
              <div className="avatar">
                <div className="w-6 rounded-full">
                  <img src="https://picsum.photos/80/80?8" />
                </div>
              </div>
              <span className="text-xs">
                <b>Database update</b>
                <br />1 hour ago
              </span>
            </a>
          </li>
          <li>
            <a className="gap-4">
              <div className="avatar">
                <div className="w-6 rounded-full">
                  <img src="https://picsum.photos/80/80?9" />
                </div>
              </div>
              <span className="text-xs">
                <b>Newsletter sent</b>
                <br />2 hour ago
              </span>
            </a>
          </li>
          <li>
            <a className="gap-4">
              <div className="avatar">
                <div className="w-6 rounded-full">
                  <img src="https://picsum.photos/80/80?10" />
                </div>
              </div>
              <span className="text-xs">
                <b>New User</b>
                <br />2 hours ago
              </span>
            </a>
          </li>
          <li>
            <a className="gap-4">
              <div className="avatar">
                <div className="w-6 rounded-full">
                  <img src="https://picsum.photos/80/80?11" />
                </div>
              </div>
              <span className="text-xs">
                <b>New product added</b>
                <br />
                yesterday
              </span>
            </a>
          </li>
          <li>
            <a className="gap-4">
              <div className="avatar">
                <div className="w-6 rounded-full">
                  <img src="https://picsum.photos/80/80?12" />
                </div>
              </div>
              <span className="text-xs">
                <b>New product added</b>
                <br />
                yesterday
              </span>
            </a>
          </li>
        </ul>
      </section>
      {/* <!-- /card --> */}
      {/* <!-- header --> */}
      <header className="col-span-12 flex items-center gap-2 lg:gap-4">
        <div className="grow">
          <h1 className="font-light lg:text-2xl">Form sections</h1>
        </div>
      </header>
      {/* <!-- /header --> */}
      {/* <!-- card --> */}
      <section className="col-span-12 xl:col-span-4">
        <label className="label">
          <span className="label-text">Product management</span>
        </label>
        <ul className="flex flex-col gap-4 p-1">
          <li className="flex items-start gap-4">
            <img
              className="h-14 w-14 shrink-0 rounded-btn"
              width="56"
              height="56"
              src="https://picsum.photos/80/80?id=1"
              alt="Product"
            />
            <div className="flex grow flex-col gap-1">
              <div className="text-sm">Portable fidget spinner</div>
              <div className="text-xs text-base-content/50">Space Gray</div>
              <div className="font-mono text-xs text-base-content/50">$299</div>
            </div>
            <div className="join justify-self-end bg-base-100">
              <button className="btn btn-ghost join-item btn-xs">–</button>
              <input className="input join-item input-ghost input-xs w-10 text-center" value="1" />
              <button className="btn btn-ghost join-item btn-xs">+</button>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <img
              className="h-14 w-14 shrink-0 rounded-btn"
              width="56"
              height="56"
              src="https://picsum.photos/80/80?id=2"
              alt="Product"
            />
            <div className="flex grow flex-col gap-1">
              <div className="text-sm">Wooden VR holder</div>
              <div className="text-xs text-base-content/50">Casual Red</div>
              <div className="font-mono text-xs text-base-content/50">$199</div>
            </div>
            <div className="join justify-self-end bg-base-100">
              <button className="btn btn-ghost join-item btn-xs">–</button>
              <input className="input join-item input-ghost input-xs w-10 text-center" value="1" />
              <button className="btn btn-ghost join-item btn-xs">+</button>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <img
              className="h-14 w-14 shrink-0 rounded-btn"
              width="56"
              height="56"
              src="https://picsum.photos/80/80?id=3"
              alt="Product"
            />
            <div className="flex grow flex-col gap-1">
              <div className="text-sm">Portable keychain</div>
              <div className="text-xs text-base-content/50">Normal Yellow</div>
              <div className="font-mono text-xs text-base-content/50">$299</div>
            </div>
            <div className="join justify-self-end bg-base-100">
              <button className="btn btn-ghost join-item btn-xs">–</button>
              <input className="input join-item input-ghost input-xs w-10 text-center" value="1" />
              <button className="btn btn-ghost join-item btn-xs">+</button>
            </div>
          </li>
        </ul>
      </section>
      {/* <!-- /card --> */}
      {/* <!-- card --> */}
      <section className="col-span-12 xl:col-span-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product name</span>
          </label>
          <input type="text" placeholder="Type here" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <select className="select select-bordered">
            <option disabled selected>
              Pick
            </option>
            <option>T-shirts</option>
            <option>Dresses</option>
            <option>Hats</option>
            <option>Accessories</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Public</span>
            <input type="checkbox" className="toggle toggle-sm" checked />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Featured product</span>
            <input type="checkbox" className="toggle toggle-sm" checked />
          </label>
        </div>
      </section>
      {/* <!-- /card --> */}
      {/* <!-- card --> */}
      <section className="col-span-12 xl:col-span-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Size (cm)</span>
          </label>
          <div className="flex items-center gap-2">
            <input type="text" placeholder="Width" className="input input-bordered w-1/2" />
            ×
            <input type="text" placeholder="Height" className="input input-bordered w-1/2" />
          </div>
        </div>
        <div className="form-control">
          <div className="py-4 text-xs text-base-content/70">
            Set a audience range for this product.
            <br />
            This is optional
          </div>
          <input type="range" min="0" max="100" value="25" className="range range-xs" step="25" />
          <div className="flex w-full justify-between px-2 py-2 text-xs">
            <span>0</span>
            <span>25</span>
            <span>50</span>
            <span>75</span>
            <span>100</span>
          </div>
        </div>
        <div className="form-control">
          <div className="flex gap-4 py-4">
            <button className="btn btn-outline">Save draft</button>
            <button className="btn btn-primary grow">Save and publish</button>
          </div>
        </div>
      </section>
      {/* <!-- /card --> */}
      {/* <!-- header --> */}
      <header className="col-span-12 flex items-center gap-2 lg:gap-4">
        <div className="grow">
          <h1 className="font-light lg:text-2xl">Payment information</h1>
        </div>
      </header>
      {/* <!-- /header --> */}
      {/* <!-- card --> */}
      <section className="card col-span-12 bg-base-100 xl:col-span-5">
        <form className="card-body" action="">
          <div className="alert alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Your payment was successful</span>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Card Number</span>
            </label>
            <input
              type="text"
              className="input input-bordered font-mono"
              pattern="\d{16}"
              title="16 digits card number"
              minLength={16}
              maxLength={16}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">CVV</span>
              </label>
              <input
                type="text"
                placeholder="XXX"
                pattern="\d{3,4}"
                title="3 or 4 digits CVV number"
                minLength={3}
                maxLength={4}
                required
                className="input input-bordered text-center font-mono"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Expiration date</span>
              </label>
              <div className="input input-bordered grid grid-cols-2 gap-2">
                <input
                  placeholder="MM"
                  type="text"
                  pattern="\d{2}"
                  title="2 digits month number"
                  minLength={2}
                  maxLength={2}
                  className="text-center font-mono"
                  required
                />
                <input
                  placeholder="YY"
                  type="text"
                  pattern="\d{2}"
                  title="2 digits year number"
                  minLength={2}
                  maxLength={2}
                  className="text-center font-mono"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" className="input input-bordered" />
          </div>
          <div className="form-control mt-4 gap-4">
            <label className="flex cursor-pointer gap-4">
              <input type="checkbox" className="checkbox checkbox-sm" checked />
              <span className="label-text">Save my card information for future payments</span>
            </label>
            <label className="flex cursor-pointer gap-4">
              <input required type="checkbox" className="checkbox checkbox-sm" checked />
              <span className="label-text">Accept terms of use and privac policy</span>
            </label>
          </div>
          <div className="form-control">
            <div className="flex items-end py-4">
              <button className="btn btn-primary grow">Confirm Payment</button>
            </div>
          </div>
        </form>
      </section>
      {/* <!-- /card --> */}
      {/* <!-- card --> */}
      <section className="card col-span-12 overflow-hidden bg-base-100 shadow-sm xl:col-span-7">
        <div className="card-body grow-0">
          <div className="flex justify-between gap-2">
            <h2 className="card-title grow">
              <a className="link-hover link">Recent user transactions</a>
            </h2>
            <button className="btn btn-sm">See all users</button>
            <button className="btn btn-sm">Settings</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <tbody>
              <tr>
                <td className="w-0">
                  <input type="checkbox" className="checkbox" />
                </td>
                <td>
                  <div className="flex items-center gap-4">
                    <div className="avatar">
                      <div className="mask mask-squircle h-10 w-10">
                        <img
                          src="https://picsum.photos/80/80?1"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-bold">Hart Hagerty</div>
                      <div className="text-xs opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>Feb 2nd</td>
                <td>
                  <svg
                    data-src="https://unpkg.com/heroicons/20/solid/arrow-up-right.svg"
                    className="inline-block h-5 w-5 text-success"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-id="svg-loader_3"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  180 USD
                </td>
              </tr>
              <tr>
                <td className="w-0">
                  <input type="checkbox" className="checkbox" />
                </td>
                <td>
                  <div className="flex items-center gap-4">
                    <div className="avatar">
                      <div className="mask mask-squircle h-10 w-10">
                        <img
                          src="https://picsum.photos/80/80?2"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-bold">Brice Swyre</div>
                      <div className="text-xs opacity-50">China</div>
                    </div>
                  </div>
                </td>
                <td>Sep 2nd</td>
                <td>
                  <svg
                    data-src="https://unpkg.com/heroicons/20/solid/arrow-up-right.svg"
                    className="inline-block h-5 w-5 text-success"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-id="svg-loader_4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  250 USD
                </td>
              </tr>
              <tr>
                <td className="w-0">
                  <input type="checkbox" className="checkbox" />
                </td>
                <td>
                  <div className="flex items-center gap-4">
                    <div className="avatar">
                      <div className="mask mask-squircle h-10 w-10">
                        <img
                          src="https://picsum.photos/80/80?3"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-bold">Marjy Ferencz</div>
                      <div className="text-xs opacity-50">Russia</div>
                    </div>
                  </div>
                </td>
                <td>Sep 2nd</td>
                <td>
                  <svg
                    data-src="https://unpkg.com/heroicons/20/solid/arrow-up-right.svg"
                    className="inline-block h-5 w-5 text-success"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-id="svg-loader_5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  250 USD
                </td>
              </tr>
              <tr>
                <td className="w-0">
                  <input type="checkbox" className="checkbox" />
                </td>
                <td>
                  <div className="flex items-center gap-4">
                    <div className="avatar">
                      <div className="mask mask-squircle h-10 w-10">
                        <img
                          src="https://picsum.photos/80/80?4"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-bold">Yancy Tear</div>
                      <div className="text-xs opacity-50">Brazil</div>
                    </div>
                  </div>
                </td>
                <td>Sep 2nd</td>
                <td>
                  <svg
                    data-src="https://unpkg.com/heroicons/20/solid/arrow-down-right.svg"
                    className="inline-block h-5 w-5 text-error"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-id="svg-loader_6"
                  >
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06l7.22 7.22H6.75a.75.75 0 000 1.5h7.5a.747.747 0 00.75-.75v-7.5a.75.75 0 00-1.5 0v5.69L6.28 5.22z"></path>
                  </svg>
                  250 USD
                </td>
              </tr>
              <tr>
                <td className="w-0">
                  <input type="checkbox" className="checkbox" />
                </td>
                <td>
                  <div className="flex items-center gap-4">
                    <div className="avatar">
                      <div className="mask mask-squircle h-10 w-10">
                        <img
                          src="https://picsum.photos/80/80?5"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-bold">Marjy Ferencz</div>
                      <div className="text-xs opacity-50">Russia</div>
                    </div>
                  </div>
                </td>
                <td>Sep 2nd</td>
                <td>
                  <svg
                    data-src="https://unpkg.com/heroicons/20/solid/arrow-down-right.svg"
                    className="inline-block h-5 w-5 text-error"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-id="svg-loader_7"
                  >
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06l7.22 7.22H6.75a.75.75 0 000 1.5h7.5a.747.747 0 00.75-.75v-7.5a.75.75 0 00-1.5 0v5.69L6.28 5.22z"></path>
                  </svg>
                  250 USD
                </td>
              </tr>
              <tr>
                <td className="w-0">
                  <input type="checkbox" className="checkbox" />
                </td>
                <td>
                  <div className="flex items-center gap-4">
                    <div className="avatar">
                      <div className="mask mask-squircle h-10 w-10">
                        <img
                          src="https://picsum.photos/80/80?6"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-bold">Hart Hagerty</div>
                      <div className="text-xs opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>Jul 2nd</td>
                <td>
                  <svg
                    data-src="https://unpkg.com/heroicons/20/solid/arrow-up-right.svg"
                    className="inline-block h-5 w-5 text-success"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-id="svg-loader_8"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  320 USD
                </td>
              </tr>

              <tr>
                <td className="w-0">
                  <input type="checkbox" className="checkbox" />
                </td>
                <td>
                  <div className="flex items-center gap-4">
                    <div className="avatar">
                      <div className="mask mask-squircle h-10 w-10">
                        <img
                          src="https://picsum.photos/80/80?1"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-bold">Hart Hagerty</div>
                      <div className="text-xs opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>Feb 2nd</td>
                <td>
                  <svg
                    data-src="https://unpkg.com/heroicons/20/solid/arrow-up-right.svg"
                    className="inline-block h-5 w-5 text-success"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-id="svg-loader_3"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  180 USD
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}
