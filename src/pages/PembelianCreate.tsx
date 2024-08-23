/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import Layout from '../layouts/Layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMe } from '../features/slice/AuthSlice';
import { AppDispatch, RootState } from '../features/store';

const PembelianCreate = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const [data, setData] = useState({
    name: '',
    category: '',
    orderType: '',
    qty: '',
    price: '',
    total: '',
    note: '',
    supplier: '',
    user_id: user?._id,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setData((prevState: any) => ({ ...prevState, user_id: user?._id }));
    }
  }, [user]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    try {
      const response = await axios.post('http://localhost:5000/api/items/create', data, {
        withCredentials: true,
      });
      setData(response.data);
      navigate('/status');
    } catch (error: any) {
      if (error.response && error.response.data) {
        setErrors(error.response.data.errors);
      } else {
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  };

  const classnameInput = 'mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50';
  const classLabel = 'block text-sm font-medium text-gray-700';

  return (
    <Layout>
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <form className="grid grid-cols-2 gap-4" encType="multipart/form-data" onSubmit={handleSubmit}>
                <div className="col-span-1">
                  <label className={classLabel}>Name</label>
                  <input type="text" name="name" value={data?.name} onChange={handleInput} className={classnameInput} />
                  {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                </div>
                <div className="col-span-1">
                  <label className={classLabel}>Order</label>
                  <input type="text" name="orderType" value={data.orderType} onChange={handleInput} className={classnameInput} />
                  {errors.orderType && <span className="text-red-500 text-sm">{errors.orderType}</span>}
                </div>
                <div className="col-span-1">
                  <label className={classLabel}>Category</label>
                  <input type="text" name="category" value={data.category} onChange={handleInput} className={classnameInput} />
                  {errors.category && <span className="text-red-500 text-sm">{errors.category}</span>}
                </div>
                <div className="col-span-1">
                  <label className={classLabel}>Jumlah</label>
                  <input type="number" name="qty" value={data.qty} onChange={handleInput} className={classnameInput} />
                  {errors.qty && <span className="text-red-500 text-sm">{errors.qty}</span>}
                </div>
                <div className="col-span-1">
                  <label className={classLabel}>Price</label>
                  <input type="number" name="price" value={data.price} onChange={handleInput} className={classnameInput} />
                  {errors.price && <span className="text-red-500 text-sm">{errors.price}</span>}
                </div>
                <div className="col-span-1">
                  <label className={classLabel}>Total</label>
                  <input type="number" name="total" value={data.total} onChange={handleInput} className={classnameInput} />
                  {errors.total && <span className="text-red-500 text-sm">{errors.total}</span>}
                </div>
                <div className="col-span-1">
                  <label className={classLabel}>Note</label>
                  <input type="text" name="note" value={data.note} onChange={handleInput} className={classnameInput} />
                  {errors.note && <span className="text-red-500 text-sm">{errors.note}</span>}
                </div>
                <div className="col-span-1">
                  <label className={classLabel}>supplier</label>
                  <input type="text" name="supplier" value={data.supplier} onChange={handleInput} className={classnameInput} />
                  {errors.supplier && <span className="text-red-500 text-sm">{errors.supplier}</span>}
                </div>
                <div className="flex gap-x-2 col-span-2">
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    {loading ? 'Loading...' : 'Submit'}
                  </button>
                  <a
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:cursor-pointer"
                    onClick={() => navigate(-1)}
                  >
                    Kembali
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PembelianCreate;
