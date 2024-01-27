import React from "react"

type Props = {}

export const FormSections = (props: Props) => {
  return (
    <>
      <header className="col-span-12 flex items-center gap-2 lg:gap-4">
        <div className="grow">
          <h1 className="font-light lg:text-2xl">Forms and inputs</h1>
        </div>
      </header>
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
    </>
  )
}
