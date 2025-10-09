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
import AppsNotFound from './Components/AppsNotFound/AppsNotFound.jsx';

// const getAllAppData = async() => {
//   const res = await fetch('/public/apps-data.json');
//   return res.json();
// }

const getAppData = async (id) => {
  const res = await fetch('/apps-data.json');
  const allData = await res.json();
  const data = allData.find(item => item.id===Number(id));
  return data || null;
};


const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {index: true,
      loader: () => fetch('/apps-data.json'),  
      Component: Home},
      {path: "all-apps",
      loader: () => fetch('/apps-data.json'),
      Component: AllApps},
      {path: "installation", Component: Installation},
      {path: "all-apps/:appId",
        loader: ({params}) => getAppData(params.appId),
        Component: AppDetails,
        errorElement: <AppsNotFound></AppsNotFound>},
      {path: "*", Component: PageNotFound}
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
