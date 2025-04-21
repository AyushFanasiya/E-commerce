import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";
import { useState } from "react";

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem('users'));
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const cartItems = useSelector((state) => state.cart);

    const logout = () => {
        localStorage.clear('users');
        navigate("/login");
    };

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    const navList = (
        <ul className="flex space-x-4 text-white font-medium text-md px-5 items-center">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/allproduct'}>All Product</Link></li>

            {!user && (
                <>
                    <li><Link to={'/signup'}>Signup</Link></li>
                    <li><Link to={'/login'}>Login</Link></li>
                </>
            )}

            {user?.role === "user" && <li><Link to={'/user-dashboard'}>User</Link></li>}
            {user?.role === "admin" && <li><Link to={'/admin-dashboard'}>Admin</Link></li>}

            {/* Cart Button Styled */}
            <li>
                <Link
                    to={'/cart'}
                    className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200 transition"
                >
                    🛒 Cart ({cartItems.length})
                </Link>
            </li>
        </ul>
    );

    return (
        <nav className="bg-black sticky top-0 z-50">
  <div className="flex flex-col lg:flex-row justify-between items-center py-3 px-4 lg:px-6 gap-3">
    
    {/* Logo */}
    <div className="text-center lg:text-left">
      <Link to="/">
        <h2 className="font-bold text-white text-2xl">E-commerce</h2>
      </Link>
    </div>

    {/* Nav Links */}
    <div className="flex flex-wrap items-center justify-center gap-3">
      <ul className="flex flex-wrap space-x-4 text-white font-medium text-md items-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/allproduct">All Product</Link></li>

        {!user && (
          <>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/login">Login</Link></li>
          </>
        )}

        {user?.role === "user" && <li><Link to="/user-dashboard">User</Link></li>}
        {user?.role === "admin" && <li><Link to="/admin-dashboard">Admin</Link></li>}

        <li>
          <Link
            to="/cart"
            className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200 transition"
          >
            🛒 Cart ({cartItems.length})
          </Link>
        </li>
      </ul>
    </div>

    {/* Search and Profile */}
    <div className="flex items-center gap-4 relative">
      <div className="hidden md:block">
        <SearchBar />
      </div>

      {user && (
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-white text-xl border border-white p-2 rounded-full hover:bg-white hover:text-black transition"
          >
            👤
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-white rounded shadow-lg z-50 text-sm">
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
      )}
    </div>
  </div>
</nav>

    );
};

export default Navbar;
