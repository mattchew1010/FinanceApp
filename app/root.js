import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";
import Navbar from "./navbar";
import stylesheet from "./tailwind.css";
export function links(){
    return [{ rel: "stylesheet", href: stylesheet }]
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