/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import CustomInput from '../CustomInput';
import { ImCross } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../../features/store';
import { getMe } from '../../features/slice/AuthSlice';
import axios from 'axios';

interface Gudang {
  _id: string;
  name: string;
  code: string;
  location: string;
  arrivalDate: string;
  condition: string;
  note: string;
}

interface LaporGudangProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  gudang: string | any;
}

const LaporGudang: React.FC<LaporGudangProps> = ({ open, setOpen, gudang }) => {
  const [data, setData] = useState<Gudang>({
    _id: '',
    name: '',
    code: '',
    location: '',
    arrivalDate: '',
    condition: '',
    note: '',
  });
  const [error, setError] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError({});

    try {
      const response = await axios.put(
        `http://localhost:5000/api/warehouse/${gudang}`,
        {
          ...data,
          user_id: user?._id,
        },
        {
          withCredentials: true,
        }
      );

      if (response.data) {
        setData({
          ...response.data,
        });
        navigate('/status');
      }
    } catch (err: any) {
      setError({ general: err.message });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: keyof Gudang, value: string) => {
    setData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <div className={`fixed overflow-x-auto shadow-md sm:rounded-lg mt-4 min-h-[100vh] w-[400px] top-0 right-0 bg-white p-10 px-6 transform ${open ? 'translate-x-0 ' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Status Detail</h1>
        <button className="text-red-500 hover:text-red-700 text-4xl" onClick={() => setOpen(false)}>
          <ImCross className="text-xl" />
        </button>
      </div>
      <hr />
      <div className="mt-8" />
      <form onSubmit={handleSubmit}>
        <CustomInput title="Nama" value={data.name} onChange={(e) => handleInputChange('name', e.target.value)} error={error.name} />
        <CustomInput title="Code" value={data.code} onChange={(e) => handleInputChange('code', e.target.value)} error={error.code} />
        <CustomInput title="Lokasi" value={data.location} onChange={(e) => handleInputChange('location', e.target.value)} error={error.location} />
        <CustomInput title="Kedatangan" type="date" value={data.arrivalDate} onChange={(e) => handleInputChange('arrivalDate', e.target.value)} error={error.arrivalDate} />
        <CustomInput title="Kondisi" value={data.condition} onChange={(e) => handleInputChange('condition', e.target.value)} error={error.condition} />
        <CustomInput title="Catatan" value={data.note} onChange={(e) => handleInputChange('note', e.target.value)} error={error.note} />
        <button type="submit" className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default LaporGudang;
