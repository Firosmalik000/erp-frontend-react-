import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import './index.css';
import Pembelian from './pages/Pembelian';

// import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/pembelian',
    element: <Pembelian />,
  },
  // {
  //   path: '/Product/:id',
  //   element: <DetailProductPage />,
  // },
  // {
  //   path: '*',
  //   element: <ErrorPage />,
  // },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
