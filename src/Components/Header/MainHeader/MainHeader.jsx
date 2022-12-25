import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiOutlineGift, HiSearch, HiShoppingCart, HiUsers } from "react-icons/hi";
import logo from "../../../Assets/img/logo.png";
import { AuthContext } from "../../../Context/UserContext";

const MainHeader = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <div className="bg-slate-700 sticky top-0 z-50">
      <div className="navbar max-w-screen-2xl mx-auto sticky top-0 z-50  flex justify-around drop-shadow-sm ">
        <div className="navbar-start flex justify-between gap-5 w-full">
          <div className="dropdown flex justify-between">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <HiMenu></HiMenu>
            </label>
          </div>

          <div>
            <Link to="/" className="w-[100px] md:w-[125px] relative">
              <img
                alt="Ichaporon"
                src={logo}
                className="w-24 h-24"
                decoding="async"
                data-nimg="responsive"
              />
            </Link>
          </div>

          <div className="grow hidden lg:block relative">
            <form
              method="post"
              className="h-10 md:h-11 flex items-center rounded overflow-hidden bg-white"
            >
              <input
                type="search"
                placeholder="Search"
                className="font-SFProDisplayMedium h-full px-4 outline-none grow"
                value=""
              />
              <button type="submit" className="h-full px-3 text-primary text-2xl">
                <HiSearch className="h-6"></HiSearch>
              </button>
            </form>
          </div>

          <div className="navbar-center hidden lg:flex gap-10">
            <div className="flex items-center gap-2">
              <div>
                <HiOutlineGift className="text-4xl text-orange-500"></HiOutlineGift>
              </div>
              <div>
                <p className="text-gray-100 text-xl">offers</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div>
                <HiShoppingCart className="text-4xl text-orange-500"></HiShoppingCart>
              </div>
              <div>
                <Link to="/card" className="text-gray-100 text-xl">
                  Cart
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div>
                <HiUsers className="text-4xl text-orange-500"></HiUsers>
              </div>
              <div>
                <Link to="/login" className="text-gray-100 text-xl">
                  Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
