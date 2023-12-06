import Table from './table'

import { redirect } from "@remix-run/node"
import { sessionIdCookie } from "../../cookies.server"
import { PrismaClient } from "@prisma/client"
import { useLoaderData } from "@remix-run/react"
const prisma = new PrismaClient()
const itemsPerPage = 10

export async function loader({request}) {
    const page = 1 //Number(request.params.page) || 1
    const sessionCookie = await sessionIdCookie.parse(request.headers.get("Cookie")) || null
    if (sessionCookie == null) {
        return redirect("/")
    }
    console.log("sessionCookie", sessionCookie)
    const tipItems = await prisma.session.findUnique({
        where: {
            sessionId: sessionCookie
        }
    }).user().tips({
        take: itemsPerPage,
        skip: (page - 1) * itemsPerPage,
        orderBy: {
            date: "desc"
        }
    })
    const tipCount = await prisma.session.findUnique({
        where: {
            sessionId: sessionCookie
        }
    }).user({select: {_count: {select: {tips: true}}}})
    console.log("tips",tipItems, tipCount)
    return {list: tipItems, count: tipCount._count.tips}
}

export default function dashboard() {
   return (
   <div class="grid grid-cols-1 gap-4 m-7">
        <Table />
   </div>
   )    
}