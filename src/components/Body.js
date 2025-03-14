import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path : "/",
            element : <Login/>
        },
        {
            path : "/browse",
            element : <Browse/>                 // this is authenticated - will move to this page only after authentication
        },
    ])

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
