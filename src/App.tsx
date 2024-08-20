import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

// import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  // {
  //   path: '/Login',
  //   element: <LoginPage />,
  // },
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
