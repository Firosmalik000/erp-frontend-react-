import React from 'react';
import CustomDetailField from '../CustomDetailField';
import { ImCross } from 'react-icons/im';

// Definisikan tipe untuk item
interface Item {
  nama?: string;
  harga?: string;
  total?: string;
  supplier?: string;
  riwayat?: string;
  catatan?: string;
}

// interface User {
//   name?: string;
// }

interface DetailStatusProps {
  items?: Item;
  //   user?: User;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}

const DetailStatus: React.FC<DetailStatusProps> = ({
  items,
  // user,
  setOpen,
  open,
}) => {
  //   console.log('DetailStatus received items:', user);

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
      <CustomDetailField label="Product" value={items?.nama} />
      <CustomDetailField label="Harga" value={items?.harga} />
      <CustomDetailField label="Total" value={items?.total} />
      <CustomDetailField label="Supplier" value={items?.supplier} />
      {/* <CustomDetailField label="Request By" value={user?.name} /> */}
      <CustomDetailField label="Riwayat" value={items?.riwayat} />
      <CustomDetailField label="Catatan" value={items?.catatan} />
    </div>
  );
};

export default DetailStatus;
