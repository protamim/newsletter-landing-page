import Image from "next/image";
import Hunt from "@/assets/product-hunt.svg";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between py-4">
        {/* logo */}
        <a href="#" className="text-xl md:text-3xl font-medium text-white">
          📈 Trends
        </a>
        {/* header action button */}
        <button>
          <a href="#">
            <Image src={Hunt} alt="product hunt" className="w-48 md:w-auto" />
          </a>
        </button>
      </div>
    </>
  );
};

export default Header;
