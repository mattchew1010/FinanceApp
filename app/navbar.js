import Account from "./components/accountNavbar"
import NoAccount from "./components/noAccountNavbar"
import {cookies} from "next/headers"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export async function LoggedIn() {
   const sessionCookie = cookies().get("session")
   if (!sessionCookie) return { loggedIn: false }
   
   const session = await prisma.session.findUnique({
      where: {
         sessionId: sessionCookie.value
      }
   })
   if (session) {
        return { loggedIn: true}
   }
}
export default function Navbar() {
   const loggedIn = LoggedIn().loggedIn
   return (
    <nav className="bg-backround-secondary">
   <div className="mx-0 px-2 sm:px-6 lg:px-8 bg-background-secondary">
      <div className="relative flex h-16 items-center justify-between">
         <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
         <div className="flex flex-shrink-0 items-center">
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/>
         </div>
         <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
               <a href="/dashboard" className="bg-interactive text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-interactive-hoverstate" aria-current="page">Dashboard</a>
               <a href="#" className="text-gray-300 hover:bg-interactive-secondary-hoverstate hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
               <a href="#" className="text-gray-300 hover:bg-interactive-secondary-hoverstate hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
               <a href="#" className="text-gray-300 hover:bg-interactive-secondary-hoverstate hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a>
            </div>
         </div>
         </div>
         <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {loggedIn === false ? <NoAccount/> : <Account />}
         </div>
      </div>
   </div>
   <div className="bg-accent-primary h-0.5" />
</nav>
   )
}