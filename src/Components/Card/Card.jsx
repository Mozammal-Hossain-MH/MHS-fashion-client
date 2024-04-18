import { GiSelfLove } from "react-icons/gi";
import './Card.css';
import { Link } from "react-router-dom";
import AddToCart from "../Buttons/AddToCart";

const Card = ({ item, slider }) => {
    const { img, code, name, description, onStock, price, offerPrice, _id } = item;

    return (
        <div className={`space-y-3 relative group ${slider && 'lgWidth mr-3'}`}>
            <div className="space-y-3">
                <Link to={`/product/${_id}`}>
                    <div className="relative overflow-hidden">
                        <img className="w-full transition-[transform] hover:scale-125 cursor-pointer" src={img[0]} alt={code} />
                    </div>
                </Link>
                <Link to={`/product/${_id}`}>
                    <p className="font-bold text-sm my-3 link link-hover">{name}</p>
                </Link>
                <Link to={`/product/${_id}`}>
                    <p className="text-xs text-[#000]/[0.5] link link-hover">{description}</p>
                </Link>
                <div className="pb-12">
                    <p>Stock: {onStock}</p>
                    <div>
                        <p>Price: <del className="text-red-500">{price}</del> <span className="font-bold">{offerPrice}</span></p>
                    </div>
                </div>
            </div>
            <div className="absolute rounded bg-[#fff] top-0 right-3 hidden group-hover:block">
                <div className="p-3 bg-[#fff] rounded transition-[transform] hover:scale-110 active:scale-95" title="Add To Wishlist">
                    <GiSelfLove></GiSelfLove>
                </div>
            </div>
            <div className="absolute w-full transition-[color] duration-500 hover:text-[#fff] bottom-0">
                <Link to={`/product/${_id}`}>
                    <AddToCart
                        slider={slider}
                        id={_id}
                        goToDetails={true}
                    ></AddToCart>
                </Link>
            </div>
        </div>
    );
};

export default Card;