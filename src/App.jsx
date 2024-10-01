// ===================== All Imports
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import LayoutOne from "./Layouts/LayoutOne"
import "./App.css"
import Home from "./Pages/Home"

function App() {

  const ebtan = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LayoutOne />}>
          <Route index element={<Home />} />
        </Route>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={ebtan} />
    </>
  )
}

export default App
