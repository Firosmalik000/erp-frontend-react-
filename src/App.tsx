import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { Anggota, Dashboard, Gudang, Laporan, Login, Pembelian, PembelianCreate, Status, Stok } from './pages';

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
    path: '/pembelian/create',
    element: <PembelianCreate />,
  },
  {
    path: '/status',
    element: <Status />,
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
  {
    path: '/login',
    element: <Login />,
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
