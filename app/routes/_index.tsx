import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className='flex flex-col text-center w-screen h-screen justify-center items-center bg-indigo-100'>
      <h1 className="font-bold text-3xl">Remix Convex on Vercel Demo</h1>
      <h2 className=" text-2xl">Click on the links above to test results from Convex and fetch</h2>
      <h2 className="font-bold text-2xl mt-12">Expected results</h2>
      <ul className="w-1/2 xl:text-lg">
        <li><strong>Fetch:</strong> Loader function runs and parse request succesfully, sends it to the client and users map</li>
        <li className="mt-2"><strong>Convex:</strong> Loader function runs and initialize <a className="font-bold text-indigo-800" href="https://github.com/get-convex/convex-js/blob/32ff1dc1190e35223bda44c41f51a237960da3e0/src/browser/http_client.ts#L26">Convex HTTP Client</a>, 
        client makes successful query which should appear in server logs. Unknown error is thrown which the catch misses. Server logs the following error
        </li>

      </ul>
      <p className="border-2 text-sm mt-6 w-1/2 rounded-lg border-red-700 bg-red-100 p-4">{`Unhandled Promise Rejection 	{"errorType":"Runtime.UnhandledPromiseRejection","errorMessage":"TypeError: First parameter has member 'readable' that is not a ReadableStream.","reason":{"errorType":"TypeError","errorMessage":"First parameter has member 'readable' that is not a ReadableStream.","stack":["TypeError: First parameter has member 'readable' that is not a ReadableStream.","    at assertReadableStream (/var/task/node_modules/web-streams-polyfill/dist/ponyfill.js:362:19)","    at convertReadableWritablePair (/var/task/node_modules/web-streams-polyfill/dist/ponyfill.js:3524:9)","    at ReadableStream.pipeThrough (/var/task/node_modules/web-streams-polyfill/dist/ponyfill.js:3608:29)","    at fetchFinale (node:internal/deps/undici/undici:11082:56)","    at mainFetch (node:internal/deps/undici/undici:10974:9)","    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)"]},"promise":{},"stack":["Runtime.UnhandledPromiseRejection: TypeError: First parameter has member 'readable' that is not a ReadableStream.","    at process.<anonymous> (file:///var/runtime/index.mjs:1276:17)","    at process.emit (node:events:529:35)","    at emit (node:internal/process/promises:149:20)","    at processPromiseRejections (node:internal/process/promises:283:27)","    at process.processTicksAndRejections (node:internal/process/task_queues:96:32)"]}`}</p>
    </div>
  );
}
