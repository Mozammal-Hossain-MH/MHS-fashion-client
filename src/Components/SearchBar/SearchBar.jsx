import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
    return (
        <div className="flex items-center justify-center text-black">
            <input type="text" className="px-2 py-2 rounded-l flex-grow border" placeholder="Search..." />
            <button className="rounded-r border px-4 py-3 bg-white transition-all hover:scale-110 active:scale-90"> <FaSearch></FaSearch> </button>
        </div>
    );
};

export default SearchBar;