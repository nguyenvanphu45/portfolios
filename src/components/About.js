import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import avatar from "../assets/avatar.jpg";
import cv from '../assets/cv.pdf'

const About = () => {
    const [ref, inview] = useInView({
        threshold: 0.5,
    })

    const downloadFileAtURL = (url) => {
        fetch(url)
            .then((response) => response.blob())
            .then((blob) => {
                const blobURL = window.URL.createObjectURL(new Blob([blob]))
                const fileName = url.split('/').pop()
                const aTag = document.createElement("a")
                aTag.href = blobURL;
                aTag.setAttribute("download", fileName)
                document.body.appendChild(aTag)
                aTag.click()
                aTag.remove()
            })
    }

    return (
        <section className="section lg:min-h-[78vh] flex items-center mt-2" id="about" ref={ref}>
            <div className="container mx-auto">
                <motion.div 
                    variants={fadeIn('top', 0.5)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7}} 
                    className="border border-dashed border-black lg:mx-16 py-10 mb-4 lg:text-[60px]"
                >
                    <h1 className="text-[50px] lg:text-[70px] font-secondary font-semibold uppercase text-title tracking-wider text-center">
                        About me
                    </h1>
                </motion.div>
                <div className="flex lg:mx-16 lg:py-12 lg:flex-row lg:items-center lg:gap-x-12">
                    <motion.div
                        variants={fadeIn('right', 0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7}} 
                        className="hidden lg:flex flex-1 max-w-[200px] lg:max-w-[382px] mr-8"
                    >
                        <img src={avatar} className="object-cover" />
                    </motion.div>
                    <motion.div 
                        variants={fadeIn('left', 0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7}} 
                        className="flex-1 py-6 container text-center lg:text-left"
                    >
                        <h3 className="text-[24px] lg:text-[32px] lg:pb-6 pb-4 font-secondary">
                            Tôi là <b className="text-[28px] lg:text-[34px]">Phu Nguyen</b>, a Front-end Developer
                        </h3>
                        <p className="text-[12px] lg:text-[14px] lg:pb-6 pb-4 leading-5">
                            Tôi dành cả ngày với công nghệ HTML, CSS, JavaScript, v.v. Tạo các trang web tuyệt đẹp và tuyệt vời là thứ 
                            tôi sử dụng trong một trong những thư viện JavaScript phổ biến nhất có tên là React. Công cụ 
                            thứ hai mà tôi đề cập là Redux, công cụ mà tôi sử dụng để duy trì quản lý trạng thái của React 
                            và để dễ dàng tạo các trang web kiểu Thương mại điện tử. Google và YouTube là những nguồn tôi thường dùng để 
                            tìm giải pháp cho những vấn đề này.
                        </p>
                        <div className="grid lg:grid-rows-2 lg:grid-flow-col grid-flow-row lg:gap-4 gap-2 lg:pb-6 pb-4">
                            <div className="flex text-[18px] ">
                                <p className="w-[80px] pr-12 font-semibold">Tuổi: </p>
                                <p>21</p>
                            </div>
                            <div className="flex text-[18px]">
                                <p className="w-[80px] pr-12 font-semibold">Email: </p>
                                <p>vanphu04052002@gmail.com</p>
                            </div>
                            <div className="flex text-[18px]">
                                <p className="w-[80px] pr-12 font-semibold">Sđt: </p>
                                <p>0763161092</p>
                            </div>
                            <div className="flex text-[18px]">
                                <p className="w-[80px] pr-12 font-semibold">Github: </p>
                                <a href="https://github.com/nguyenvanphu45" className="text-a cursor-pointer">nguyenvanphu45</a>
                            </div>
                        </div>
                        <button className="btn px-6 py-4" onClick={() => downloadFileAtURL(cv)}>
                            Download CV
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
