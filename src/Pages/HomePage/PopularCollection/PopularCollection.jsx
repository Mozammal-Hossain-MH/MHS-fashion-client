import Card from "../../../Components/Card/Card";
import useGetItems from "../../../Hooks/useGetItems";


const PopularCollection = () => {
    const [items] = useGetItems('/items/popular');
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {
                items.map(item => <Card 
                key={item._id}
                item={item}
                ></Card>)
            }
        </div>
    );
};

export default PopularCollection;