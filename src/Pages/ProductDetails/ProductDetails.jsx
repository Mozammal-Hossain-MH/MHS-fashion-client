import { useParams } from 'react-router-dom';
import useGetItems from '../../Hooks/useGetItems';
import Carousel2 from '../HomePage/Carousel2/Carousel2';
import Footer from '../../Components/Footer/Footer';
import { FaCopy } from 'react-icons/fa';
import { useState } from 'react';
import AddToCart from '../../Components/Buttons/AddToCart';
import Tabs from '../../Components/Tabs/Tabs';
import Card from '../../Components/Card/Card';


const ProductDetails = () => {
    const { id } = useParams();
    const [items] = useGetItems(`/product/${id}`);
    const { img, gender, speciality, name, offerPrice, code, specialCategory, sizes, category } = items;
    const [isCopied, setIsCopied] = useState(false);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const relatedItems = useGetItems(`/related/${category}`);

    const selectedSizeInfo = sizes?.find(size => size.size === selectedSize);
    
    const productInfo = {
        size: selectedSize,
        quantity: selectedQuantity
    }

    const copySKU = () => {
        navigator.clipboard.writeText(code);
        setIsCopied(true)
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    }

    const handleSizeChange = size => {
        setSelectedSize(size);
        setSelectedQuantity(1);
    }

    return (
        <div className='space-y-5'>
            <div className='max-w-screen-xl mx-auto px-3'>
                <p className='capitalize'>home / {gender} / {speciality} / {name}</p>
            </div>
            <div className='max-w-screen-xl mx-auto px-3 grid md:grid-cols-5 gap-6'>
                <div className='md:col-span-2'>
                    <div>
                        {
                            img?.length > 1 ? <Carousel2
                                img={img}
                                borderWidth={4}
                                borderClr={'#3586FF'}
                                magnify={true}
                            >
                            </Carousel2>
                                : <img className='w-full' src={img && img[0]} />
                        }
                    </div>
                </div>
                <div className='md:col-span-3 space-y-3 lg:ml-20 text-[var(--Foundation-Grey-grey-300,#707070)]'>

                    <p className='text-2xl font-medium text-[#292929]'>{name}</p>
                    <p className='text-3xl text-[#292929]'>&#2547; <span>{offerPrice}</span></p>

                    <div className='flex'>
                        <p className='mr-2'>SKU: {code}</p>
                        <button
                            onClick={copySKU}
                            title='Copy'
                            className='transition-transform hover:scale-110 active:scale-95 mr-4'
                        >
                            <FaCopy className='text-[#292929]' />
                        </button>
                        {isCopied && <span style={{ marginLeft: '5px', color: 'green' }}>Copied!</span>}
                    </div>

                    <div className='py-3'>
                        <div className='border-b border-black/[0.1]'></div>
                        <p className='my-3'>Category: <span className='font-bold'>{specialCategory}</span></p>
                        <div className='border-b border-black/[0.1]'></div>
                    </div>

                    <div className='flex items-center space-x-3'>
                        <p>Sizes:</p>
                        <div className='flex space-x-3'>
                            {
                                sizes?.map((size, index) => <p
                                    onClick={() => handleSizeChange(size.size)}
                                    key={index}
                                    className={`px-4 py-2 rounded border cursor-pointer hover:scale-105 active:scale-95 ${selectedSize === size.size && 'border-2 border-[#000]'}`}
                                >
                                    {size.size}
                                </p>)
                            }
                        </div>
                    </div>

                    {selectedSizeInfo?.qty > 0 &&
                        <p>Available: <span className='text-green-500'>In Stock</span></p>}
                    {selectedSizeInfo?.qty === 0 &&
                        <p>Available: <span className='text-red-500'>Out Of Stock</span></p>}

                    <div className='flex items-center space-x-3'>
                        <p>Qty:</p>
                        {
                            selectedSize ?
                                selectedSizeInfo?.qty === 0 ?
                                    <p className='text-red-500'>Oops! Stock is Out</p>
                                    : <select
                                        value={selectedQuantity}
                                        onChange={e => setSelectedQuantity(parseInt(e.target.value))}
                                        className='border px-4 py-2 rounded text-[#000]'
                                    >
                                        {
                                            options.map(option => <option
                                                key={option}
                                                value={option}
                                                className={`${selectedSizeInfo?.qty >= option && 'text-[#000]'}`}
                                                disabled={selectedSizeInfo?.qty < option}
                                            >
                                                {option}
                                            </option>)
                                        }
                                    </select>
                                : <p className='text-red-500'>Please Select a Size</p>
                        }
                        <div className={`transition-[color] duration-500 ${(!selectedSize || (selectedSizeInfo?.qty === 0)) || 'hover:text-[#fff]'} w-20`}>
                            <AddToCart
                            productInfo={productInfo}
                                id={id}
                                disable={(!selectedSize ? true : false) || (selectedSizeInfo?.qty === 0 ? true : false)}
                            ></AddToCart>
                        </div>
                    </div>

                    <p>FREE DELIVERY at TK.5000 purchase</p>
                    <p className='pb-10'>Product color may slightly vary, depending on your {"device's"} screen resolution</p>

                    <table className='w-full text-[#111]'>
                        <thead className='border'>
                            <tr className='border'>
                                <th className='border'>Delivery Charge in Dhaka</th>
                                <th>&#2547; 60</th>
                            </tr>
                            <tr>
                                <th className='border'>Delivery Charge Outside Dhaka</th>
                                <th>&#2547; 100</th>
                            </tr>
                        </thead>
                    </table>

                </div>
            </div>
            <div className='max-w-screen-xl mx-auto p-6 bg-[#F5F6F7] rounded'>
                <Tabs></Tabs>
            </div>
            <div className='max-w-screen-xl mx-auto px-3 space-y-5'>
                <h3 className='text-2xl font-bold'>Related Products</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {
                        relatedItems && relatedItems[0].map(item => <Card
                            key={item._id}
                            item={item}
                        ></Card>)
                    }
                </div>
            </div>
            <div className='pt-40'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default ProductDetails;