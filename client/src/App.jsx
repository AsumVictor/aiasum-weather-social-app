import PageLayout from "./layout/page.layout"
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";


// Pages
import Home from "./pages/home";

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="login" element={<h1>Login</h1>} />
    <Route path="signup" element={<h1>signup</h1>} />
    <Route element={<PageLayout />} >
    <Route path="/" element={<Home />} />
    <Route path="feeds" element={<h1>Feeds</h1>} />
    <Route path="saved" element={<h1>Saved</h1>} />
    <Route path="search" element={<h1>Search</h1>} />
    <Route path="outfits" element={<h1>Outfits</h1>} />
    <Route path="profile" element={<h1>Profile</h1>} />
    <Route path="settings" element={<h1>Settings</h1>} />
    <Route path="gifts" element={<h1>Gifts</h1>} />
    </Route>
  </Route>
));

function App() {

  return (
   <RouterProvider router={router} />
  )
}

export default App
