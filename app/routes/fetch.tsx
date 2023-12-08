import { useLoaderData } from '@remix-run/react'
import { LoaderFunctionArgs, json } from '@vercel/remix'


export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    if (usersResponse.ok) {
      const users = await usersResponse.json();
      console.log("users: ", users); 
      return json({ users })
    } else {
      console.error('Failed to fetch data');
    }
  } catch (error) {
    console.error('An error occurred while fetching data:', error);
  }
}

const Fetch = () => {
  const { users } = useLoaderData<any>();

  console.log(users)
  return (
    <div className='flex flex-col text-center w-screen h-screen justify-center items-center bg-indigo-100'>
      <h1 className='font-bold text-2xl'>Users from fetch</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>

  )
}

export default Fetch