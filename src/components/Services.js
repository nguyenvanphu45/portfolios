import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { AiFillHtml5, AiFillControl } from "react-icons/ai";
import { BsPhone, BsFillMenuButtonWideFill, BsFillDatabaseFill } from "react-icons/bs";

const Services = () => {
    return (
        <div className="section min-h-[95vh] lg:min-h-[78vh] flex items-center" id="services">
            <div className="container mx-auto">
                <motion.div 
                    variants={fadeIn('top', 0.5)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7}} 
                    className="border border-dashed border-black lg:mx-16 py-10 mb-12 lg:text-[60px]"
                >
                    <h1 className="text-[50px] lg:text-[70px] font-secondary font-semibold uppercase text-title tracking-wider text-center">
                        My Services
                    </h1>
                </motion.div>
                <motion.div 
                    variants={fadeIn('bottom', 0.5)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7}} 
                    className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8 text-center lg:mx-16"
                >
                    <div className="bg-white p-6 animation-box cursor-pointer">
                        <div className="flex items-center justify-center text-[26px] rounded-full bg-yellow w-[50px] h-[50px] text-center mx-auto">
                            <AiFillHtml5 />
                        </div>
                        <h4 className="font-semibold text-[24px] my-4">Web Development</h4>
                        <p className="text-[14px] leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin pharetra tortor.</p>
                    </div>
                    <div className="bg-white p-6 animation-box cursor-pointer">
                        <div className="flex items-center justify-center text-[26px] rounded-full bg-yellow w-[50px] h-[50px] text-center mx-auto">
                            <BsPhone />
                        </div>
                        <h4 className="font-semibold text-[24px] my-4">App Development</h4>
                        <p className="text-[14px] leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin pharetra tortor.</p>
                    </div>
                    <div className="bg-white p-6 animation-box cursor-pointer">
                        <div className="flex items-center justify-center text-[26px] rounded-full bg-yellow w-[50px] h-[50px] text-center mx-auto">
                            <AiFillHtml5 />
                        </div>
                        <h4 className="font-semibold text-[24px] my-4">Web design</h4>
                        <p className="text-[14px] leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin pharetra tortor.</p>
                    </div>
                    <div className="bg-white p-6 animation-box cursor-pointer">
                        <div className="flex items-center justify-center text-[26px] rounded-full bg-yellow w-[50px] h-[50px] text-center mx-auto">
                            <AiFillControl />
                        </div>
                        <h4 className="font-semibold text-[24px] my-4">Responsive Web</h4>
                        <p className="text-[14px] leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin pharetra tortor.</p>
                    </div>
                    <div className="bg-white p-6 animation-box cursor-pointer">
                        <div className="flex items-center justify-center text-[26px] rounded-full bg-yellow w-[50px] h-[50px] text-center mx-auto">
                            <BsFillMenuButtonWideFill />
                        </div>
                        <h4 className="font-semibold text-[24px] my-4">UX/UI Design</h4>
                        <p className="text-[14px] leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin pharetra tortor.</p>
                    </div>
                    <div className="bg-white p-6 animation-box cursor-pointer">
                        <div className="flex items-center justify-center text-[26px] rounded-full bg-yellow w-[50px] h-[50px] text-center mx-auto">
                            <BsFillDatabaseFill />
                        </div>
                        <h4 className="font-semibold text-[24px] my-4">Database</h4>
                        <p className="text-[14px] leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin pharetra tortor.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Services;
