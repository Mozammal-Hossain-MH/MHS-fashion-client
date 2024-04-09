
const SectionTitle = ({topTitle, bottomTitle}) => {
    return (
        <div className="max-w-[300px] mx-auto text-center"> 
            <p className="text-[#3586FF] text-xl">{topTitle}</p>
            <h1 className="text-3xl font-bold mt-2">{bottomTitle}</h1>
            <div className="border-b shadow w-full"></div>
        </div>
    );
};

export default SectionTitle;