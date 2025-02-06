import { createHashRouter } from "react-router-dom";

import { allRoutes } from "./routes";

export const router = createHashRouter([
  {
    children: allRoutes,
  },
])