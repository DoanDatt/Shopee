import { useRoutes } from 'react-router-dom'
import ProductList from './Pages/ProductList'
import Login from './Pages/Login'
import RegisterHeader from './Pages/Register'
import RegisterLayout from './Layouts/RegisterLayout'

export default function useRouteElement() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: (
        <RegisterLayout>
          <ProductList />
        </RegisterLayout>
      )
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <RegisterHeader />
        </RegisterLayout>
      )
    }
  ])
  return routeElements
}
