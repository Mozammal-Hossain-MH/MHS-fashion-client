import { FaTrash } from 'react-icons/fa';
import './CartTable.css'
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useCart from '../../../Hooks/useCart';
import { Link } from 'react-router-dom';

const CartTable = ({ item, mergedCart, selectedProducts, setSelectedProducts }) => {
    const axiosSecure = useAxiosSecure();
    const { img, name, offerPrice, productInfo, _id, orderId } = item
    const [,refetch] = useCart();
    const totalQuantity = productInfo?.reduce((total, item) => total + item.quantity, 0)

    const subTotal = offerPrice * totalQuantity;

    const handleCheckbox = id => {
        const exist = selectedProducts.find(item => item._id === id)
        if (exist) {
            const remaining = selectedProducts.filter(item => item._id !== id);
            setSelectedProducts(remaining);
        }
        else {
            const selectedItem = mergedCart.find(item => item._id === id);
            const selectedProductArray = [...selectedProducts, selectedItem];
            setSelectedProducts(selectedProductArray)
        }
    }

    const handleDeleteFromCart = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })


            }
        });
    }

    return (
        <tr className='cartItems'>
            <td>
                <label>
                    <input onChange={() => handleCheckbox(_id)} type="checkbox" className="checkbox" />
                </label>
            </td>
            <td className="flex items-center py-2 pl-2 min-w-60">
                <img className="w-10 mr-3" src={img[0]} />
                <Link className='link link-hover' to={`/product/${_id}`}><p>{name}</p></Link>
            </td>
            <td>{offerPrice}</td>
            <td>
                {
                    productInfo?.map((info, index) => <div
                        key={index}
                        className='flex'
                    >
                        <p>Size: <span className='text-red-500 mr-3'>{info.size}</span></p>
                        <p>Qty: <span className='text-red-500'>{info.quantity}</span></p>
                    </div>)
                }
            </td>
            <td>{subTotal}</td>
            <td>
                <div onClick={() => handleDeleteFromCart(orderId)} className='flex justify-center text-xl py-2 rounded transition-transform text-red-500 hover:scale-105 active:scale-95'>
                    <FaTrash ></FaTrash>
                </div>
            </td>
        </tr>
    );
};

export default CartTable;