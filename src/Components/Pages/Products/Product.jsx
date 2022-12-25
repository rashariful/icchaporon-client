import React from "react";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { brand, category, description, price, title, image ,id} = product;
  console.log(product);
  return (
    <Link to={`/product-details/${id}`} className="card h-96 bg-base-100 border">
      <figure>
        <img src={image} className="h-full p-5" alt="Shoes" />
      </figure>

      <div className="card-body">
        <h2 className="">{title}</h2>
        <p className="text-rose-500 font-bold">Price: ${price}</p>

        <div className="mt-3">
          <button className="flex items-center gap-3 bg-slate-200 sm:flex-none hover:bg-slate-300 active:bg-slate-700 focus-visible:ring ring-slate-300 text-slate-600 text-sm  rounded-md outline-none transition duration-100 px-8 py-2">
            Add to cart
            <BsCartPlus className="text-xl text-slate-600"></BsCartPlus>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Product;
