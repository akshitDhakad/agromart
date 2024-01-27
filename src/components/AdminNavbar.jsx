import React from "react";
import { Link } from "react-router-dom";
import { FaCircleUser, FaPlus, FaClipboardList } from "react-icons/fa6";

function AdminNavbar({ products, setProducts }) {
  return (
    <div className="min-h-min bg-slate-900">
      <div className="flex justify-between p-5">
        <div>
          <Link to={"/"}>
            <h1 className="text-white text-2xl tracking-widest p-0 m-0">
              Agromart
            </h1>
            <p className="text-xs text-white text-center p-0 m-0">
              Admin Dashborard
            </p>
          </Link>
        </div>
        <div className="flex items-center gap-x-5">
          {/* User Profile  */}
          {/* <Link
            to={"/seller-dashboard/profile"}
            className="flex items-center justify-center gap-x-1 text-white
            hover:cursor-pointer"
          >
            <span>
              <FaCircleUser className="text-lg" />
            </span>
            <span>Profile</span>
          </Link> */}
          {/* Add Products  */}
          <Link
            to={"/admin"}
            onClick={() => setProducts(true)}
            className="flex items-center justify-center gap-x-1 text-white hover:cursor-pointer"
          >
            <span>
              <FaClipboardList />
            </span>
            <span>All Sellers</span>
          </Link>
          {/* Add Products  */}
          {/* <div
            onClick={() => setProducts(false)}
            className="flex items-center justify-center gap-x-1 text-white hover:cursor-pointer"
          >
            <span>
              <FaPlus />
            </span>
            <span>Add Product</span>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default AdminNavbar;
