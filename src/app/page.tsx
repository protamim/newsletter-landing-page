import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import bgImage from "@/assets/bg-image.png";
import Image from "next/image";

const NewsLetterPage = () => {
  return (
    <>
      <div className="max-w-[1140px] w-full mx-auto px-5 h-screen relative z-40">
        <Header />
        <MainContent />
      </div>
      <div className="fixed right-0 top-0 h-screen -z-10 hidden md:block">
        <Image src={bgImage} alt="bg-image" className="h-screen w-auto" />
      </div>
    </>
  );
};

export default NewsLetterPage;
