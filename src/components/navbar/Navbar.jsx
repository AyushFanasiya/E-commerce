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
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-6 px-4">
                {/* Logo */}
                <div className="py-3 lg:py-0">
                    <Link to={'/'}>
                        <h2 className="font-bold text-white text-2xl text-center">E-commerce</h2>
                    </Link>
                </div>

                {/* Nav Links */}
                <div className="flex flex-wrap items-center justify-center gap-3">
                    {navList}
                </div>

                {/* Right Side: Search + Profile */}
                <div className="flex items-center gap-4 mt-4 lg:mt-0 relative">
                    {/* SearchBar */}
                    <div className="hidden md:block">
                        <SearchBar />
                    </div>

                    {/* Profile Dropdown */}
                    {user && (
                        <div className="relative">
                            <button
                                onClick={toggleDropdown}
                                className="text-white text-xl bg-white p-2 rounded-full hover:bg-gray-700 transition"
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
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
