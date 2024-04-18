import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


const useOutsideClick = ref => {
    const [isClicked, setIsClicked] = useState(false);
    const location = useLocation()

    useEffect(() => {
        const handleClickOutside = e => {
            if (ref.current && !ref.current.contains(e.target) && !e.target.closest('#sidebar-toggle-svg')) {
                setIsClicked(true)
            }
            else {
                setIsClicked(false)
            }
        }


        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [ref])
    useEffect(() => {
        setIsClicked(true)
    }, [location])
    return isClicked;
};

export default useOutsideClick;