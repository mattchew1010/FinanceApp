import { Signup } from "./signupModal"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"
import { v4 as uuidv4 } from "uuid"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
const prisma = new PrismaClient()

const usernameRegex = /^[a-z0-9_-]{3,15}$/
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
export async function formSubmit(formData) {
   "use server"
   //validate request
   //create user in db if valid and doesn't exist
   //return success or error and redirect to dashboard (logged in)
   const username = formData.get("username")
   const password = formData.get("password")

   if (typeof(username) === "string" && username.match(usernameRegex)){
      console.log("username is valid")
      if (typeof(password) === "string" && password.match(passwordRegex)){
         const session = await prisma.session.create({
            data: {
               user: {
                  create: {
                     username: username,
                     passwordHash: await bcrypt.hash(password, 10),
                  }
               },
               sessionId: uuidv4()
            }
         })
         cookies().set("session", session.sessionId)
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

   //invalid request info bar if false
   return (
      <Signup submit={formSubmit}/>
   )
}