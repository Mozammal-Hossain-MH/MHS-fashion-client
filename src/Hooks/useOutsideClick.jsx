import { useEffect, useState } from "react";


const useOutsideClick = ref => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const handleClickOutside = e => {
            if (ref.current && !ref.current.contains(e.target) && !e.target.closest('#sidebar-toggle-svg')) {
                setIsClicked(true)
            }
            else {
                setIsClicked(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref])
    return isClicked;
};

export default useOutsideClick;