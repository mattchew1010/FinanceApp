import Form from "./loginForm"
import {cookies} from "next/headers"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"
import { v4 as uuidv4 } from "uuid"
import { redirect } from "next/navigation"

const prisma = new PrismaClient()

const usernameRegex = /^[a-z0-9_-]{3,15}$/
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/

export async function formSubmit(formData) {
   "use server"
   const username = formData.get("username")
   const password = formData.get("password")
   if (username && password){
      const user = await prisma.user.findUnique({where: {username: username}})
      if (user && bcrypt.compareSync(password, user.passwordHash)){
         //password is valid
         const session = await prisma.session.create({
            data: {
               sessionId: uuidv4(),
               userId: user.id
            }
         })
         cookies().set("session", session.sessionId)
         return redirect("/dashboard")
     }
   }
}
export default function app() {
   
   return (
   <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
         <div className="w-full rounded-lg shadow border sm:max-w-md xl:p-0 bg-neutral-800 border-neutral-700 space-y-5">
            <h1 className="mx-6 mt-2 text-xl font-bold leading-tight tracking-tight md:text-2xl text-gray-300">
               Login
            </h1>
            <Form formSubmit={formSubmit}/>
         </div>
   </div>
)
}