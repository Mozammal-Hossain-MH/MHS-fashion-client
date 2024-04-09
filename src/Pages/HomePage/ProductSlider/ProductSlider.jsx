import { useEffect, useState } from "react";
import Card from "../../../Components/Card/Card";
import RatingCard from "../../../Components/RatingCard/RatingCard";


const ProductSlider = ({ items, id, rating, isRunning }) => {
    const box = document.getElementById(`${id}`);
    const [cardWidth, setCardWidth] = useState(0);
    const [startX, setStartX] = useState(null);


    const prev = () => {
        box.scrollLeft = box.scrollLeft - cardWidth
    }
    const next = () => {
        box.scrollLeft = box.scrollLeft + cardWidth
    }

    const getEventX = e => {
        if (e.touches && e.touches.length > 0) {
            return e.touches[0].clientX;
        }

        else if (e.changedTouches && e.changedTouches.length > 0) {
            return e.changedTouches[0].clientX;
        }

        else if (e.clientX) {
            return e.clientX;
        }
    }

    const handleSwipeStart = e => {
        setStartX(getEventX(e));
    }

    const handleSwipeEnd = e => {
        const width = box.clientWidth
        const endX = getEventX(e);
        const gap = endX - startX;

        if (gap > 30) {
            box.scrollLeft = box.scrollLeft - width
        }
        else if (gap < -30) {
            box.scrollLeft = box.scrollLeft + width
        }
    }


    useEffect(() => {
        const interval = setInterval(() => {
            if (isRunning) {
                if (box) {

                    items.forEach(() => {
                        setCardWidth(box.querySelector('div').clientWidth + 11.5);
                    });

                    box.scrollLeft = box.scrollLeft + cardWidth
                    if (box.clientWidth + Math.ceil(box.scrollLeft) >= box.scrollWidth) {
                        box.scrollLeft = 0;
                    }
                }
            }
        }, 3000);
        return () => clearInterval(interval)
    }, [box, cardWidth, items, isRunning])




    return (
        <div
            className="product-carousel relative overflow-hidden"
            onTouchStart={handleSwipeStart}
            onTouchEnd={handleSwipeEnd}
            onMouseDown={handleSwipeStart}
            onMouseUp={handleSwipeEnd}
        >
            <button onClick={prev} className="absolute top-1/2 left-0 z-10 px-4 py-1 rounded-full shadow text-4xl bg-white/40 text-gray-700 transition-all hover:bg-white/20 hover:scale-110 active:scale-90">
                <span>&#10094;</span>
            </button>
            <button onClick={next} className="absolute top-1/2 right-0 z-10 px-4 py-1 rounded-full shadow text-4xl bg-white/40 text-gray-700 transition-all hover:bg-white/20 hover:scale-110 active:scale-90">
                <span>&#10095;</span>
            </button>
            <div id={`${id}`} className="flex w-full overflow-hidden scroll-smooth">
                {
                    rating ? items.map(item =>
                        <RatingCard
                            key={item._id}
                            item={item}
                        ></RatingCard>)
                        : items.map(item =>
                            <Card
                                key={item._id}
                                item={item}
                                slider={true}
                            ></Card>)
                }
            </div>
        </div>
    );
};

export default ProductSlider;