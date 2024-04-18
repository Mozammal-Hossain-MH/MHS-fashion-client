import Footer from "../../../Components/Footer/Footer";
import Carousel2 from '../Carousel2/Carousel2';
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CollectionList from "../CollectionList/CollectionList";
import PopularCollection from "../PopularCollection/PopularCollection";
import ProductSlider from "../ProductSlider/ProductSlider";
import useGetItems from "../../../Hooks/useGetItems";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";



const Home = () => {
    const slides = ['/slider1.jpg', '/slider2.jpg', '/slider3.jpg', '/slider4.jpg'];
    const axiosPublic = useAxiosPublic();
    const newItems = useGetItems(`/items/new arrival`);
    const trendyItems = useGetItems(`/items/trendy`);

    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        axiosPublic.get('/ratings')
            .then(res => setRatings(res.data));
    }, [axiosPublic])

    return (
        <div className='bg-[#f6f6f6] space-y-20'>
            <Carousel2 
            img={slides}
            running={true}
            dots={true}
            borderWidth={2}
            borderClr={'#000'}
            ></Carousel2>
            <div className="max-w-screen-xl mx-auto px-3 space-y-10">
                <SectionTitle
                    topTitle={'Our Collections'}
                    bottomTitle={'Featured Collections'}
                ></SectionTitle>
                <CollectionList></CollectionList>
            </div>
            <div className="max-w-screen-xl mx-auto px-3 space-y-10">
                <SectionTitle
                    topTitle={'Want New?'}
                    bottomTitle={'Check New Products of MHS'}
                >
                </SectionTitle>
                <ProductSlider
                    items={newItems[0]}
                    id={'new-items'}
                    isRunning={true}
                ></ProductSlider>
            </div>
            <div className="max-w-screen-xl mx-auto px-3 space-y-10">
                <SectionTitle
                    topTitle={'Wanna Be Trendy?'}
                    bottomTitle={'Check Trendy Products of MHS'}
                >
                </SectionTitle>
                <ProductSlider
                    items={trendyItems[0]}
                    id={'trendy-items'}
                    isRunning={true}
                ></ProductSlider>
            </div>
            <div className="max-w-screen-xl mx-auto px-3 space-y-10">
                <SectionTitle
                    topTitle={'Here We Go'}
                    bottomTitle={'Most Popular of MHS'}
                >
                </SectionTitle>
                <PopularCollection></PopularCollection>
            </div>
            <div className="max-w-screen-xl mx-auto px-3 pb-20 space-y-10">
                <SectionTitle
                    topTitle={'What Customers Says?'}
                    bottomTitle={'Ratings Of MHS'}
                ></SectionTitle>
                <ProductSlider
                    items={ratings}
                    id={'ratings'}
                    rating={true}
                ></ProductSlider>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Home;