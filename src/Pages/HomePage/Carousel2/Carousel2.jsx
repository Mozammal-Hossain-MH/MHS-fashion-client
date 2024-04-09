import { useEffect, useRef, useState } from "react";

const Carousel2 = ({ img, running, borderWidth, borderClr, dots }) => {
    const [curr, setCurr] = useState(0);
    const frameRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (running) {
                if (curr < img.length - 1) {
                    setCurr(curr + 1);
                }
                else {
                    setCurr(0);
                }
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [curr, img, running])

    const prev = () => setCurr((curr) => curr === 0 ? img.length - 1 : curr - 1);
    const next = () => setCurr((curr) => curr < img.length - 1 ? curr + 1 : 0);

    useEffect(() => {
        const handleResize = () => {
            if (frameRef.current) {
                const width = frameRef.current.clientWidth + (borderWidth * 2);
                const image = new Image();
                image.src = img[curr];
                image.onload = () => {
                    const aspectRatio = image.width / image.height;
                    frameRef.current.style.height = `${width / aspectRatio}px`
                }
            }
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return window.removeEventListener('resize', handleResize)
    }, [curr, img, borderWidth])


    return (
        <div className={`space-y-5`}>
            <div className="overflow-hidden relative">
                <div
                    className={`flex transition-transform ease-out duration-500`}
                    style={{ transform: `translateX(-${curr * 100}%)` }}
                >
                    {
                        img.map((pic, index) => <img className={`w-full`} key={index} src={pic} />)
                    }
                </div>
                <button onClick={prev} className="absolute z-10 top-1/2 left-2 px-4 py-1 rounded-full shadow text-4xl bg-white/50 text-gray-700 transition-all hover:bg-white/30 hover:scale-110 active:scale-90">
                    <span>&#10094;</span>
                </button>
                <button onClick={next} className="absolute z-10 top-1/2 right-2 px-4 py-1 rounded-full shadow text-4xl bg-white/50 text-gray-700 transition-all hover:bg-white/30 hover:scale-110 active:scale-90">
                    <span>&#10095;</span>
                </button>
                {
                    dots &&
                    <div className="absolute bottom-4 right-0 left-0">
                        <div className="flex justify-center items-center gap-2">
                            {
                                img.map((_, i) => <div
                                    onClick={() => setCurr(i)}
                                    key={i}
                                    className={`transition-all w-2 h-2 rounded-full bg-white ${curr === i ? 'p-2' : 'bg-white/50'}`}
                                />)
                            }
                        </div>
                    </div>
                }
            </div>
            <div className="relative">
                <div className="flex ">
                    {
                        img.map((pic, index) => <img onClick={() => setCurr(index)} className='w-[50px] mr-2' key={index} src={pic} />)
                    }
                </div>
                <div
                    ref={frameRef}
                    style={{
                        transform: `translateX(calc(${curr * 100}% + ${curr * 8}px))`,
                        border: `${borderWidth}px solid ${borderClr}`
                    }}
                    className={`w-[50px] absolute top-0 transition-transform bg-[#fff]/[0.4]`}
                ></div>
            </div>
        </div>
    );
};

export default Carousel2;