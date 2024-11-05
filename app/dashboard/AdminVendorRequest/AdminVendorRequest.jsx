import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
const AdminVendorRequest = () => {
  const { refetch, data: AllRequestVendor = {} } = useQuery({
    queryKey: ["AllRequestVendor"],
    queryFn: async () => {
      const resp = await axios.get(
        `http://localhost:3000/api/AllVendorRequest`
      );
      return resp?.data;
    },
  });

  const allRequestVendor = AllRequestVendor?.data || [];
  const requestCounter = AllRequestVendor?.requestCounter || 0;

  const handleVendorAccept = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to do this?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Vendor it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const resp = await axios.patch(
          `http://localhost:3000/api/VendorAccept/${id}`
        );
        refetch()
        Swal.fire({
          title: "Vendored",
          text: "Vendor has been created.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <div className="bg-white md:px-8 md:py-2">
        <h2 className="text-lg md:text-2xl my-4">All Vendor Request</h2>
        <div className="overflow-x-auto rounded-lg">
          <table className="min-w-full bg-white border mb-20">
            <thead>
              <tr className="bg-[#2B4DC994] text-center text-xs md:text-sm font-thin text-white">
                <th className="p-0">
                  <span className="block py-2 px-3 border-r border-gray-300">
                    ID
                  </span>
                </th>
                <th className="p-0 hidden md:table-cell">
                  <span className="block py-2 px-3 border-r border-gray-300">
                    NAME
                  </span>
                </th>
                <th className="p-0">
                  <span className="block py-2 px-3 border-r border-gray-300">
                    EMAIL
                  </span>
                </th>
                <th className="p-0 hidden md:table-cell">
                  <span className="block py-2 px-3 border-r border-gray-300">
                    STATUS
                  </span>
                </th>
                <th className="p-4 text-xs md:text-sm">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {allRequestVendor?.map((item, idx) => (
                <tr
                  key={idx}
                  className="border-b text-xs md:text-sm text-center text-gray-800"
                >
                  <td className="p-2 md:p-4">{item?._id}</td>
                  <td className="p-2 md:p-4 hidden md:table-cell">
                    {item?.name}
                  </td>
                  <td className="p-2 md:p-4">{item?.email}</td>
                  <td className="p-2 md:p-4 hidden md:table-cell">
                    {item?.userRole}
                  </td>
                  <td className="relative p-2 md:p-4 flex justify-center space-x-2">
                    <button
                      onClick={() => handleVendorAccept(item?._id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs md:text-sm"
                    >
                      Accept
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded-md text-xs md:text-sm">
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminVendorRequest;
