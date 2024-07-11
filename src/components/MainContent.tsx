import Image from "next/image";
import author1 from "@/assets/author-1.jpg";
import author2 from "@/assets/author-2.jpg";
import author3 from "@/assets/author-3.jpg";
import author4 from "@/assets/author-4.jpg";
import author5 from "@/assets/author-5.jpg";
import author6 from "@/assets/author-6.jpg";

const MainContent = () => {
  return (
    <>
      <div className="max-w-screen-md h-[calc(75%-86px)] flex flex-col justify-center">
        <h2 className="text-[2.7rem] font-bold text-white mb-3">
          Dive into new markets and ideas with 65,289 like-minded founders.
        </h2>
        <p className="mb-10 max-w-[535px]">
          Save 2,000+ hours of market research with free 5-minute reports on AI,
          Crypto and more.
        </p>
        <form className="flex items-center gap-4 mb-10 max-w-[540px]">
          <input
            type="email"
            placeholder="Your Email address"
            className="border border-solid border-[#E54F2D] rounded-lg px-4 py-3 placeholder:text-white bg-transparent flex-1 transition-all focus:outline-none outline-none focus:ring-1 focus:ring-[#E54F2D]"
          />
          <button className="bg-[#E54F2D] px-4 py-3 rounded-lg transition-all ease-in-out duration-300 hover:bg-[#be3a1c] hover:cursor-pointer">
            Get Started {"->"}
          </button>
        </form>
        {/* authors */}
        <div className="flex items-center gap-5 text-sm text-gray-400">
          {/* clients */}
          <div className="flex items-center -space-x-1">
            <Image
              src={author1}
              width={200}
              height={200}
              alt="client"
              className="w-[36px] h-[36px] rounded-full object-fill object-center"
            />
            <Image
              src={author2}
              width={200}
              height={200}
              alt="client"
              className="w-[36px] h-[36px] rounded-full object-fill object-center"
            />
            <Image
              src={author3}
              width={200}
              height={200}
              alt="client"
              className="w-[36px] h-[36px] rounded-full object-fill object-center"
            />
            <Image
              src={author4}
              width={200}
              height={200}
              alt="client"
              className="w-[36px] h-[36px] rounded-full object-fill object-center"
            />
            <Image
              src={author5}
              width={200}
              height={200}
              alt="client"
              className="w-[36px] h-[36px] rounded-full object-fill object-center"
            />
            <Image
              src={author6}
              width={200}
              height={200}
              alt="client"
              className="w-[36px] h-[36px] rounded-full object-fill object-center"
            />
          </div>
          <p>Join 62,564 founders discovering new markets</p>
        </div>
      </div>
    </>
  );
};

export default MainContent;
