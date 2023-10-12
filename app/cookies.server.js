import { createCookie } from "@remix-run/node";

export const sessionIdCookie = createCookie("sessionId", {
   maxAge: 10000,
   secure: true, 
})