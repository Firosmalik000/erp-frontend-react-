import { useEffect, useState } from 'react';
import Layout from '../layouts/Layout';
import axios from 'axios';
import CustomButton from '../components/CustomButton';
import LaporGudang from '../components/drawer/LaporGudang';
import { FiCheckCircle } from 'react-icons/fi';

// Definisikan tipe GudangData
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
interface Gudang {
  _id: string;
  name: string;
  code: string;
  location: string;
  arrivalDate: string;
  condition: string;
  note: string;
}

const Gudang = () => {
  const [data, setData] = useState<GudangData[]>([]);
  const [errors, setErrors] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [gudang, setGudang] = useState<GudangData | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setErrors(null);
    setLoading(true);
    const fetchGudang = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/warehouse');
        setData(response.data);
      } catch (err) {
        setErrors((err as Error).message || 'Terjadi kesalahan saat mengambil data.');
      } finally {
        setLoading(false);
      }
    };
    fetchGudang();
  }, []);

  const handleGudangClick = (item: GudangData) => {
    setGudang(item);
    setOpen(true);
  };

  console.log({ errors });
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
                        Reported By
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
                      data.map((gdg, index) => (
                        <tr
                          key={gdg._id}
                          className={`hover:bg-gray-100 ${gdg.status_id.status === 'approved' ? 'bg-green-200' : gdg.status_id.status === 'rejected' ? 'bg-red-200' : gdg.status_id.status === 'Pending' ? 'bg-yellow-200' : 'bg-gray-100'}`}
                        >
                          <th className="px-6 py-4 font-medium text-black whitespace-nowrap">{index + 1}</th>
                          <td className="px-6 py-4">{gdg.status_id._id}</td>
                          <td className="px-6 py-4">{gdg.status_id.status}</td>
                          <td className="px-6 py-4">{gdg?.user_id?.username || '-'}</td>{' '}
                          <td className="px-6 py-4">
                            {gdg.user_id?.username ? (
                              <div className="flex gap-2">
                                <FiCheckCircle className="text-xl" />
                                <p>Done</p>
                              </div>
                            ) : (
                              <CustomButton title="Lapor Kedatangan" onClick={() => handleGudangClick(gdg)} />
                            )}{' '}
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
        <LaporGudang setOpen={setOpen} open={open} gudang={gudang?._id} />
      </div>
    </Layout>
  );
};

export default Gudang;
