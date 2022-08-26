import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./Sidebar";

export default function Backend({children}) {

    const {auth,flash} = usePage().props

     flash.message &&
         toast.success(flash.message, {
             position: "top-right",
         });


  return (
      <div className="relative w-full min-h-screen block  md:flex">
          <Sidebar />
          <div><ToastContainer/></div>
          <div className="w-full md:ml-[240px] p-7 bg-gray-50">{children}
          </div>
      </div>
  );
}
