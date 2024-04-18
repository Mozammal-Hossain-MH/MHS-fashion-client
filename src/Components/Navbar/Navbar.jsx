import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { FaAngleDown, FaAngleRight, FaBook, FaCartArrowDown, FaHome } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdCall, IoMdCloseCircleOutline, IoIosLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import './Navbar.css'
import { useRef, useState } from "react";
import { TbCategoryPlus } from "react-icons/tb";
import useOutsideClick from "../../Hooks/useOutsideClick";
import CollectionBar from "../CollectionBar/CollectionBar";
import useAuthContext from "../../Hooks/useAuthContext";
import Swal from 'sweetalert2'


// NavItems Previous Style
// className='relative px-1 after:absolute after:h-1 after:w-0 after:bg-gradient-to-r after:from-[#3a3917] after:via-[#7a7918] after:to-[#acaa2f] after:left-0 after:-bottom-2 after:transition-all after:duration-300 hover:after:w-full'


const Navbar = ({ scrolled }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const [openDropdown, setOpenDropDown] = useState(false);
    const [isMenu, setIsMenu] = useState(true);
    const sidebarRef = useRef(null);
    const outsideClick = useOutsideClick(sidebarRef);
    const { user, logout } = useAuthContext();

    const handleLogout = () => {
        Swal.fire({
            title: "Logout?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Logout!"
        }).then((result) => {
            if (result.isConfirmed) {
                logout()
                    .then(() => {
                        Swal.fire({
                            text: "Logout successful!",
                            icon: "success"
                        });
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        });
    }

    const navItems = <>
        <li className='text-center xl:border-r border-[#000]/[.2] px-1 py-1 xl:mr-1 rounded flex xl:block justify-start hover:bg-[#111]/[0.1]'>
            <Link to={'/'} className="flex items-center">
                <div className="icons w-[30px] mr-1 h-7 text-center mx-auto mt-0 overflow-hidden">
                    <FaHome></FaHome>
                    <FaHome></FaHome>
                </div>
                <div className="text relative h-5 xl:w-full block overflow-hidden uppercase font-medium">
                    <span data-text='Home' className="block text-[#222] xl:text-[12px] relative leading-5 duration-200">Home</span>
                </div>
            </Link>
        </li>
        <li onClick={() => setOpenDropDown(!openDropdown)} className='text-center relative xl:border-r border-[#000]/[.2] px-1 py-1 xl:mr-1 rounded category flex xl:block justify-start '>
            <div>
                <a className="flex items-center">
                    <div className="icons w-[30px] mr-1 h-7 text-center mt-0 mx-auto overflow-hidden">
                        <TbCategoryPlus></TbCategoryPlus>
                        <TbCategoryPlus></TbCategoryPlus>
                    </div>
                    <div className="text relative h-5 w-full block overflow-hidden uppercase font-medium text-start mr-2">
                        <span data-text='Category' className="block text-[#222] xl:text-[12px] relative leading-5 duration-200">Category</span>
                    </div>
                    <div className="angle-icon xl:hidden">
                        {
                            openDropdown ? <FaAngleDown></FaAngleDown> : <FaAngleRight></FaAngleRight>
                        }
                    </div>
                    <div className="angle-icon hidden xl:block">
                        <FaAngleDown></FaAngleDown>
                    </div>
                </a>
                <ul className={`xl:absolute w-[200px] z-50 transition-[height] duration-200 h-0 ${!openDropdown ? 'h-0' : 'h-[120px] xl:h-0'} overflow-hidden translate-y-3 xl:-translate-x-6 bg-white rounded`}>
                    <li className="my-1 py-1 px-2 rounded hover:bg-[#111]/[0.1] relative overflow-hidden">
                        <Link to={'/category/children'} >
                            <span data-text='Children' className="block duration-200">Children</span>
                        </Link>
                    </li>
                    <li className="my-1 py-1 px-2 rounded hover:bg-[#111]/[0.1] relative overflow-hidden">
                        <Link to={'/category/male'}>
                            <span data-text='Men' className="block duration-200">Men</span>
                        </Link>
                    </li>
                    <li className="my-1 py-1 px-2 rounded hover:bg-[#111]/[0.1] relative overflow-hidden">
                        <Link to={'/category/female'}>
                            <span data-text='Women' className="block duration-200">Women</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </li>
        <li className='text-center xl:border-r border-[#000]/[.2] px-1 py-1 xl:mr-1 rounded flex xl:block justify-start hover:bg-[#111]/[0.1]'>
            <Link to={'/contact-us'} className="flex items-center">
                <div className="icons w-[30px] mr-1 h-7 text-center mt-0 mx-auto overflow-hidden ">
                    <IoMdCall></IoMdCall>
                    <IoMdCall></IoMdCall>
                </div>
                <div className="text relative h-5 w-full block overflow-hidden uppercase font-medium">
                    <span data-text='Contact Us' className="block text-[#222] xl:text-[12px] relative leading-5 duration-200">Contact Us</span>
                </div>
            </Link>
        </li>
        <li className='text-center xl:border-r border-[#000]/[.2] px-1 py-1 xl:mr-1 rounded flex xl:block justify-start hover:bg-[#111]/[0.1]'>
            <Link to={'/about-us'} className="flex items-center">
                <div className="icons w-[30px] mr-1 h-7 text-center mt-0 mx-auto overflow-hidden">
                    <FaBook></FaBook>
                    <FaBook></FaBook>
                </div>
                <div className="text relative h-5 w-full block overflow-hidden uppercase font-medium">
                    <span data-text='About Us' className="block text-[#222] xl:text-[12px] relative leading-5 duration-200">About Us</span>
                </div>
            </Link>
        </li>
        <li className='text-center xl:border-r border-[#000]/[.2] px-1 py-1 xl:mr-1 rounded flex xl:block justify-start hover:bg-[#111]/[0.1]'>
            <Link to={'/cart'} className="flex items-center">
                <div className="icons w-[30px] mr-1 h-7 text-center mt-0 mx-auto overflow-hidden">
                    <FaCartArrowDown></FaCartArrowDown>
                    <FaCartArrowDown></FaCartArrowDown>
                </div>
                <div className="text relative h-5 w-full block overflow-hidden uppercase font-medium">
                    <span data-text='Cart' className="block text-[#222] xl:text-[12px] relative leading-5 duration-200">Cart</span>
                </div>
            </Link>
        </li>
        {
            user ? <li onClick={handleLogout} className='text-center xl:border-r border-[#000]/[.2] px-1 py-1 xl:mr-1 rounded flex xl:block justify-start hover:bg-[#111]/[0.1]'>
                <Link className="flex items-center">
                    <div className="icons w-[30px] mr-1 h-7 text-center mt-0 mx-auto overflow-hidden">
                        <IoIosLogOut />
                        <IoIosLogOut />
                    </div>
                    <div className="text relative h-5 w-full block overflow-hidden uppercase font-medium">
                        <span data-text='Logout' className="block text-[#222] xl:text-[12px] relative leading-5 duration-200">Logout</span>
                    </div>
                </Link>
            </li>
                : <li className='text-center xl:border-r border-[#000]/[.2] px-1 py-1 xl:mr-1 rounded flex xl:block justify-start hover:bg-[#111]/[0.1]'>
                    <Link to={'/authentication'} className="flex items-center">
                        <div className="icons w-[30px] mr-1 h-7 text-center mt-0 mx-auto overflow-hidden">
                            <CgProfile></CgProfile>
                            <CgProfile></CgProfile>
                        </div>
                        <div className="text relative h-5 w-full block overflow-hidden uppercase font-medium">
                            <span data-text='Login & Register' className="block text-[#222] xl:text-[12px] relative leading-5 duration-200">Login & Register</span>
                        </div>
                    </Link>
                </li>
        }
    </>

    return (
        <nav className={`${scrolled ? 'h-16' : 'h-24'} transition-all duration-300 bg-[#fff] text-[#000] shadow-xl`}>
            <div className={`max-w-screen-xl mx-auto px-3 h-full flex justify-between items-center`}>
                <div className="xl:hidden" onClick={() => setOpenMenu(true)}>
                    <RiMenu3Fill id="sidebar-toggle-svg" className="text-3xl transition-all hover:scale-110 active:scale-90 cursor-pointer"></RiMenu3Fill>
                </div>
                <div className={`bg-[#000]/[0.5] fixed xl:hidden z-[999] top-0 left-0 w-full h-screen transition-all duration-300 ${openMenu || '-translate-x-full'} ${outsideClick && '-translate-x-full'}`}>
                    <aside ref={sidebarRef} className={`bg-[#fff] fixed xl:hidden overflow-y-scroll z-[1000] top-0 left-0 w-[300px] h-screen transition-all duration-300 ${openMenu || '-translate-x-full'} ${outsideClick && '-translate-x-full'}`}>
                        <div className="mx-3 space-y-5">
                            <div className="space-y-5 sticky top-0 bg-[#fff] z-50">
                                <div className="flex justify-end pt-4">
                                    <IoMdCloseCircleOutline onClick={() => setOpenMenu(false)} className="text-3xl transition-all hover:scale-110 active:scale-90 cursor-pointer"></IoMdCloseCircleOutline>
                                </div>
                                <SearchBar></SearchBar>
                            </div>
                            <div className="grid grid-cols-2">
                                <p onClick={() => setIsMenu(true)} className={`p-2 border-r bg-[#f5f5f5] hover:bg-[#E9E9E9] text-center cursor-pointer relative after:absolute after:h-1 after:w-0 after:bg-[#000] after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full ${isMenu && 'bg-[#E9E9E9] after:w-full'}`}>Menu</p>
                                <p onClick={() => setIsMenu(false)} className={`p-2 bg-[#f5f5f5] hover:bg-[#E9E9E9] text-center cursor-pointer relative after:absolute after:h-1 after:w-0 after:bg-[#000] after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full ${isMenu || 'bg-[#E9E9E9] after:w-full'}`}>Collections</p>
                            </div>
                            {
                                isMenu ? <ul className="relative py-4 navTab xl:hidden space-y-3">
                                    {navItems}
                                </ul>
                                    : <CollectionBar></CollectionBar>
                            }
                        </div>
                    </aside>
                </div>
                <div className="hidden xl:block">
                    <SearchBar></SearchBar>
                </div>
                <ul className='relative navTab hidden xl:flex'>
                    {navItems}
                </ul>
                <h2 className='font-bold text-3xl'>MHS <span className='text-[#3586FF]'>Fashion</span></h2>
            </div>
        </nav>
    );
};

export default Navbar;