import { LabeledTextField } from "src/core/components/LabeledTextField"
import { Form, FORM_ERROR } from "src/core/components/Form"
import signup from "src/auth/mutations/signup"
import { Signup } from "src/auth/schemas"
import { useMutation } from "@blitzjs/rpc"
import Image from "next/image"
import logo from "public/logo.png"

type SignupFormProps = {
  onSuccess?: () => void
}

export const SignupForm = (props: SignupFormProps) => {
  const [signupMutation] = useMutation(signup)
  return (
    // <div className="flex min-w-max">
    //   <h1>Create an Account</h1>

    //   <Form
    //     submitText="Create Account"
    //     schema={Signup}
    //     initialValues={{ email: "", password: "" }}
    //     onSubmit={async (values) => {
    //       try {
    //         await signupMutation(values)
    //         props.onSuccess?.()
    //       } catch (error: any) {
    //         if (error.code === "P2002" && error.meta?.target?.includes("email")) {
    //           // This error comes from Prisma
    //           return { email: "This email is already being used" }
    //         } else {
    //           return { [FORM_ERROR]: error.toString() }
    //         }
    //       }
    //     }}
    //   >
    //     <LabeledTextField name="email" label="Email" placeholder="Email" />
    //     <LabeledTextField name="password" label="Password" placeholder="Password" type="password" />
    //   </Form>

    <div className="flex min-h-screen bg-green-500">
      {/* Left side with image */}
      <div className="w-1/2 relative">
        <Image src={logo} layout="fill" objectFit="cover" alt="Mountain background" />
      </div>
      {/* Right side with form */}
      <div className="w-1/2 flex justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Signup new account</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="form-control">
              <button className="btn btn-outline btn-accent">Login with Google</button>
            </div>
            <div className="flex justify-center">
              <a href="/login" className="link link-accent">
                Login to existing account
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  )
}

export default SignupForm
