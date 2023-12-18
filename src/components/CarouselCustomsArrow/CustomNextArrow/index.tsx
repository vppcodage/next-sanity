import Image from "next/image";
 
 const CustomNextArrow: React.FC<{
    onClick: () => void;
  }> = ({ onClick }) => {
    return (<button onClick={onClick} className="bg-[white] hover:bg-[#232536] w-[3em] h-[3em] md:w-[3.25em] md:h-[3.25em] rounded-full hover:scale-125 ml-[24px] group">
        <Image
          src="/right-arrow-black.svg"
          alt="Jamstacky"
          className="black block group-hover:hidden"
          width={10}
          height={10}
        />
        <Image
          src="/right-arrow-white.svg"
          alt="Jamstacky"
          className="white hidden group-hover:block"
          width={10}
          height={10}
        />
    </button>);
  };

  export default CustomNextArrow; 