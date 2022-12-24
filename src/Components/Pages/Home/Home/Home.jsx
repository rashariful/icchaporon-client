import React from "react";
import Products from "../../Products/Products";
import Banner from "../Banner/Banner";
import Futures from "../Futures/Futures";

const Home = () => {
  return (
    <div className="max-w-screen-2xl mx-auto mt-10">
      <section>
        <Banner></Banner>
      </section>
      <section>
       <Futures></Futures>
      </section>
      <section className="mt-36">
      
      <Products></Products>
      </section>
    </div>
  );
};

export default Home;
