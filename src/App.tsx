import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { Anggota, Dashboard, Gudang, Laporan, Pembelian, Stok } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/pembelian',
    element: <Pembelian />,
  },
  {
    path: '/gudang',
    element: <Gudang />,
  },
  {
    path: '/anggota',
    element: <Anggota />,
  },
  {
    path: '/laporan',
    element: <Laporan />,
  },
  {
    path: '/stok',
    element: <Stok />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
