import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="relative bg-[#3586FF] w-full min-h-[100px] px-12 py-5 mt-[100px]">
            <div>
                <div id="wave1" className="absolute bg-[url('/wave.png')] bg-[length:1000px_100px] w-full h-[100px] -top-[100px] left-0"></div>
                <div id="wave2" className="absolute bg-[url('/wave.png')] bg-[length:1000px_100px] w-full h-[100px] -top-[100px] left-0"></div>
                <div id="wave3" className="absolute bg-[url('/wave.png')] bg-[length:1000px_100px] w-full h-[100px] -top-[100px] left-0"></div>
                <div id="wave4" className="absolute bg-[url('/wave.png')] bg-[length:1000px_100px] w-full h-[100px] -top-[100px] left-0"></div>
            </div>
            <footer className="footer p-10 text-white/[0.9]">
                <aside>
                    <p className='font-bold'>MHS <span className='bg-white text-[#3586FF] px-1 rounded'>Fashion</span><br />Providing quality cloths since 2024</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Cloths</a>
                    <a className="link link-hover">Brands</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <Link to={'/about-us'} className="link link-hover">About us</Link>
                    <Link to={'/contact-us'} className="link link-hover">Contact</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                    
                </nav>
            </footer>
        </footer>
    );
};

export default Footer;