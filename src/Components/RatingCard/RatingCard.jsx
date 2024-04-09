import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import './RatingCard.css'

const RatingCard = ({ item }) => {
    const { name, rating, review } = item;
    return (
        <div className={`space-y-3 text-center lgWidthRc mr-3`}>
            <p className="font-bold text-sm">{name}</p>
            <div className='flex justify-center'>
                <Rating
                    style={{ maxWidth: 80 }}
                    value={rating}
                    readOnly
                />
            </div>
            <p className="text-xs text-[#000]/[0.5]">{review}</p>
        </div>
    );
};

export default RatingCard;