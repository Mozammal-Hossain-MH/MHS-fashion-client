import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Marquee from "react-fast-marquee";
import useScrollToTopOnRouteChange from "../Hooks/useScrollToTopOnRouteChange";




const Root = () => {
    useScrollToTopOnRouteChange()
    return (
        <div>
            <Marquee className='bg-[#111] text-[#a0a0a0]'>
                Welcome to MHS Fashion. We are promised to provide your favourite cloths. Enjoy your shopping!!!
            </Marquee>
            <Header></Header>
            <div className="mt-[100px] xl:mt-[148px]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;