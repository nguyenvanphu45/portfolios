import React from "react";
import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Nav = () => {
    return (
        <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
            <div className="container mx-auto">
                <div className="w-full bg-yellow h-[50px] backdrop-blur-2xl rounded-full max-w-[460px]
                mx-auto px-5 flex justify-between items-center text-2xl text-black">
                    <Link 
                        to="home" 
                        smooth={true}
                        spy={true}
                        offset={-200}
                        activeClass="active" 
                        className="cursor-pointer w-[60px] h-[60px] flex items-center"
                    >
                        <BiHomeAlt />
                    </Link>
                    <Link 
                        to="about" 
                        smooth={true}
                        spy={true}
                        activeClass="active" 
                        className="cursor-pointer w-[60px] h-[60px] flex items-center"
                    >
                        <BiUser />
                    </Link>
                    <Link 
                        to="services" 
                        smooth={true}
                        spy={true}
                        activeClass="active" 
                        className="cursor-pointer w-[60px] h-[60px] flex items-center"
                    >
                        <BsClipboardData />
                    </Link>
                    <Link 
                        to="work" 
                        smooth={true}
                        spy={true}
                        activeClass="active" 
                        className="cursor-pointer w-[60px] h-[60px] flex items-center"
                    >
                        <BsBriefcase />
                    </Link>
                    <Link 
                        to="contact" 
                        smooth={true}
                        spy={true}
                        activeClass="active" 
                        className="cursor-pointer w-[60px] h-[60px] flex items-center"
                        >
                        <BsChatSquare />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
