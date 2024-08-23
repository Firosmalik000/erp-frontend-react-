/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import Layout from '../layouts/Layout';
import axios from 'axios';
import CustomButton from '../components/CustomButton';

// Definisikan tipe Gudang
interface GudangData {
  _id: string;
  user_id: { username: string };
  status_id: {
    _id: string;
    status: string;
    acceptedBy?: {
      username: string;
    };
  };
}

const Gudang = () => {
  const [data, setData] = useState<GudangData[]>([]); // Definisikan tipe data sebagai array GudangData
  const [errors, setErrors] = useState<string | null>(null); // Definisikan tipe error sebagai string atau null
  const [loading, setLoading] = useState<boolean>(false); // Definisikan tipe loading sebagai boolean

  useEffect(() => {
    setErrors(null); // Gunakan null sebagai nilai awal untuk error
    setLoading(true);
    const fetchGudang = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/warehouse');
        setData(response.data);
      } catch (err: any) {
        setErrors(err.message || 'Terjadi kesalahan saat mengambil data.');
      } finally {
        setLoading(false);
      }
    };
    fetchGudang();
  }, []);

  console.log({ errors });

  // if (loading) {
  //   return <p>Loading...</p>; // Tambahkan kondisi rendering untuk loading
  // }

  // if (errors) {
  //   return <p>Error: {errors}</p>; // Tambahkan kondisi rendering untuk error
  // }
  console.log({ data });
  return (
    <Layout>
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                  <thead className="text-xs text-white uppercase bg-blue-600">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        No
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Item
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Accepted By
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <>Loading...</>
                    ) : (
                      data?.map((gdg, index) => (
                        <tr
                          key={gdg._id}
                          className={`hover:bg-gray-100 ${gdg.status_id.status === 'approved' ? 'bg-green-200' : gdg.status_id.status === 'rejected' ? 'bg-red-200' : gdg.status_id.status === 'Pending' ? 'bg-yellow-200' : 'bg-gray-100'}`}
                        >
                          <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{index + 1}</th>
                          <td className="px-6 py-4">{gdg.status_id._id}</td>
                          <td className="px-6 py-4">{gdg.status_id.status}</td>
                          <td className="px-6 py-4">{gdg?.user_id?.username || '-'}</td>

                          <td className="px-6 py-4">
                            <CustomButton title="Lapor Kedatangan" />
                          </td>
                        </tr>
                      ))
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

export default Gudang;
