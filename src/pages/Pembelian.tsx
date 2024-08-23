import { useEffect, useState } from 'react';
import CustomButton from '../components/CustomButton';
import Layout from '../layouts/Layout';
import axios from 'axios';
import { AppDispatch, RootState } from '../features/store';
import { useDispatch, useSelector } from 'react-redux';
import { getMe } from '../features/slice/AuthSlice';

interface Item {
  name: string;
  price: number;
  total: number;
  note: string;
  category: string;
  orderType: string;
  qty: number;
  supplier: string;
  user_id: {
    username: string;
  };
}

const Pembelian = () => {
  const [datata, setDatata] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/items');
        setDatata(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);
  console.log({ user });

  console.log({ datata });
  return (
    <Layout>
      <div className="py-5">
        <div className="w-[100%] mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <div className="flex justify-end mb-5">
                <CustomButton href="/pembelian/create" title="Tambah Pembelian" className="bg-blue-500 text-white px-4 py-2 rounded" />
              </div>
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                  <thead className="text-xs text-white uppercase bg-indigo-600">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Name Pegawai
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Order
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3">
                        harga
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Jumlah
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Total
                      </th>
                      <th scope="col" className="px-6 py-3">
                        note
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Supplier
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Akun
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {!loading && datata ? (
                      datata.map((beli: Item, index) => (
                        <tr key={index + 1} className="bg-white border-b hover:bg-gray-100">
                          <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{beli.name}</td>
                          <td className="px-6 py-4">{beli.orderType}</td>
                          <td className="px-6 py-4">{beli.category}</td>
                          <td className="px-6 py-4">{beli.price}</td>
                          <td className="px-6 py-4">{beli.qty}</td>
                          <td className="px-6 py-4">{beli.total}</td>
                          <td className="px-6 py-4">{beli.note}</td>
                          <td className="px-6 py-4">{beli.supplier}</td>
                          <td className="px-6 py-4">{beli.user_id?.username}</td>
                        </tr>
                      ))
                    ) : (
                      <>Loading</>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pembelian;
