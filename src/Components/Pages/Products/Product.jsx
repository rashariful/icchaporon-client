import React from "react";

const Product = ({ product }) => {
  const { brand, category, description, price, title, image } = product;
  console.log(product);
  return (
    <div className="card w-96 bg-base-100 border">
      <figure>
        <img src={image} className="h-96" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-rose-500 font-bold">Price: ${price}</p>
        <div className="card-actions justify-end">
          <label htmlFor="my-modal-3" className="btn">
            Buy now
          </label>
        </div>
      </div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
