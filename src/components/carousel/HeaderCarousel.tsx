'use client';

import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

const HeaderCarousel = () => {
  const images = [
    'https://i.ibb.co.com/5GPrFfF/1.jpg',
    'https://i.ibb.co.com/Zx8SNgS/2.png',
    'https://i.ibb.co.com/ctdfFZ8/3.png',
  ];
  const settings: any = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          width={500}
          height={500}
          alt='Picture of the author'
          blurDataURL='data:...'
          placeholder='blur'
        />
      ))}
    </Slider>
  );
};

export default HeaderCarousel;
