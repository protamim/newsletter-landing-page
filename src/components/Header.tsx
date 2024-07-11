import Image from 'next/image';
import Hunt from '@/assets/product-hunt.svg'

const Header = () => {
    return (
        <>
            <div className='flex items-center justify-between py-4'>
                {/* logo */}
                <a href="#" className='text-3xl font-medium text-white'>
                📈 Trends
                </a>
                {/* header action button */}
                <button>
                    <a href="#">
                        <Image src={Hunt} width={250} height={54} alt='product hunt' />
                    </a>
                </button>
            </div>
        </>
    );
};

export default Header;