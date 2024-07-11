import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import bgImage from "@/assets/bg-image.png";
import Image from "next/image";

const NewsLetterPage = () => {
  return (
    <>
      <div className="max-w-[62rem] w-full mx-auto px-5 h-screen relative z-40">
        <Header />
        <MainContent />
      </div>
      <div className="fixed right-0 top-0 h-full w-[848px] z-10">
        <Image src={bgImage} width={1162} height={1619} alt="bg-image" />
      </div>
    </>
  );
};

export default NewsLetterPage;
