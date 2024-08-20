import CustomButton from '../components/CustomButton';
import Layout from '../layouts/Layout';

const Pembelian = () => {
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
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Jumlah
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Harga
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Total
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Supplier
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Request By
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Riwayat
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Catatan
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {pembelians.map((beli) => (
                      <tr key={beli.id} className="bg-white border-b hover:bg-gray-100">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{beli.nama}</td>
                        <td className="px-6 py-4">{beli.jumlah}</td>
                        <td className="px-6 py-4">{beli.harga}</td>
                        <td className="px-6 py-4">{beli.total}</td>
                        <td className="px-6 py-4">{beli.supplier}</td>
                        <td className="px-6 py-4">{beli?.user?.name}</td>
                        <td className="px-6 py-4">{beli.riwayat}</td>
                        <td className="px-6 py-4">{beli.catatan}</td>
                      </tr>
                    ))} */}
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
