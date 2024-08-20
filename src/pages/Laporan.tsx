import Layout from '../layouts/Layout';

const Laporan = () => {
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
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Created At
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                ID Pembelian
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Nama
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Code
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Kondisi
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Lokasi
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Kedatangan
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Catatan
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {report?.map((gdg, index) => (
                                            <tr
                                                onClick={() =>
                                                    handleRowClick(gdg?.status)
                                                }
                                                key={gdg?.id}
                                                className={`hover:bg-gray-100 ${
                                                    gdg?.status?.status ===
                                                    "Accepted"
                                                        ? "bg-green-200"
                                                        : gdg?.status
                                                              ?.status ===
                                                          "Rejected"
                                                        ? "bg-red-200"
                                                        : gdg?.status
                                                              ?.status ===
                                                          "Pending"
                                                        ? "bg-yellow-200"
                                                        : "bg-gray-100"
                                                }`}
                                            >
                                                <td className="px-6 py-4">
                                                    {gdg?.status?.created_at ??
                                                        gdg?.gudang?.status
                                                            ?.created_at}
                                                </td>

                                                <td className="px-6 py-4">
                                                    {gdg?.status?.pembelian_id
                                                        ?.catatan ??
                                                        gdg?.gudang?.status
                                                            ?.pembelian_id}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {gdg?.gudang?.nama}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {gdg?.gudang?.code}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {gdg?.gudang?.kondisi}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {gdg?.gudang?.lokasi}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {gdg?.gudang?.kedatangan}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {gdg?.gudang?.catatan}
                                                </td>
                                            </tr>
                                        ))} */}
                                    </tbody>
                                </table>
                            </div>
                            <button
                                // onClick={generateCSV}
                                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
                            >
                                Download Data Pembelian
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    </Layout>
  );
};

export default Laporan;
