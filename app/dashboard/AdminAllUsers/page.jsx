import { AuthProduct } from "@/app/Services/ProductProvider/ProductProvider";
import React, { useContext } from "react";
import { Trash } from "lucide-react";

const AdminAllUsers = () => {
  const { allUser, allUserLoading } = useContext(AuthProduct);

  console.log(allUser);

  return (
    <div className="bg-white md:px-8 md:py-2">
      <h2 className="text-lg md:text-2xl mb-4">My Product</h2>

      {/* Table container with horizontal scroll for smaller screens */}
      <div className="relative overflow-x-auto">
        <table className="min-w-full bg-white border mb-4">
          <thead>
            <tr className="bg-[#2B4DC994] text-center text-xs md:text-sm font-thin text-white">
              {/* ID and Name columns hidden on small screens */}
              <th className="p-0 hidden md:table-cell">
                <span className="block py-2 px-3 border-r border-gray-300">
                  ID
                </span>
              </th>
              <th className="p-0 hidden md:table-cell">
                <span className="block py-2 px-3 border-r border-gray-300">
                  NAME
                </span>
              </th>
              {/* Email, Status, and Actions are always visible */}
              <th className="p-0">
                <span className="block py-2 px-3 border-r border-gray-300">
                  EMAIL
                </span>
              </th>
              <th className="p-0">
                <span className="block py-2 px-3 border-r border-gray-300">
                  STATUS
                </span>
              </th>
              <th className="p-4 text-xs md:text-sm">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {allUser.map((item) => (
              <tr
                key={item?._id}
                className="border-b text-xs md:text-sm text-center text-gray-800"
              >
                {/* Hide ID and Name on small screens */}
                <td className="p-2 md:p-4 hidden md:table-cell">{item?._id}</td>
                <td className="p-2 md:p-4 hidden md:table-cell">
                  {item?.name}
                </td>
                {/* Show Email, Status, and Actions on all screens */}
                <td className="p-2 md:p-4">{item?.email}</td>
                <td className="p-2 md:p-4">{item?.userRole}</td>
                <td className="relative p-2 md:p-4 flex justify-center space-x-2">
                  <button
                    className={`bg-blue-500 text-white px-3 py-1 rounded-md text-xs md:text-sm ${item?.userRole === "admin" ? "hidden" : ""}`}
                  >
                    {item?.userRole === "user" ? "Vendor" : "User"}
                  </button>
                  <button
                    className={`bg-red-500 text-white px-3 py-1 rounded-md text-xs md:text-sm ${item?.userRole === "admin" ? "hidden" : ""}`}
                  >
                    <Trash size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminAllUsers;
