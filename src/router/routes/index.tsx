import { Navigate, RouteObject } from "react-router-dom";

import App from "@/App";

import { formRouter } from "./example"
import { SHOP_ROUTES, shopRouter } from "./shop";

export const allRoutes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Navigate
          to={SHOP_ROUTES.GUN}
          replace
          />
        )
      },
      ...shopRouter,
      ...formRouter,
    ],
  },
]