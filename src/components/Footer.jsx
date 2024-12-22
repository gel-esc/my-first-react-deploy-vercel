import { useEffect, useState } from 'react';


export const Footer = () => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 900) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        }
    }, []);

    return (
        <div className='bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-300 fixed bottom-0 w-full'>
            <div className='flex justify-center items-center mt-2 cursor-pointer text-m'>
                {isVisible && (
                    <div
                        onClick={() => scrollToTop()}
                    >
                        <p>Shop Now</p>
                    </div>
                )}
            </div>
            <footer className='flex justify-center items-center botton-0 py-3 px-8 text-m'>
                <p>All right reserved @2024 <a href='https://silviajcn.vercel.app/' target='_blank' rel='noreferrer' className='font-semibold'></a></p>
            </footer>
        </div>
    )
};