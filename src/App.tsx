import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './utils/AllRoutes'

const App:React.FC = () => {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />
}

export default App
