import React, { useContext } from 'react';
import {
  FaBox,
  FaBoxOpen,
  FaCalendarAlt,
  FaCartPlus,
  FaHome,
  FaShoppingCart,
  FaUserAlt,
} from "react-icons/fa";
import { Link, Outlet } from 'react-router-dom';
import MainHeader from '../../Components/Header/MainHeader/MainHeader';
import { AuthContext } from '../../Context/UserContext';
import useAdmin from '../../hook/useAdmin';
import useBuyer from '../../hook/useBuyer';
import useSeller from '../../hook/useSeller';


const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
     const [admin] = useAdmin(user);
     const [seller] = useSeller(user);
     const [buyer] = useBuyer(user);
    
    
    return (
      <div>
        <MainHeader></MainHeader>
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-drawer"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content">
            <Outlet></Outlet>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="dashboard-drawer"
              className="drawer-overlay"
            ></label>

            <ul className="menu p-4 w-80 bg-white rounded-t-md text-base-content">
              <img
                src={user?.photoURL}
                className="w-20 h-20 rounded-full mx-auto border border-primary drop-shadow-md shadow-md"
                alt=""
              />
              <h3 className="text-center text-lg font-bold my-3">
                {user?.displayName}
              </h3>
              <li className="hover:bg-primary rounded-md hover:text-gray-200">
                <Link to="/dashboard">
                  <FaHome className="w-6 h-6 text-gray-500"></FaHome>
                  <span class="ml-3">My Dashboard</span>
                </Link>
              </li>
              {buyer && (
                <>
                  <li className="hover:bg-primary rounded-md hover:text-gray-200">
                    <Link to="/dashboard/bookings">
                      <FaShoppingCart className="w-6 h-6 text-gray-500"></FaShoppingCart>
                      <span class="ml-3">My Orders</span>
                    </Link>
                  </li>
                  <li className="hover:bg-primary rounded-md hover:text-gray-200">
                    <Link to="/dashboard/addproduct">
                      <FaCartPlus className="w-6 h-6 text-gray-500"></FaCartPlus>
                      <span class="ml-3">Ad product</span>
                    </Link>
                  </li>
                  <li className="hover:bg-primary rounded-md hover:text-gray-200">
                    <Link to="/dashboard/my-products">
                      <FaBox className="w-6 h-6 text-gray-500"></FaBox>
                      <span class="ml-3">my product</span>
                    </Link>
                  </li>
                </>
              )}

              {admin && (
                <>
                  <li className="hover:bg-primary rounded-md hover:text-gray-200">
                    <Link to="/dashboard/users/seller">
                      <FaUserAlt className="w-6 h-6 text-gray-500"></FaUserAlt>
                      <span class="ml-3">seller</span>
                    </Link>
                  </li>
                  <li className="hover:bg-primary rounded-md hover:text-gray-200">
                    <Link to="/dashboard/users/buyer">
                      <FaUserAlt className="w-6 h-6 text-gray-500"></FaUserAlt>
                      <span class="ml-3">buyer</span>
                    </Link>
                  </li>
                </>
              )}

              {seller && (
                <div>
                  <li className="hover:bg-primary rounded-md hover:text-gray-200">
                    <Link to="/dashboard/addproducts">
                      <FaCartPlus className="w-6 h-6 text-gray-500"></FaCartPlus>
                      <span class="ml-3">Add Product</span>
                    </Link>
                  </li>

                  <li className="hover:bg-primary rounded-md hover:text-gray-200">
                    <Link to="/dashboard/myproducts">
                      <FaBoxOpen className="w-6 h-6 text-gray-500"></FaBoxOpen>
                      <span class="ml-3">My Products</span>
                    </Link>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
};

export default DashboardLayout;