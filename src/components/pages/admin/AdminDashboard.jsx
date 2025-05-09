import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import UserDetail from "../../admin/UserDetail";
import OrderDetail from "../../admin/OrderDetail";
import ProductDetail from "../../admin/ProductDetail";
import { useContext, useState } from "react";
import myContext from "../../../context/myContext";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("users"));
  const context = useContext(myContext);
  const { getAllProduct, getAllOrder, getAllUser } = context;

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const logout = () => {
    localStorage.removeItem("users");
    // window.location.href = "/login"; // Redirect to login
    navigate("/login");
  };

  return (
    <div>
      {/* Top Header */}
      <div className="top mb-5 px-5 mt-5 relative">
        <div className="bg-black py-5 border border-gray-100 rounded-lg flex items-center justify-between px-6 relative">
          <h1 className="text-2xl font-bold text-white text-center w-full">
            Admin Dashboard
          </h1>

          {/* 👤 Avatar + Dropdown */}
          {user && (
            <div className="absolute right-5 top-1/2 -translate-y-1/2">
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="text-xl bg-white text-black p-2 rounded-full hover:bg-gray-200 transition"
                >
                  👤
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg z-10 text-sm">
                    <div className="px-4 py-2 border-b text-black capitalize">
                      Role: {user.role}
                    </div>
                    <button
                      onClick={logout}
                      className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="px-5">
        {/* Mid Section */}
        <div className="mid mb-5">
          <div className="bg-gray-50 py-5 rounded-xl border border-black">
            <div className="flex justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                alt="Admin"
              />
            </div>

            <div className="">
              <h1 className="text-center text-lg">
                <span className="font-bold">Name : </span>
                {user?.name}
              </h1>
              <h1 className="text-center text-lg">
                <span className="font-bold">Email : </span>
                {user?.email}
              </h1>
              <h1 className="text-center text-lg">
                <span className="font-bold">Date : </span>
                {user?.date}
              </h1>
              <h1 className="text-center text-lg">
                <span className="font-bold">Role : </span>
                {user?.role}
              </h1>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <Tabs>
          <TabList className="flex flex-wrap -m-4 text-center justify-center">
            {/* Products */}
            <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
              <div className="border bg-gray-50 hover:bg-gray-100 border-black px-4 py-3 rounded-xl">
                <div className="text-black w-12 h-12 mb-3 inline-block">
                  {/* Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={50}
                    height={50}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shopping-basket"
                  >
                    <path d="m5 11 4-7" />
                    <path d="m19 11-4-7" />
                    <path d="M2 11h20" />
                    <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" />
                    <path d="m9 11 1 9" />
                    <path d="M4.5 15.5h15" />
                    <path d="m15 11-1 9" />
                  </svg>
                </div>
                <h2 className="text-3xl font-medium text-black">
                  {getAllProduct.length}
                </h2>
                <p className="text-black font-bold">Total Products</p>
              </div>
            </Tab>

            {/* Orders */}
            <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
              <div className="border bg-gray-50 hover:bg-gray-100 border-black px-4 py-3 rounded-xl">
                <div className="text-black w-12 h-12 mb-3 inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={50}
                    height={50}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-list-ordered"
                  >
                    <line x1={10} x2={21} y1={6} y2={6} />
                    <line x1={10} x2={21} y1={12} y2={12} />
                    <line x1={10} x2={21} y1={18} y2={18} />
                    <path d="M4 6h1v4" />
                    <path d="M4 10h2" />
                    <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
                  </svg>
                </div>
                <h2 className="text-3xl font-medium text-black">
                  {getAllOrder.length}
                </h2>
                <p className="text-black font-bold">Total Orders</p>
              </div>
            </Tab>

            {/* Users */}
            <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
              <div className="border bg-gray-50 hover:bg-gray-100 border-black px-4 py-3 rounded-xl">
                <div className="text-black w-12 h-12 mb-3 inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={50}
                    height={50}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-users"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx={9} cy={7} r={4} />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h2 className="text-3xl font-medium text-black">
                  {getAllUser.length}
                </h2>
                <p className="text-black font-bold">Total Users</p>
              </div>
            </Tab>
          </TabList>

          <TabPanel>
            <ProductDetail />
          </TabPanel>
          <TabPanel>
            <OrderDetail />
          </TabPanel>
          <TabPanel>
            <UserDetail />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
