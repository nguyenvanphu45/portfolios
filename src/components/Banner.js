import React from "react";

import { Link } from "react-scroll";
import { fadeIn } from '../variants.js'
import { motion } from 'framer-motion'
import { FaGithub, FaFacebookF } from "react-icons/fa";
import { SiGmail } from 'react-icons/si'
import avatar from '../assets/avatar.jpg'

const Banner = () => {
    return (
        <section className="section min-h-[95vh] lg:min-h-[78vh] flex items-center" id="home">
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
                    <div className="flex-1 text-center font-secondary lg:text-left">
                        <motion.h1
                            variants={fadeIn('up', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7}}
                            className="text-[36px] lg:text-[50px] mb-6 font-semibold uppercase"
                        >
                            Hi there!
                        </motion.h1>
                    
                        <motion.div
                            variants={fadeIn('up', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7}} 
                            className="mb-2 text-[36px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]"
                        >
                            <span className="mr-4 text-black">I'm</span>
                            <motion.h1
                                variants={fadeIn('up', 0.5)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.7}}
                                className="d-inline lg:text-[70px] font-semibold font-secondary text-yellow"
                            >
                                Phu Nguyen
                            </motion.h1>
                        </motion.div>

                        <motion.div
                            variants={fadeIn('up', 0.5)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7}}
                            className="bg-yellow d-inline w-[200px] pl-4 mb-6"
                        >
                            <p className="text-black font-semibold uppercase">Front-end developer</p>
                        </motion.div>

                        <motion.p 
                            variants={fadeIn('up', 0.8)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7}}
                            className="mb-8 max-w-lg lg:mx-0 text-black"
                        >
                            Em là sinh viên năm 3 trường Đại học Đông Á chuyên ngành công nghệ phần mềm.
                            Với các kỹ năng HTML, CSS, JavaScript (ReactJS) và có khả năng đọc hiểu Tiếng Anh
                        </motion.p>

                        <motion.div
                            variants={fadeIn('up', 0.8)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7}}
                            className="mb-6"
                        >
                            <button className="btn btn-lg t-upper">
                                <Link
                                    to="about" 
                                    smooth={true}
                                    spy={true}
                                    activeClass="active" 
                                    className="cursor-pointer"
                                >
                                    More about me
                                </Link>
                            </button>
                            {/* <a href="#" className="text-yellow btn-link">My portfolio</a> */}
                        </motion.div>

                        {/* <motion.div 
                            variants={fadeIn('up', 0.8)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7}}
                            className="ml-4 flex text-[20px] gap-x-6 max-w-max"
                        >
                            <a href="#" className="cursor-pointer text-white border-yellow border p-2 rounded-full">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="cursor-pointer text-white border-yellow border p-2 rounded-full">
                                <FaGithub />
                            </a>
                            <a href="#" className="cursor-pointer text-white border-yellow border p-2 rounded-full">
                                <SiGmail />
                            </a>
                        </motion.div> */}
                    </div>
                    <motion.div
                        variants={fadeIn('left', 0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7}} 
                        className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
                    >
                        <img src={avatar} className="object-cover" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
