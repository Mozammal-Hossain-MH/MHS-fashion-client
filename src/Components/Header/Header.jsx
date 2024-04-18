import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import CollectionBar from '../CollectionBar/CollectionBar';


const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const scrolledValue = () => {
            const isScrolled = window.scrollY > 0;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled)
            }
        }
        window.addEventListener('scroll', scrolledValue)

        return () => window.removeEventListener('scroll', scrolledValue)
    }, [scrolled])


    return (
        <header className={`fixed  ${scrolled ? 'top-0' : 'top-6'} w-full z-50`}>
            <Navbar scrolled={scrolled}></Navbar>
            <div className="hidden xl:block">
                {
                    scrolled || <div className='bg-[#f6f6f6] w-full h-12 flex justify-center items-center'>
                        <CollectionBar></CollectionBar>
                    </div>
                }
            </div>
        </header>
    );
};

export default Header;
