import React from 'react';

const AddToCart = () => {
    return (
       <section>
        <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="max-w-screen-lg px-4 md:px-8 mx-auto">
    <div class="mb-6 sm:mb-10 lg:mb-16">
      <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Cart Details</h2>
    </div>

    <div class="flex flex-col gap-4 md:gap-6 mb-6 sm:mb-8">

      <div class="flex flex-wrap border rounded-lg overflow-hidden gap-x-4 sm:gap-y-4 lg:gap-6">
        <a href="#" class="group w-32 sm:w-40 h-48 sm:h-56 block bg-gray-100 overflow-hidden relative">
          <img src="https://images.unsplash.com/photo-1612681621979-fffe5920dbe8?auto=format&q=75&fit=crop&w=200" loading="lazy" alt="Photo by Thái An" class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
        </a>

        <div class="flex flex-col justify-between flex-1 py-4">
          <div>
            <a href="#" class="inline-block text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100 mb-1">Top</a>

            <span class="block text-gray-500">Size: S</span>
            <span class="block text-gray-500">Color: White</span>
          </div>

          <div>
            <span class="block text-gray-800 md:text-lg font-bold mb-1">$15.00</span>

            <span class="flex items-center text-gray-500 text-sm gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>

              In stock
            </span>
          </div>
        </div>

        <div class="w-full sm:w-auto flex justify-between border-t sm:border-none p-4 sm:pl-0 lg:p-6 lg:pl-0">
          <div class="flex flex-col items-start gap-2">
            <div class="w-20 h-12 flex border rounded overflow-hidden">
              <input type="number" value="1" class="w-full focus:ring ring-inset ring-indigo-300 outline-none transition duration-100 px-4 py-2" />

              <div class="flex flex-col border-l divide-y">
                <button class="w-6 flex justify-center items-center flex-1 bg-white hover:bg-gray-100 active:bg-gray-200 leading-none select-none transition duration-100">+</button>
                <button class="w-6 flex justify-center items-center flex-1 bg-white hover:bg-gray-100 active:bg-gray-200 leading-none select-none transition duration-100">-</button>
              </div>
            </div>

            <button class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 text-sm font-semibold select-none transition duration-100">Delete</button>
          </div>

          <div class="pt-3 md:pt-2 ml-4 md:ml-8 lg:ml-16">
            <span class="block text-gray-800 md:text-lg font-bold">$15.00</span>
          </div>
        </div>
      </div>



      <div class="flex flex-wrap border rounded-lg overflow-hidden gap-x-4 sm:gap-y-4 lg:gap-6">
        <a href="#" class="group w-32 sm:w-40 h-48 sm:h-56 block bg-gray-100 overflow-hidden relative">
          <img src="https://images.unsplash.com/photo-1542327897-4141b355e20e?auto=format&q=75&fit=crop&w=200" loading="lazy" alt="Photo by Jessica Radanavong" class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
        </a>

        <div class="flex flex-col justify-between flex-1 py-4">
          <div>
            <a href="#" class="inline-block text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100 mb-1">Jacket</a>

            <span class="block text-gray-500">Size: M</span>
            <span class="block text-gray-500">Color: Black</span>
          </div>

          <div>
            <span class="block text-gray-800 md:text-lg font-bold mb-1">$65.00</span>

            <span class="flex items-center text-gray-500 text-sm gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>

              In stock
            </span>
          </div>
        </div>

        <div class="w-full sm:w-auto flex justify-between border-t sm:border-none p-4 sm:pl-0 lg:p-6 lg:pl-0">
          <div class="flex flex-col items-start gap-2">
            <div class="w-20 h-12 flex border rounded overflow-hidden">
              <input type="number" value="1" class="w-full focus:ring ring-inset ring-indigo-300 outline-none transition duration-100 px-4 py-2" />

              <div class="flex flex-col border-l divide-y">
                <button class="w-6 flex justify-center items-center flex-1 bg-white hover:bg-gray-100 active:bg-gray-200 leading-none select-none transition duration-100">+</button>
                <button class="w-6 flex justify-center items-center flex-1 bg-white hover:bg-gray-100 active:bg-gray-200 leading-none select-none transition duration-100">-</button>
              </div>
            </div>

            <button class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 text-sm font-semibold select-none transition duration-100">Delete</button>
          </div>

          <div class="pt-3 md:pt-2 ml-4 md:ml-8 lg:ml-16">
            <span class="block text-gray-800 md:text-lg font-bold">$65.00</span>
          </div>
        </div>
      </div>



      <div class="flex flex-wrap border rounded-lg overflow-hidden gap-x-4 sm:gap-y-4 lg:gap-6">
        <a href="#" class="group w-32 sm:w-40 h-48 sm:h-56 block bg-gray-100 overflow-hidden relative">
          <img src="https://images.unsplash.com/photo-1590926938512-c0d7e5c39abd?auto=format&q=75&fit=crop&w=200" loading="lazy" alt="Photo by vahid kanani" class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
        </a>

        <div class="flex flex-col justify-between flex-1 py-4">
          <div>
            <a href="#" class="inline-block text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100 mb-1">Business suit</a>

            <span class="block text-gray-500">Size: S</span>
            <span class="block text-gray-500">Color: Black</span>
          </div>

          <div>
            <span class="block text-gray-800 md:text-lg font-bold mb-1">$49.99</span>

            <span class="flex items-center text-gray-500 text-sm gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>

              In stock
            </span>
          </div>
        </div>

        <div class="w-full sm:w-auto flex justify-between border-t sm:border-none p-4 sm:pl-0 lg:p-6 lg:pl-0">
          <div class="flex flex-col items-start gap-2">
            <div class="w-20 h-12 flex border rounded overflow-hidden">
              <input type="number" value="1" class="w-full focus:ring ring-inset ring-indigo-300 outline-none transition duration-100 px-4 py-2" />

              <div class="flex flex-col border-l divide-y">
                <button class="w-6 flex justify-center items-center flex-1 bg-white hover:bg-gray-100 active:bg-gray-200 leading-none select-none transition duration-100">+</button>
                <button class="w-6 flex justify-center items-center flex-1 bg-white hover:bg-gray-100 active:bg-gray-200 leading-none select-none transition duration-100">-</button>
              </div>
            </div>

            <button class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 text-sm font-semibold select-none transition duration-100">Delete</button>
          </div>

          <div class="pt-3 md:pt-2 ml-4 md:ml-8 lg:ml-16">
            <span class="block text-gray-800 md:text-lg font-bold">$49.99</span>
          </div>
        </div>
      </div>

    </div>

    <div class="flex flex-col items-end gap-4">
      <div class="w-full sm:max-w-xs bg-gray-100 rounded-lg p-4">
        <div class="space-y-1">
          <div class="flex justify-between text-gray-500 gap-4">
            <span>Subtotal</span>
            <span>$129.99</span>
          </div>

          <div class="flex justify-between text-gray-500 gap-4">
            <span>Shipping</span>
            <span>$4.99</span>
          </div>
        </div>

        <div class="border-t pt-4 mt-4">
          <div class="flex justify-between items-start text-gray-800 gap-4">
            <span class="text-lg font-bold">Total</span>

            <span class="flex flex-col items-end">
              <span class="text-lg font-bold">$134.98 USD</span>
              <span class="text-gray-500 text-sm">including VAT</span>
            </span>
          </div>
        </div>
      </div>

      <button class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Check out</button>
    </div>
  </div>
</div>
       </section>
    );
};

export default AddToCart;