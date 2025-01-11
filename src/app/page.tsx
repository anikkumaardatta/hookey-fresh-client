'use client';

import React from 'react';

import ProductCard from '@/components/product-card/ProductCard';
import products from '@/_mock/productData/products';
import HeaderCarousel from '@/components/carousel/HeaderCarousel';
import ProductShowcase from '@/shared/productShowcase/ProductShowcase';

export default function Home() {
  return (
    <>
      <main className=''>
        <HeaderCarousel />
        <div className='my-20'>
          <ProductShowcase products={products} />
          <ProductShowcase products={products} />
          <ProductShowcase products={products} />
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </main>
    </>
  );
}
