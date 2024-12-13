import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Innovation = () => {
    return (
        <div className='py-12'>
            <div className="container">
                <div className='max-w-[1440px] mx-auto'>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={3}
                        pagination={{ clickable: true }}
                        autoplay={{ clickable: true }}
                        loop={true}
                        modules={[Pagination, Navigation, Autoplay]}
                    >
                        <SwiperSlide><div className='max-w-[300px] p-4 rounded w-full bg-blue'>
                            <p className='text-2xl text-white '>1.Lorem ipsum</p>
                            <p className='text-base text-white pt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad.</p>
                            <p className='text-base text-white pt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad.</p></div></SwiperSlide>
                        <SwiperSlide><div className='max-w-[300px] p-4 rounded w-full bg-blue'>
                            <p className='text-2xl text-white '>1.Lorem ipsum</p>
                            <p className='text-base text-white pt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad.</p>
                            <p className='text-base text-white pt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad.</p></div></SwiperSlide>
                        <SwiperSlide><div className='max-w-[300px] p-4 rounded w-full bg-blue'>
                            <p className='text-2xl text-white '>1.Lorem ipsum</p>
                            <p className='text-base text-white pt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad.</p>
                            <p className='text-base text-white pt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad.</p></div></SwiperSlide>
                        <SwiperSlide><div className='max-w-[300px] p-4 rounded w-full bg-blue'>
                            <p className='text-2xl text-white '>1.Lorem ipsum</p>
                            <p className='text-base text-white pt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad.</p>
                            <p className='text-base text-white pt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad.</p></div></SwiperSlide>
                        <SwiperSlide><div className='max-w-[300px] p-4 rounded w-full bg-blue'>
                            <p className='text-2xl text-white '>1.Lorem ipsum</p>
                            <p className='text-base text-white pt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad.</p>
                            <p className='text-base text-white pt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad.</p></div></SwiperSlide>
                    </Swiper>
               </div>
            </div>
        </div>
    )
}

export default Innovation