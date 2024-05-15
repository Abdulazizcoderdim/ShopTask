import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Main from "../pages/home/Main";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
            path: '/',
            element: <Main/>
        }
      ]
    },
  ])
  