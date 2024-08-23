import { useEffect, useState } from 'react';
import Layout from '../layouts/Layout';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../features/store';
import { getMe } from '../features/slice/AuthSlice';
import CustomButton from '../components/CustomButton';
import { FaCheck } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import DetailStatus from '../components/drawer/DetaiStatus';

interface User {
  username: string;
  email: string;
  _id: string;
  role: string;
}

interface Item {
  _id: string;
}

interface StatusType {
  _id: string;
  item_id: Item;
  status: string;
  acceptedBy?: User;
}

const Status = () => {
  const [status, setStatus] = useState<StatusType[]>([]);
  const [errors, setErrors] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const [detail, setDetail] = useState<StatusType | null>(null);
  const [open, setOpen] = useState(false);

  // const navigate = useNavigate();

  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);
  useEffect(() => {
    const fetchStatus = async () => {
      setLoading(true);
      try {
        const response = await axios.get<StatusType[]>('http://localhost:5000/api/status');
        setStatus(response.data);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          setErrors(error.response.data.message || 'An error occurred');
        } else {
          setErrors('An unexpected error occurred');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchStatus();
  }, [user]);

  console.log({ status });
  const handleDetailClick = (item: StatusType) => {
    setDetail(item);
    setOpen(true);
  };

  const handleStatusChange = async (id: string, value: string) => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/status/${id}/user`,
        {
          acceptedBy: user?._id,
          status: value,
        },
        { withCredentials: true }
      );

      if (response.data) {
        setStatus((prevStatus) =>
          prevStatus.map((statusItem) => {
            if (statusItem._id === id) {
              return {
                ...statusItem,
                status: value,
                acceptedBy: user?._id,
              };
            }
            return statusItem;
          })
        );
      }
    } catch (err) {
      console.error('Failed to update status:', err);
      setErrors('Failed to update status.');
    }
  };

  const classth = 'px-6 py-4 font-medium text-gray-900 whitespace-nowrap';
  return (
    <Layout>
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              {errors && <p className="text-red-500">{errors}</p>}
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                  <thead className="text-xs text-white uppercase bg-blue-600">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        No
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Pembelian ID
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Accepted By
                      </th>
                      {user?.role === 'admin' ? (
                        <th scope="col" className="px-6 py-3">
                          Action
                        </th>
                      ) : (
                        <></>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <div className="flex justify-center items-center">
                        <p>Loading......</p>
                      </div>
                    ) : (
                      status.map((sty, index) => (
                        <tr key={sty._id} className={`hover:bg-gray-100 ${sty.status === 'approved' ? 'bg-green-200' : sty.status === 'rejected' ? 'bg-red-200' : sty.status === 'pending' ? 'bg-yellow-200' : 'bg-gray-100'}`}>
                          <th className={classth}>{index + 1}</th>
                          <td className={classth}>{sty.item_id._id}</td>
                          <td className={classth}>{sty.status}</td>
                          <td className={classth}>{sty.acceptedBy?.username || '-'}</td>
                          {user?.role === 'admin' && (
                            <td className="px-6 py-4">
                              <div className="flex gap-x-2 justify-center">
                                <CustomButton title={'Detail'} className="bg-blue-500 text-white px-2 py-1 rounded-[10px] transition duration-300 hover:bg-blue-700" onClick={() => handleDetailClick(sty)} />
                                {sty.status === 'pending' && (
                                  <>
                                    <CustomButton title={<FaCheck />} className="bg-green-500 text-white px-2 py-1 rounded-[10px] transition duration-300 hover:bg-green-700" onClick={() => handleStatusChange(sty._id, 'approved')} />
                                    <CustomButton title={<ImCross />} className="bg-red-500 text-white px-2 py-1 rounded-[10px] transition duration-300 hover:bg-red-700" onClick={() => handleStatusChange(sty._id, 'rejected')} />
                                  </>
                                )}
                              </div>
                            </td>
                          )}
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>

                {detail && <DetailStatus items={detail.item_id} open={open} setOpen={setOpen} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Status;
