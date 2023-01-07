import React from 'react';
import { BsCartPlus } from "react-icons/bs";
import { Link } from 'react-router-dom';

const DiscountPage = ({product}) => {
  const { discountPrice, originalPrice, title, thumbnail, _id } = product;

    return (
      <Link
        to={`/product-details/${_id}`}
        className="card h-96 bg-white border shadow-sm"
      >
        <figure>
          <img src={thumbnail} className="h-full mt-5" alt="Shoes" />
        </figure>

        <div className="card-body">
          <p className="text-sm">
            {title ? title.slice(0, 200) : "N/A"}
          </p>
          <div class="flex flex-col mt-3">
            <span class="text-gray-800 lg:text-lg font-bold">
              <span className="font-extrabold">৳</span>
              {discountPrice}
            </span>
            <span class="text-red-500 line-through mb-0.5">
              <span className="text-xl">৳</span>
              {originalPrice}
            </span>
          </div>

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

export default DiscountPage;