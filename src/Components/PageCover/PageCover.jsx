

const PageCover = ({pic, name}) => {
    return (
        <div className="w-full relative flex justify-center items-center">
            <img src={pic} />
            <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold p-6 bg-[#fff] text-[#000]/[0.5] capitalize absolute rounded">{name} Collection</h1>
        </div>
    );
};

export default PageCover;