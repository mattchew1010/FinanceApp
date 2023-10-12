import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  useLoaderData
} from "@remix-run/react";
import Navbar from "./navbar";
import stylesheet from "./tailwind.css";
import {json, redirect} from "@remix-run/node"
export function links(){
    return [{ rel: "stylesheet", href: stylesheet }]
}
import { sessionIdCookie } from "./cookies.server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function loader({request}){
  const header = request.headers.get("Cookie");
  const sessionId = await sessionIdCookie.parse(header)
  console.log(sessionId)
  if (typeof(sessionId) === "string" && sessionId.match(/[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}|[0-9a-f]{12}4[0-9a-f]{19}/)){
    const session = await prisma.session.findUnique({
      where: {
        sessionId: sessionId
      }
    })
    if (session) {
      return json({sessionId: session.sessionId})
    }else {
      return null
    }
  }
}
export default function App() {
  return (
    <html>
      <head>
        <link
          rel="icon"
          href="data:image/x-icon;base64,AA"
        />
        <Meta />
        <Links />
      </head>
      <body className="bg-neutral-900">
        <Navbar />
        <Outlet />

        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}