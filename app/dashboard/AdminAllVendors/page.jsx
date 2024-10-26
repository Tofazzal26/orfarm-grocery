import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const AdminAllVendors = () => {
  const { data: allVendor = {} } = useQuery({
    queryKey: ["allVendor"],
    queryFn: async () => {
      const resp = await axios.get(`http://localhost:3000/api/AllVendor`);
      return resp.data;
    },
  });

  const VendorCount = allVendor?.vendorCount || 0;
  const Vendor = allVendor?.data || [];

  console.log(VendorCount);
  console.log(Vendor);

  return (
    <div>
      <h1>AdminAllVendors</h1>
    </div>
  );
};

export default AdminAllVendors;
