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

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {index: true, Component: Home},
      {path: "all-apps", Component: AllApps},
      {path: "installation", Component: Installation},
      {path: "app-details", Component: AppDetails}
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
