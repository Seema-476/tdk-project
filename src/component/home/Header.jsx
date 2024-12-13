import React, { useState } from 'react'
import { HEADER_TITLE } from '../../utils/Helper';

const Header = () => {
    const [isMenuOpen, setOpenNav] = useState(false);
    const toggleMenu = () => {
        setOpenNav(!isMenuOpen)
    }

    return (
        <nav className="bg-blue p-4 duration-700">
            <div className="container mx-auto">
                <div className="lg:block hidden">
                    <div className="flex gap-4">
                        {HEADER_TITLE.map((obj, index) => (
                            <ul key={index} className="flex gap-5 text-start">
                                <li>
                                    <a
                                        href="#"
                                        className="font-normal text-custom-base !text-white leading-custom-xl hover:opacity-[1] duration-700 relative z-30 after:absolute after:contents-[''] after:bg-white after:w-0 after:h-[.80px] after:bottom-0 after:left-0 after:duration-700 hover:after:w-full"
                                    >
                                        {obj.title}
                                    </a>
                                </li>
                            </ul>
                        ))}
                    </div>
                </div>
                <div className="lg:hidden block">
                    <div
                        onClick={toggleMenu}
                        className='menuIcon flex relative z-30 max-sm:w-7 max-sm:h-5 max-lg:w-[38px] max-lg:h-5 max-lg:flex max-lg:justify-between max-lg:flex-col max-lg:cursor-pointer transition ease-linear duration-300 lg:hidden'
                    >
                        {isMenuOpen ? (
                            <>
                                <span className="h-[4px] absolute top-3 w-full bg-white transform rotate-45 rounded transition duration-300"></span>
                                <span className="h-[4px] absolute top-3 w-full bg-white transform -rotate-45 rounded transition duration-300"></span>
                            </>
                        ) : (
                            <>
                                <span className="h-[3px] w-full bg-white ml-auto rounded"></span>
                                <span className="h-[3px] w-full bg-white rounded"></span>
                                <span className="h-[3px] w-full bg-white rounded"></span>
                            </>
                        )}
                    </div>
                    <div className={`menuList gap-6 ${isMenuOpen ? 'max-lg:right-0' : 'max-lg:right-[-100%] !duration-700'} z-20 max-lg:w-full max-lg:fixed max-lg:justify-center max-lg:flex-col max-lg:gap-7 max-lg:top-0 max-lg:bg-deep-blue max-lg:transition-all duration-300 flex items-center max-lg:min-h-screen`}>
                            <div className="flex flex-col gap-4 max-lg:justify-center max-lg:items-center">
                                {HEADER_TITLE.map((obj, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="text-white text-lg font-medium hover:text-custom-base"
                                    >
                                        {obj.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                </div>
            </div>
        </nav>)
}

export default Header