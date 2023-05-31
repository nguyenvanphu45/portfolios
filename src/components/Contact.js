import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
    return (
        <section className="lg:section py-16" id="contact">
            <div className="container mx-auto">
                <motion.div 
                    variants={fadeIn('top', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7}} 
                    className="border border-dashed border-black lg:mx-16 py-10 mb-12 lg:text-[60px]"
                >
                    <h1 className="text-[50px] lg:text-[70px] font-secondary font-semibold uppercase text-title tracking-wider text-center">
                        Contact
                    </h1>
                </motion.div>
                <form className="flex flex-col lg:flex-row lg:mx-16">
                    <motion.div 
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7}} 
                        className="flex-1"
                    >
                        <div>
                            <h4 className="text-xl uppercasse text-yellow font-medium mb-2 tracking-wide">Get in touch</h4>
                            <h2 className="text-[45px] lg:text-[60px] leading-none mb-12">
                                Let's work <br /> together!
                            </h2>
                        </div>
                    </motion.div>
                    <motion.div 
                        variants={fadeIn('left', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7}} 
                        className="flex-1 mb-12"
                    >
                        <input 
                            className="bg-transparent border-b border-gray-500 py-3 outline-none w-full 
                                placeholder:text-gray-500 focus-border transition-all"
                            type='text'
                            placeholder="Your name"
                        />
                        <input 
                            className="bg-transparent border-b border-gray-500 py-3 outline-none w-full 
                                placeholder:text-gray-500 focus-border transition-all"
                            type='text'
                            placeholder="Your email"
                        />
                        <textarea 
                            className="bg-transparent border-b border-gray-500 py-8 outline-none w-full 
                                placeholder:text-gray-500 focus-border transition-all resize-none mb-8"
                            placeholder="Your message"
                        ></textarea>
                        <button className="btn px-6 py-4">
                            Send message
                        </button>
                    </motion.div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
