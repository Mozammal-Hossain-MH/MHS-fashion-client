import { FaCartPlus } from "react-icons/fa";


const AddToCart = ({ slider, disabled }) => {
    return (
        <button
            disabled={disabled}
            className={`w-full h-10 border cursor-pointer ${disabled ? 'cursor-not-allowed' : 'bg-transparent overflow-hidden relative  before:transition-all before:duration-500 before:absolute before:bg-gradient-to-r before:from-[#3586FF] before:to-[#084aac] before:w-full before:h-full before:top-0 before:-left-full before:z-[1] hover:before:left-0'} ${(slider || disabled) || 'transition-[transform] duration-100 hover:scale-110 active:scale-90'}`}
        >
            <div className="flex justify-center items-center z-10 relative ">
                <FaCartPlus></FaCartPlus>
                <span>Add</span>
            </div>
        </button>
    );
};

export default AddToCart;