import { ProductType } from '@/app/types';
import ProductCard from '@/components/product-card/ProductCard';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import Slider from 'react-slick';

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <IoIosArrowForward className={'text-4xl text-gray-500 hover:text-dark duration-300 -mt-7 z-40'} />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black', borderRadius: 100 }}
      onClick={onClick}
    />
  );
}

interface ProductsProps {
  products: any;
}
const ProductShowcase: React.FC<ProductsProps> = ({ products = [{}] }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    arrows: true,
    pauseOnDotsHover: false,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: '',
    nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  return (
    <div className='rounded bg-light p-4 text-dark'>
      <div className='slider-container'></div>
      <h2 className='text-2xl font-semibold py-3 border-b-4'>Vegetables</h2>
      <div className='py-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 content-center gap-4'>
        <div className='hidden lg:block max-w-64 py-2 border-gray-200 rounded-lg'>
          <a href='#'>
            <img className='rounded-lg' src='https://i.ibb.co.com/WnbLY95/vegetable.jpg' alt='' />
          </a>
        </div>
        <div className='col-span-4'>
          <div className='slider-container'>
            <Slider {...settings}>
              {products.map((product: any, index: number) => (
                <ProductCard key={index} product={product} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;

{
}
