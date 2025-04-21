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

    return (
        <nav className="bg-black sticky top-0 z-50 w-full shadow-md">
            {/* Top Row: Logo, Links, Cart+Profile */}
            <div className="flex flex-col lg:flex-row items-center justify-between px-4 py-3 lg:px-8 gap-3">
                
                {/* Logo */}
                <Link to="/" className="text-white text-2xl font-bold">
                    E-commerce
                </Link>

                {/* Nav Links */}
                <ul className="flex flex-wrap items-center justify-center gap-4 text-white font-medium text-sm sm:text-base">
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
                </ul>

                {/* Cart + Profile */}
                <div className="flex items-center gap-3 relative">
                    {/* Cart */}
                    <Link
                        to="/cart"
                        className="bg-white text-black px-3 py-1 rounded-md text-sm shadow-sm hover:bg-gray-200 transition"
                    >
                        🛒 Cart ({cartItems.length})
                    </Link>

                    {/* Profile */}
                    {user && (
                        <div className="relative">
                            <button
                                onClick={toggleDropdown}
                                className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-300 transition"
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

            {/* Search Bar (inside black navbar) */}
            <div className="flex justify-center py-2 px-4">
                <div className="w-full max-w-md">
                    <SearchBar />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
