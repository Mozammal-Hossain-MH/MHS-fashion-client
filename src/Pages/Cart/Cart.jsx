import { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import useCart from "../../Hooks/useCart";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import CartTable from "./cartTable/CartTable";


const Cart = () => {
    const [cartMenu, setCartMenu] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [cartItems] = useCart();

    const axiosSecure = useAxiosSecure();
    const cartItemsId = cartItems.map(cartItem => cartItem.id);
    const cartStr = cartItemsId.join(',');

    useEffect(() => {
        axiosSecure.get(`/cartMenu?id=${cartStr}`)
            .then(res => setCartMenu(res.data));
    }, [axiosSecure, cartStr])



    const mergedCart = cartMenu.map(item => {
        const cartItem = cartItems.find(cartItem => cartItem.id === item._id);

        if (cartItem) {
            return {
                ...item,
                orderId: cartItem._id,
                productInfo: cartItem.productInfo
            }
        }
        else {
            return item
        }
    })

    let totalCost = 0;

    selectedProducts.forEach(selectedProduct => {
        let totalPerProduct = 0;

        selectedProduct.productInfo.forEach(info => {
            const totalPerSize = selectedProduct.offerPrice * info.quantity;
            totalPerProduct = totalPerProduct + totalPerSize;
        })

        totalCost += totalPerProduct
    })



    return (
        <div>
            <div className="max-w-screen-xl mx-auto px-3 space-y-10 pt-10 pb-40">
                <p className="text-center text-4xl font-bold">My Cart</p>
                <div className="lg:grid grid-cols-3 gap-6">
                    <div className="overflow-x-auto col-span-2 w-full">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Add</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Size & Quantity</th>
                                    <th>Sub total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    mergedCart.length < 1 ? <tr>
                                        <td className="text-center py-5 text-red-500 capitalize" colSpan={6}>Your Cart Is Empty. Please add some products to the cart</td>
                                    </tr>
                                        : mergedCart.map(item => <CartTable
                                            key={item._id}
                                            item={item}
                                            mergedCart={mergedCart}
                                            selectedProducts={selectedProducts}
                                            setSelectedProducts={setSelectedProducts}
                                        ></CartTable>)
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="p-10">
                        <p className="text-2xl font-bold mb-10">Selected for checkout</p>
                        <div className="flex justify-between">
                            <p>SubTotal:</p>
                            <p>{totalCost.toLocaleString()}</p>
                        </div>
                        <div className="border my-3"></div>
                        <div className="flex justify-between mb-3">
                            <p>Total: </p>
                            <p className="text-2xl text-[#3586FF]">{totalCost.toLocaleString()}</p>
                        </div>
                        <button className="border rounded bg-[#3586FF] transition-transform w-full py-2 text-[#fff] hover:scale-105 active:scale-95">Proceed Checkout</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Cart;