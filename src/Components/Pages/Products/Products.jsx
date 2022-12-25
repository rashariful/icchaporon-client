import React from 'react';
import { useQuery } from "@tanstack/react-query";
import Product from './Product';


const Products = () => {
    
  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const data = await res.json();
      return data;
    },
  });

  console.log(products);
    return (
      <div>
        <h2 className='text-2xl font-semibold text-base-600'>Trending product</h2>
        <div className="grid gap-3 mt-8 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 mb-16">
          {products?.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>
      </div>
    );
};

export default Products;