import { createBrowserRouter } from "react-router-dom";
import { Home, Room } from "../pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/rooms/:roomId",
    element: <Room />,
  }
]);
