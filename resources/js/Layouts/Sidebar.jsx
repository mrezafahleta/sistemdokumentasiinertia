import React, { useState } from "react";
import { Link } from "@inertiajs/inertia-react";



export default function Sidebar() {
    const [menu, setMenu] = useState(false);
    return (
        <div className="md:fixed z-[1] top-0 bg-gray-800 h-auto md:block   md:items-start  md:h-full left-0  w-full md:w-60   md:overflow-y-auto">
            <div className="p-5 md:p-7 w-full">
                <div className="flex justify-between md:justify-center">
                    <h1 className="text-2xl text-gray-100 font-bold shrink-0">
                        SIDOI
                    </h1>
                    <button onClick={() => setMenu(!menu)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            color="white"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 md:hidden"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </div>

                <div className={`${menu ? "block" : "hidden"} md:block`}>
                    <div className="w-full bg-gray-700 h-[1px] mt-5 mb-1"></div>
                    <ul className="mt-2">
                        <Link href={route("dashboard")}>
                            <li className="py-2 px-5 md:px-1 font-semibold hover:font-bold text-gray-50 w-full hover:cursor-pointer hover:bg-white hover:text-gray-400 rounded-md">
                                Dashboard
                            </li>
                        </Link>
                        <Link href={route("table-document")}>
                            <li className="py-2 px-5 md:px-1 font-semibold hover:font-bold text-gray-50 w-full hover:cursor-pointer hover:bg-white hover:text-gray-400 rounded-md">
                                Dokumentasi
                            </li>
                        </Link>
                        <Link href={route("table-document")}>
                            <li className="py-2 px-5 md:px-1 font-semibold hover:font-bold text-gray-50 w-full hover:cursor-pointer hover:bg-white hover:text-gray-400 rounded-md">
                                Artikel
                            </li>
                        </Link>
                        <Link href={route("table-document")}>
                            <li className="py-2 px-5 md:px-1 font-semibold hover:font-bold text-gray-50 w-full hover:cursor-pointer hover:bg-white hover:text-gray-400 rounded-md">
                                Report
                            </li>
                        </Link>
                        <Link href={route("table-document")}>
                            <li className="py-2 px-5 md:px-1 font-semibold hover:font-bold text-gray-50 w-full hover:cursor-pointer hover:bg-white hover:text-gray-400 rounded-md">
                                Logout
                            </li>
                        </Link>

                    </ul>
                </div>
            </div>
        </div>
    );
}
