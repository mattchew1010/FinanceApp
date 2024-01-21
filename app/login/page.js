import Form from "./loginForm"
import {cookies} from "next/headers"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"
import { v4 as uuidv4 } from "uuid"
const prisma = new PrismaClient()

const usernameRegex = /^[a-z0-9_-]{3,15}$/
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
export async function action({formData}) {
   //validate request
   //create user in db if valid and doesn't exist
   //return success or error and redirect to dashboard (logged in)
   const username = formData.get("username")
   const password = formData.get("password")

   if (typeof(username) === "string" && username.match(usernameRegex)){
      console.log("username is valid")
      if (typeof(password) === "string" && password.match(passwordRegex)){
         const user = await prisma.user.findUnique({where: {username: username}})
         if (user && bcrypt.compareSync(password, user.passwordHash)){
            //password is valid
            const session = await prisma.session.create({
               data: {
                  sessionId: uuidv4(),
                  userId: user.id
               }
            })
         cookies.set("session", session.sessionId)
         return redirect("/dashboard")
      }
      }else {
         console.log("password is invalid")
         return false
      }
   }else {
      console.log("username is invalid")
      return false
   }
}
export default function app() {
   
   return (
   <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
         <div className="w-full rounded-lg shadow border sm:max-w-md xl:p-0 bg-neutral-800 border-neutral-700 space-y-5">
            <h1 className="mx-6 mt-2 text-xl font-bold leading-tight tracking-tight md:text-2xl text-gray-300">
               Login
            </h1>
            <Form />
         </div>
   </div>
)
}