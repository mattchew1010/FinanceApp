import { PrismaClient } from "@prisma/client"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
const prisma = new PrismaClient()


export async function GET(){
   const sessionId = cookies().get("session").value
   await prisma.session.delete({
      where: {
         sessionId: sessionId
      }
   })
   return redirect("/")
}