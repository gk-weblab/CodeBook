import { Link } from "react-router-dom"


export const ErrorComponent = ({error,name}) => {
  return (
    <div className="text-gray-700 dark:text-gray-100 h-screen flex flex-wrap gap-5 items-center justify-center flex-col p-10">
         <h1 className="text-2xl font-thin">Sorry, Error while loading {name}</h1>
        <h1 className="text-2xl">Reason: <span className="text-rose-400 dark:text-rose-400 bolder">{error.message}</span> </h1>
        <div class=" p-6 flex gap-6">
  <button onClick={ ()=>window.location.reload(true)} class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md">
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>

	Refresh
  </button>



  <button class="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md">
	<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
	</svg>

	  <Link to="/">Home</Link>
  </button>
</div>
    </div>
  )
}
