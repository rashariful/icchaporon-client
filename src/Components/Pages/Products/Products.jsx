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
        <h2 className='text-4xl font-semibold text-rose-600'>Trending product</h2>
        <div className="grid gap-10 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {products?.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>
      </div>
    );
};

export default Products;