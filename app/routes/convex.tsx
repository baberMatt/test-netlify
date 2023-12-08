import React from 'react'
import { ConvexHttpClient } from 'convex/browser'
import { LoaderFunctionArgs } from '@vercel/remix'
import { useLoaderData } from '@remix-run/react'
import { api } from 'convex/_generated/api'
import { json } from '@vercel/remix'
import {
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    const convex = new ConvexHttpClient(process.env.CONVEX_URL || '')
    const tasks = await convex.query(api.task.get)
    console.log("tasks: ", tasks);
    return json({ tasks })
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return json({ error: "Failed to fetch tasks" }, { status: 500 });
  }
}


export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="flex h-screen justify-center items-center">
        <div className='bg-red-100 p-4 border-2 rounded border-red-700'>
          <h1>
            {error.status} {error.statusText}
          </h1>
          <p>{error.data}</p>
        </div>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div className="flex h-screen justify-center items-center">
        <div className='bg-red-100 p-4 border-2 rounded border-red-700'>
          <h1>Error</h1>
          <p>{error.message}</p>
          <p>The stack trace is:</p>
          <pre>{error.stack}</pre>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex h-screen justify-center items-center">
        <div className='bg-red-100 p-4 border-2 rounded border-red-700'>
          <h1>Unknown Error</h1>
        </div>
      </div>
    );
  }
}
const Convex = () => {
  const { tasks } = useLoaderData<any>();

  console.log(tasks)
  return (
    <div className='flex flex-col text-center w-screen h-screen justify-center items-center bg-indigo-100'>
      <h1 className='font-bold text-2xl'>Tasks from Convex</h1>
      <ul>
        {tasks.map((task: any) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>

  )
}

export default Convex