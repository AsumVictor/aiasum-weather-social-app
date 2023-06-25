import PageLayout from "./layout/page.layout"
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";


const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/" element={<PageLayout />} >

    </Route>
  </Route>
));

function App() {

  return (
   <RouterProvider router={router} />
  )
}

export default App
