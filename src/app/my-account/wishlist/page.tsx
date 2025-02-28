import React from 'react';
import products from '@/_mock/productData/products';
import WishCard from '@/components/wish-card/WishCard';

const page = () => {
  return (
    <div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {products.map((wishProduct, index) => (
          <WishCard key={index} wishProduct={wishProduct} />
        ))}
      </div>
    </div>
  );
};

export default page;
