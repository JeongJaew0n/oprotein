import { Navigate } from 'react-router-dom';

export const FORM_ROUTES = (() => {
  const base = '/example'
  return {
    FORM: `${base}/form`
  }
})();

export const formRouter = [
  {
    path: FORM_ROUTES.FORM,
    async lazy() {
      const { default: FormExample } = await import('@/example/reactHookFormExample');

      return {
        element: <FormExample />
      }
    },
    children: [

    ]
  }
]