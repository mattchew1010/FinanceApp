import Table from './table'

import { PrismaClient } from "@prisma/client"
import {cookies} from "next/headers"

const prisma = new PrismaClient()
const itemsPerPage = 10

export async function getTips() {
    const page = 1 //Number(request.params.page) || 1
    const sessionCookie = cookies().get("session")
    if (sessionCookie == null) {
        return redirect("/")
    }
    console.log("sessionCookie", sessionCookie)
    const tipItems = await prisma.session.findUnique({
        where: {
            sessionId: sessionCookie.value
        }
    }).user().tips({
        take: itemsPerPage,
        skip: (page - 1) * itemsPerPage,
        orderBy: {
            date: "desc"
        },
        select: {
            date: true,
            hoursWorked: true,
            amount: true
        }
    })
    const tipCount = await prisma.session.findUnique({
        where: {
            sessionId: sessionCookie.value
        }
    }).user({select: {_count: {select: {tips: true}}}})
    console.log("tips",tipItems, tipCount)
    return {list: tipItems, count: tipCount._count.tips}
}

export default async function dashboard() {
    const rows = await getTips()
   return (
   <div class="grid grid-cols-1 gap-4 m-7">
        <Table tipRows={rows}/>
   </div>
   )    
}