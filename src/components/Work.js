import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import investImg from '../assets/port/invess.png'
import shopeeImg from '../assets/port/shopee.png'
import cartImg from '../assets/port/cart.png'
import todoImg from '../assets/port/todolist.png'

const Work = () => {
    return (
        <div className="section min-h-[95vh] lg:min-h-[78vh] flex items-center" id="work">
            <div className="container mx-auto">
                <motion.div 
                    variants={fadeIn('top', 0.5)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7}} 
                    className="border border-dashed border-black lg:mx-16 py-10 mb-12 lg:text-[60px]"
                >
                    <h1 className="text-[50px] lg:text-[70px] font-secondary font-semibold uppercase text-title tracking-wider text-center">
                        My Portfolios
                    </h1>
                </motion.div>
                <motion.div 
                    variants={fadeIn('bottom', 0.5)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7}} 
                    className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6 text-center lg:mx-16"
                >
                    <div className="cursor-pointer porfolios-img">
                        <img src={investImg} className="object-cover" />
                        <ul className="flex">
                            <li className="mr-20"><a href="https://github.com/nguyenvanphu45/next-invest"><AiFillGithub /></a></li>
                            <li><a href="https://nguyenvanphu45.github.io/next-invest/"><AiFillEye /></a></li>
                        </ul>
                    </div>
                    <div className="cursor-pointer porfolios-img">
                        <img src={shopeeImg} className="object-cover" />
                        <ul className="flex">
                            <li className="mr-20"><a href="https://github.com/nguyenvanphu45/shoppe-page"><AiFillGithub /></a></li>
                            <li><a href="https://nguyenvanphu45.github.io/shoppe-page/"><AiFillEye /></a></li>
                        </ul>
                    </div>
                    <div className="cursor-pointer porfolios-img">
                        <img src={cartImg} className="object-cover" />
                        <ul className="flex">
                            <li className="mr-20"><a href="https://github.com/nguyenvanphu45/cart-react"><AiFillGithub /></a></li>
                            <li><a href="https://nguyenvanphu45.github.io/cart-react/"><AiFillEye /></a></li>
                        </ul>
                    </div>
                    <div className="cursor-pointer porfolios-img">
                        <img src={todoImg} className="object-cover" />
                        <ul className="flex">
                            <li className="mr-20"><a href="https://github.com/nguyenvanphu45/todolist-react"><AiFillGithub /></a></li>
                            <li><a href="https://nguyenvanphu45.github.io/todolist-react/"><AiFillEye /></a></li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Work;
