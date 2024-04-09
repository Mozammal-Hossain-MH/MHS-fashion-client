import { Link } from "react-router-dom";
import useGetItems from "../../../Hooks/useGetItems";


const CollectionList = () => {
    const [items] = useGetItems('/items-count');
    const { panjabi, polo, shirt } = items;

    return (
        <div className="flex justify-center flex-wrap">
            <Link to={'/category/men/panjabi'}>
                <div className="w-20 h-auto m-3 text-center space-y-2">
                    <img className="rounded-full w-full" src='/panjabi2.1.jpg' alt="Panjabi" />
                    <p className="font-bold text-2xl">Panjabi</p>
                    <p>{panjabi} Items</p>
                </div>
            </Link>
            <Link to={'/category/men/polo'}>
                <div className="w-20 m-3 text-center space-y-2">
                    <img className="rounded-full w-full" src='/polo2.1.jpeg' alt="Polo" />
                    <p className="font-bold text-2xl">Polo T-shirt</p>
                    <p>{polo} Items</p>
                </div>
            </Link>
            <Link to={'/category/men/shirt'}>
                <div className="w-20 m-3 text-center space-y-2">
                    <img className="rounded-full w-full" src='/shirt7.1.jpeg' alt="Shirt" />
                    <p className="font-bold text-2xl">Shirt</p>
                    <p>{shirt} Items</p>
                </div>
            </Link>
        </div>
    );
};

export default CollectionList;