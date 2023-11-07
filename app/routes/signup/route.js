import { useLoaderData } from "@remix-run/react"
import { redirect } from "@remix-run/node"

const usernameRegex = /^[a-z0-9_-]{3,15}$/
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
export async function action({request}) {
   //validate request
   //create user in db if valid and doesn't exist
   //return success or error and redirect to dashboard (logged in)
   const data = await request.formData()
   const username = data.get("username")
   const password = data.get("password")

   if (typeof(username) === "string" && username.match(usernameRegex)){
      console.log("username is valid")
      if (typeof(password) === "string" && password.match(passwordRegex)){
         console.log("password is valid")
         return redirect("/dashboard")
      }else {
         console.log("password is invalid")
         return false
      }
   }else {
      console.log("username is invalid")
      return false
   }
}

export default function App() {
   const invalidRequestResponse = useLoaderData()
   //invalid request info bar if false
   return (
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full rounded-lg shadow border sm:max-w-md xl:p-0 bg-neutral-800 border-neutral-700 space-y-5">
          <h1 className="mx-6 mt-2 text-xl font-bold leading-tight tracking-tight md:text-2xl text-gray-300">
            Create An Account
         </h1>
         <form className="mx-6 pb-6 space-y-5" action="" method="POST">
            <input type="username" name="username" id="username" className="my-0 bg-transparent border-0 outline-none text-white ring-2 ring-inset ring-indigo-600 rounded-md block w-full p-2.5" placeholder="Username" required=""/>
            <input type="password" name="password" id="password" className="my-0 bg-transparent border-0 outline-none text-white ring-2 ring-inset ring-indigo-600 rounded-md block w-full p-2.5" placeholder="Password" required=""/>
            <button type="submit" className="my-0 border-0 outline-none text-white bg-indigo-600 rounded-md block w-full p-2.5">Submit</button>
         </form>
      </div>
  </div>
   )
}