import { useState } from "react";


const ImageMagnifier = ({ img, curr }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [showMagnifier, setShowMagnifier] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const handleMouseHover = e => {
        const { top, left, width, height } = e.currentTarget.getBoundingClientRect()
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;
        setPosition({x, y})

        setCursorPosition({ x: (e.pageX - left), y: (e.pageY - top) })
    }
    return (
        <div
            onMouseEnter={() => setShowMagnifier(true)}
            onMouseLeave={() => setShowMagnifier(false)}
            onMouseMove={handleMouseHover}
            className={`flex transition-transform ease-out duration-500 relative`}
            style={{ transform: `translateX(-${curr * 100}%)` }}
        >
            {
                img.map((pic, index) => <>
                    <img className={`w-full h-auto`} key={index} src={pic} />

                    {
                        showMagnifier &&
                        <div
                            className="absolute"
                            style={{
                                left: `${cursorPosition.x - 100}px`,
                                top: `${cursorPosition.y - 100}px`,
                                pointerEvents: 'none'
                            }}>
                            <div
                                className="w-[200px] h-[200px]"
                                style={{
                                    backgroundImage: `url(${pic})`,
                                    backgroundPosition: `${position.x}% ${position.y}%`
                                }} />
                        </div>
                    }
                </>)
            }
        </div>
    );
};

export default ImageMagnifier;