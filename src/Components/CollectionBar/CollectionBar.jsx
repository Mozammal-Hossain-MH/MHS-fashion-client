import { Link } from "react-router-dom";
import './CollectionBar.css'

const CollectionBar = () => {
    const collections = <>
        <li className="my-1 py-1 px-2 lg:border-r lg:mr-1 rounded hover:bg-[#111]/[0.1] relative overflow-hidden">
            <Link to={'/category/men/panjabi'} >
                <span data-text='Panjabi' className="block duration-200">Panjabi</span>
            </Link>
        </li>
        <li className="my-1 py-1 px-2 lg:border-r lg:mr-1 rounded hover:bg-[#111]/[0.1] relative overflow-hidden">
            <Link to={'/category/men/polo'} >
                <span data-text='Premium Polo' className="block duration-200">Premium Polo</span>
            </Link>
        </li>
        <li className="my-1 py-1 px-2 lg:border-r lg:mr-1 rounded hover:bg-[#111]/[0.1] relative overflow-hidden">
            <Link to={'/category/men/shirt'} >
                <span data-text='Shirt' className="block duration-200">Shirt</span>
            </Link>
        </li>
    </>
    return (
        <ul className="collection flex flex-col lg:flex-row items-center justify-center">
            {collections}
        </ul>
    );
};

export default CollectionBar;