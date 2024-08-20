import Layout from '../layouts/Layout';
const Status = () => {
  return (
    <Layout>
      {' '}
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
                        Pembelian ID
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Accepted By
                      </th>
                      {/* {auth.user.role === "manager" && (
                                  <th
                                      scope="col"
                                      className="px-6 py-3"
                                  >
                                      Action
                                  </th>
                              )} */}
                    </tr>
                  </thead>
                  <tbody>
                    {/* {status?.map((sty, index) => (
                              <tr
                                  key={sty.id}
                                  className={`hover:bg-gray-100 ${
                                      sty.status === "Accepted"
                                          ? "bg-green-200"
                                          : sty.status ===
                                            "Rejected"
                                          ? "bg-red-200"
                                          : sty.status ===
                                            "Pending"
                                          ? "bg-yellow-200"
                                          : "bg-gray-100"
                                  }`}
                              >
                                  <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                      {index + 1}
                                  </th>
                                  <td className="px-6 py-4">
                                      {sty.pembelian_id}
                                  </td>
                                  <td className="px-6 py-4">
                                      {sty.status}
                                  </td>
                                  <td className="px-6 py-4">
                                      {sty.user?.name}
                                  </td>
                                  {/* {auth.user.role ===
                                      "manager" && (
                                      <td className="px-6 py-4">
                                          <div className="flex gap-x-2 justify-center">
                                              <CustomButton
                                                  title={"Detail"}
                                                  className="bg-blue-500 text-white px-2 py-1 rounded-[10px] transition duration-300 hover:bg-blue-700"
                                                //   onClick={() =>
                                                //       handleDetailClick(
                                                //           sty
                                                //       )
                                                //   }
                                              />
                                              {sty.status ===
                                                  "Pending" && (
                                                  <>
                                                      <CustomButton
                                                          title={
                                                              <FaCheck />
                                                          }
                                                          className="bg-green-500 text-white px-2 py-1 rounded-[10px] transition duration-300 hover:bg-green-700"
                                                        //   onClick={() =>
                                                        //       handleStatusChange(
                                                        //           sty.id,
                                                        //           "Accepted"
                                                        //       )
                                                        //   }
                                                      />
                                                      <CustomButton
                                                          title={
                                                              <ImCross />
                                                          }
                                                          className="bg-red-500 text-white px-2 py-1 rounded-[10px] transition duration-300 hover:bg-red-700"
                                                        //   onClick={() =>
                                                        //       handleStatusChange(
                                                        //           sty.id,
                                                        //           "Rejected"
                                                        //       )
                                                        //   }
                                                      />
                                                  </>
                                              )}
                                          </div>
                                      </td>
                                  )} */}
                    {/* </tr> */}
                    {/* ))}  */}
                  </tbody>
                </table>

                {/* {detail && (
                      <DetailStatus
                          items={detail.pembelian}
                          user={detail.pembelian.user}
                          open={open}
                          setOpen={setOpen}
                      />
                  )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Status;
