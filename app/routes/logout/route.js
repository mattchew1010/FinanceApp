import { redirect } from "@remix-run/node"
import { sessionIdCookie } from "../../cookies.server"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export async function loader({request}){
   const id = await sessionIdCookie.parse(request.headers.get("Cookie"))
   prisma.session.delete({where: {sessionId: id}})
   return redirect("/", {
      headers: {
         "Clear-Site-Data": "cookies"
      }
   })
}