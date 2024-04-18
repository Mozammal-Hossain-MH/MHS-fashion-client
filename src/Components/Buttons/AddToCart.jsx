import { FaCartPlus } from "react-icons/fa";
import useAuthContext from "../../Hooks/useAuthContext";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


const AddToCart = ({ slider, disable, goToDetails, id, productInfo }) => {
    const { user } = useAuthContext();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const [isInCart, setIsInCart] = useState([]);

    useEffect(() => {
        axiosSecure.get(`/cart?email=${user?.email}&id=${id}`)
            .then(res => setIsInCart(res.data))
    }, [axiosSecure, id, user])
    

    const handleAddToCart = () => {
        if (user?.email) {
            if (isInCart.length > 0) {
                axiosSecure.patch(`/cart?email=${user?.email}&id=${id}`, productInfo)
                    .then(res => {
                        if(res.data.success === true){
                            Swal.fire({
                                title: "Cart Updated Successfully!",
                                text: "Wanna go to cart?",
                                icon: "success",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Go To Cart"
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    navigate('/cart');
                                }
                            });
                        }
                    })
            }
            else {
                const item = {
                    id,
                    email: user?.email,
                    productInfo: [productInfo]
                }
                axiosSecure.post('/carts', item)
                    .then(res => {
                        if (res.data.insertedId) {

                            Swal.fire({
                                title: "Item Added To The Cart!",
                                text: "Wanna go to cart?",
                                icon: "success",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Go To Cart"
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    navigate('/cart');
                                }
                                else {
                                    window.location.reload();
                                }
                            });
                        }
                    })
            }

        }
    }

    return (
        <>
            {
                goToDetails ?
                    <button
                        className={`w-full h-10 border cursor-pointer ${disable ? 'cursor-not-allowed' : 'bg-transparent overflow-hidden relative  before:transition-all before:duration-500 before:absolute before:bg-gradient-to-r before:from-[#3586FF] before:to-[#084aac] before:w-full before:h-full before:top-0 before:-left-full before:z-[1] hover:before:left-0'} ${(slider || disable) || 'transition-transform duration-100 hover:scale-110 active:scale-90'}`}
                    >
                        <div className="flex justify-center items-center z-10 relative ">
                            <FaCartPlus></FaCartPlus>
                            <span>Add</span>
                        </div>
                    </button>
                    : <button
                        onClick={handleAddToCart}
                        disabled={disable}
                        className={`w-full h-10 border cursor-pointer ${disable ? 'cursor-not-allowed' : 'bg-transparent overflow-hidden relative  before:transition-all before:duration-500 before:absolute before:bg-gradient-to-r before:from-[#3586FF] before:to-[#084aac] before:w-full before:h-full before:top-0 before:-left-full before:z-[1] hover:before:left-0'} ${(slider || disable) || 'transition-transform duration-100 hover:scale-110 active:scale-90'}`}
                    >
                        <div className="flex justify-center items-center z-10 relative ">
                            <FaCartPlus></FaCartPlus>
                            <span>Add</span>
                        </div>
                    </button>
            }
        </>

    );
};

export default AddToCart;