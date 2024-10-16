import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
   <div className='relative w-full h-screen '>
   <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
      <h1 className='text-center text-red-500 font-extrabold'> Error : 404 Route not found</h1>    
    </div>
    <div>
    <NavLink to="/"><button className='text-center bg-green-400 border-2 border-black py-2 px-2 rounded-md'>Go to Home Page</button></NavLink>
    </div>
   </div>
    </>
  )
}

export default ErrorPage