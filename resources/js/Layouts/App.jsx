import React from "react";
import Navbar from "./Navbar";

export default function App({children}) {
  return <div className="antialiased bg-gray-50 min-h-screen">
    <Navbar/>
    {children}
  </div>;
}
