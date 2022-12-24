import React from 'react';

const Banner = () => {
    return (
      <section className="">
        <div className="flex gap-5">
          <div>
            <img src="https://dummyimage.com/1020x600" alt="" />
          </div>
          <div className="flex flex-col gap-5">
            <img src="https://dummyimage.com/720x290" alt="" />
            <img src="https://dummyimage.com/720x290" alt="" />
          </div>
        </div>
      </section>
    );
};

export default Banner;