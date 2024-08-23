import React from 'react';
import CustomDetailField from '../CustomDetailField';
import { ImCross } from 'react-icons/im';

interface Item {
  _id?: string;
  name?: string;
  price?: string;
  total?: string;
  supplier?: string;
  category?: string;
  note?: string;
  orderType?: string;
  user_id?: {
    username: string;
    email: string;
    _id: string;
  };
}

interface DetailStatusProps {
  items?: Item;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}

const DetailStatus: React.FC<DetailStatusProps> = ({ items, setOpen, open }) => {
  return (
    <div className={`fixed overflow-x-auto shadow-md sm:rounded-lg mt-4 min-h-[100vh] w-[400px] top-0 right-0 bg-white p-10 px-6 transform ${open ? 'translate-x-0 ' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Status Detail</h1>
        <button className="text-red-500 hover:text-red-700 text-4xl" onClick={() => setOpen(!open)}>
          <ImCross className="text-xl" />
        </button>
      </div>
      <hr />
      <div className="mt-8" />
      <CustomDetailField label="Nama Pegawai" value={items?.name} />
      <CustomDetailField label="Order" value={items?.orderType} />
      <CustomDetailField label="Harga" value={items?.price} />
      <CustomDetailField label="Total" value={items?.total} />
      <CustomDetailField label="Category" value={items?.category} />
      <CustomDetailField label="Supplier" value={items?.supplier} />
      <CustomDetailField label="Akun" value={items?.user_id?.username} />
      <CustomDetailField label="Catatan" value={items?.note} />
    </div>
  );
};

export default DetailStatus;
