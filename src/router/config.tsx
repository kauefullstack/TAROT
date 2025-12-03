import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/home/page'));
const CartasDaLua = lazy(() => import('../pages/cartas-da-lua/page'));
const Servicos = lazy(() => import('../pages/servicos/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <CartasDaLua />,
  },
  {
    path: '/servicos',
    element: <Servicos />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;