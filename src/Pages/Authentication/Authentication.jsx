import { useState } from "react";
import Login from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";
import Footer from "../../Components/Footer/Footer";


const Authentication = () => {
    const [currentTab, setCurrentTab] = useState(0);
    return (
        <div>
            <div className="space-y-10 max-w-screen-xl mx-auto px-3 pb-20">
                <p className="text-3xl font-bold text-center pt-10">Welcome!</p>
                <div className="flex justify-center font-semibold space-x-3">
                    <h3 onClick={() => setCurrentTab(0)} className={`px-3 py-1 rounded cursor-pointer hover:bg-[#f1e7e7] relative after:absolute after:h-1 after:w-0 after:bg-[#3586FF] after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full ${currentTab === 0 && 'after:w-full'}`}>Login</h3>
                    <h3 onClick={() => setCurrentTab(1)} className={`px-3 py-1 rounded cursor-pointer hover:bg-[#f1e7e7] relative after:absolute after:h-1 after:w-0 after:bg-[#3586FF] after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full ${currentTab === 1 && 'after:w-full'}`}>Register</h3>
                </div>
                {
                    currentTab === 0 && <Login></Login>
                }
                {
                    currentTab === 1 && <Register></Register>
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Authentication;