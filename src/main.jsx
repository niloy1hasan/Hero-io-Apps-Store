import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import './index.css'
import App from './App.jsx'
import Home from './Components/Home/Home.jsx';
import AllApps from './Components/AllApps/AllApps.jsx';
import Installation from './Components/Installation/Installation.jsx';
import AppDetails from './Components/AppDetails/AppDetails.jsx';
import PageNotFound from './Components/PageNotFound/PageNotFound.jsx';

// const getAllAppData = async() => {
//   const res = await fetch('/public/apps-data.json');
//   return res.json();
// }

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {index: true,
      loader: () => fetch('/public/apps-data.json'),  
      Component: Home},
      {path: "all-apps",
      loader: () => fetch('/public/apps-data.json'),
      Component: AllApps},
      {path: "installation", Component: Installation},
      {path: "app-details", Component: AppDetails},
      {path: "*", Component: PageNotFound}
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
