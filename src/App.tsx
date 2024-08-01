import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";

const routes = createBrowserRouter([
  {
    path: "/auth/",
    children: [
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={routes} />
  )
}

export default App
