import { useLocation, useParams } from "react-router-dom";
import Card from "../../../Components/Card/Card";
import Footer from "../../../Components/Footer/Footer";
import PageCover from "../../../Components/PageCover/PageCover";
import useGetItems from "../../../Hooks/useGetItems";


const CategoryByGender = () => {
    const params = useParams();
    const [items] = useGetItems(`/category/${params.gender}`)
    const location = useLocation();

    return (
        <div className="space-y-20">
            <PageCover
                name={params.gender}
                pic={'/shirt-cover.jpg'}
            >
            </PageCover>
            <div className="max-w-screen-xl mx-auto px-3 pb-40 space-y-10">
                <div className="flex justify-between">
                    <p className="capitalize">/home{location.pathname}</p>
                    <p className="capitalize">Total: <span className="font-bold">{items.length}</span></p>
                </div>
                {
                    items.length === 0 ? <div>
                        <p className="text-2xl font-bold text-red-500 text-center">No Items Yet</p>
                    </div>
                        : <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {
                                items.map(item => <Card
                                    key={item._id}
                                    item={item}
                                ></Card>)
                            }
                        </div>
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CategoryByGender;