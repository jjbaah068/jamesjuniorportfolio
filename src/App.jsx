import { createBrowserRouter, Navigate, Outlet, RouterProvider, ScrollRestoration } from "react-router";
import Home from "./pages/home";
import Work from "./pages/work";
import Project from "./pages/project";
import About from "./pages/about";
import Contact from "./pages/contact";

function Layout() {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  )
}

const jamesportfolioRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/work", element: <Work /> },
      { path: "/work/pearsuite", element: <Project /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      // Old routes from the previous site
      { path: "/projects", element: <Navigate to="/work" replace /> },
      { path: "/services", element: <Navigate to="/" replace /> },
      { path: "/resume", element: <Navigate to="/about" replace /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
])

function App() {
  return <RouterProvider router={jamesportfolioRouter} />
}

export default App
