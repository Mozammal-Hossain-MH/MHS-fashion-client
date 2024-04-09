import { useLocation, useParams } from "react-router-dom";
import useGetItems from "../../../../Hooks/useGetItems";
import Footer from "../../../../Components/Footer/Footer";
import PageCover from "../../../../Components/PageCover/PageCover";
import Card from "../../../../Components/Card/Card";


const MenItems = () => {
    const params = useParams();
    const [items] = useGetItems(`/category/men/${params.itemName}`)
    const location = useLocation();

    return (
        <div className="space-y-20">
            <PageCover
                name={params.itemName}
                pic={params.itemName === 'shirt' ? '/shirt-cover.jpg' : params.itemName === 'polo' ? '/polo-cover.jpg' : '/panjabi-cover.jpg'}
            >
            </PageCover>
            <div className="max-w-screen-xl mx-auto px-3 pb-40 space-y-10">
                <div className="flex justify-between">
                    <p className="capitalize">/home{location.pathname}</p>
                    <p className="capitalize">Total {params.itemName}: <span className="font-bold">{items.length}</span></p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {
                        items.map(item => <Card
                            key={item._id}
                            item={item}
                        ></Card>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MenItems;