import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services"; 
import Resume from "./pages/resume"; 
import Projects from "./pages/projects";
import Contact from "./pages/contact";


const jamesportfolioRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About/> },
  { path: "/services", element: <Services/> },
  { path: "/resume", element: <Resume/> },
  { path: "/projects", element: <Projects/> },
  { path: "/contact", element: <Contact/> },
])

function App() {

  return (
    <>

    <RouterProvider router={jamesportfolioRouter} />  
      
    </>
  )
}

export default App
