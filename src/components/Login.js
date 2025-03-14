import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
  }

  
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/50fcc930-ba3f-4cae-9257-9f920e30a998/web/IN-en-20250310-TRIFECTA-perspective_739387a0-ff14-44ed-a5af-36e5aa4d236e_large.jpg" alt='bgimage'></img>
      </div>
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white bg-black rounded-md bg-opacity-80'>
        <h1 className='text-3xl font-bold py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (<input type='text'
         placeholder='Full Name' 
         className='p-4 my-4 w-full border bg-gray-700 bg-opacity-30 rounded-md'/>)}


        <input type='text'
         placeholder='Email Address' 
         className='p-4 my-4 w-full border bg-gray-700 bg-opacity-30 rounded-md'/>

        <input type='password' 
        placeholder='Password' 
        className='p-4 my-4 w-full border bg-gray-700 bg-opacity-30 rounded-md'/>

        <button className='p-4 my-6 bg-red-600 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now!" : "Already Registered. Sign In Now!"}</p>
      </form>
    </div>
  )
}

export default Login
