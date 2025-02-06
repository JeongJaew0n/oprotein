import { Navigate } from 'react-router-dom';

export const SHOP_ROUTES = (() => {
  const base = "/shop";
  return {
    BASE: base,
    GUN: `${base}/gun`
  }
})();

export const shopRouter = [
  {
    path: SHOP_ROUTES.BASE,
    async lazy() {
      const { ShopLayout } = await import('@/layouts');

      return {
        element: <ShopLayout />
      }
    },
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
      {
        path: SHOP_ROUTES.GUN,
        async lazy() {
          const { GunPage } = await import('@/pages/shop/gun/List')

          return {
            element: <GunPage />,
          }
        }
      },
    ]
  }
]