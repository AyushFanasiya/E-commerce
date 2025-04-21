import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import { useNavigate } from "react-router";

const SearchBar = () => {
    const context = useContext(myContext);
    const { getAllProduct } = context;
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const filterSearchData = getAllProduct
        .filter((obj) => obj.title.toLowerCase().includes(search))
        .slice(0, 8);

    return (
        <div className="relative">
            {/* Search Input */}
            <div className="input flex justify-center">
                <input
                    type="text"
                    placeholder="Search here"
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    className="bg-gray-200 placeholder-gray-400 rounded-lg px-2 py-2 w-full outline-none text-black max-w-xs sm:max-w-sm md:max-w-md"
                />
            </div>

            {/* Search Dropdown */}
            <div className="flex justify-center">
                {search && (
                    <div className="block absolute bg-gray-200 w-full max-w-xs sm:max-w-sm md:max-w-md z-50 my-1 rounded-lg px-2 py-2">
                        {filterSearchData.length > 0 ? (
                            <>
                                {filterSearchData.map((item, index) => (
                                    <div
                                        key={index}
                                        className="py-2 px-2 cursor-pointer"
                                        onClick={() => navigate(`/productinfo/${item.id}`)}
                                    >
                                        <div className="flex items-center gap-2">
                                            <img
                                                className="w-10"
                                                src={item.productImageUrl}
                                                alt={item.title}
                                            />
                                            {item.title}
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <div className="flex justify-center">
                                <img
                                    className="w-20"
                                    src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png"
                                    alt="No Results"
                                />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchBar;
