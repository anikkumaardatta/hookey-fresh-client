// 'use client';

// import products from '@/_mock/productData/products';
// import { ProductType } from '@/app/types';
// import React from 'react';
// import Slider from 'react-slick';

// interface ProductProps {
//   productName: string;
// }
// interface Params {
//   params: { productName: string };
// }

// const page = ({ params }: Params) => {
//   const { productName } = params;
//   const product = products.find((product) => product?.name.toLowerCase().split(' ').join('-') === productName);
//   console.log(product);

//   const settings = {
//     customPaging: function (i: any) {
//       return (
//         <a>
//           <img src={`${product?.images[0 + i]}`} />
//         </a>
//       );
//     },
//     dots: true,
//     dotsClass: 'slick-dots slick-thumb ',
//     infinite: true,
//     className: 'max-w-[500px] mx-auto',
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div>
//       <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
//         <div className='slider-container'>
//           <Slider {...settings}>
//             {product?.images.map((image: any) => (
//               <div key={image}>
//                 <img src={image} />
//               </div>
//             ))}
//           </Slider>
//         </div>
//         <div className='productDetails'>
//           <h1 className='text-4xl font-semibold my-6'>{product?.name}</h1>
//           <p className='text-2xl font-semibold my-4'>
//             {product?.currency == 'USD' && '$'} {product?.price}
//           </p>
//           <p className='text-base my-4 text-gray-500'>{product?.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;

'use client';

import products from '@/_mock/productData/products';
import { ProductType } from '@/app/types';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

interface ProductProps {
  productName: string;
}
const page = ({ params }: { params: Promise<{ productName: string }> }) => {
  const [productName, setProductName] = useState<string | null>(null);
  useEffect(() => {
    params.then(({ productName }) => {
      setProductName(productName);
    });
  }, [params]);
  const product = productName
    ? products.find((product) => product?.name.toLowerCase().split(' ').join('-') === productName)
    : null;
  console.log(product);

  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <img src={`${product?.images[0 + i]}`} alt={`Thumbnail ${i}`} />
        </a>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb ',
    infinite: true,
    className: 'max-w-[500px] mx-auto',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <div className='slider-container'>
          <Slider {...settings}>
            {product?.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Product image ${index}`} />
              </div>
            ))}
          </Slider>
        </div>
        <div className='productDetails'>
          <h1 className='text-4xl font-semibold my-6'>{product?.name}</h1>
          <p className='text-2xl font-semibold my-4'>
            {product?.currency === 'USD' && '$'} {product?.price}
          </p>
          <p className='text-base my-4 text-gray-500'>{product?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
