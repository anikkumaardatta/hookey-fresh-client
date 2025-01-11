import products from '@/_mock/productData/products';
import ProductCard from '@/components/product-card/ProductCard';

const ProductsPage = () => {
  return (
    <>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
