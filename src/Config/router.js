import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashbord from "../Views/Dashbord";
import Detail from "../Views/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashbord />,
  },

  {
    path: "/detail/:addId",
    element: <Detail />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
