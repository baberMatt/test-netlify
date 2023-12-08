import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div>
        <div className="w-full h-[5vh] flex justify-end items-center bg-indigo-900 fixed top-0 left-0 gap-4 px-12">
          <Link to="/" className="text-white text-2xl font-bold text-center">Home</Link>
          <Link to="/convex" className="text-white text-2xl font-bold text-center">Convex</Link>
          <Link to="/fetch" className="text-white text-2xl font-bold text-center">Fetch</Link>
        </div>
        <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
