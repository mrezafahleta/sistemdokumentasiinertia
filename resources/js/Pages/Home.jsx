import React from "react";
import App from '@/Layouts/App';
import {Link , Head} from '@inertiajs/inertia-react'

export default function Home() {
  return <div className="relative w-full container mx-auto">
    <Head title="Home"/>
    <div className="text-center">
      <h1 className="font-bold text-3xl">Sistem Dokumentasi</h1>
    </div>
    <div className="grid grid-cols-3 gap-x-5 mt-5">
        <div className="bg-white rounded-sm shadow-md w-full h-auto p-5">
          <h1>Title</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, nesciunt sunt! Minima harum obcaecati maiores reiciendis sapiente atque modi veniam eaque possimus! Consequatur, atque maxime. Repudiandae ad excepturi iusto asperiores.</p>
        </div>
        <div className="bg-white rounded-sm shadow-md w-full h-auto p-5">
          <h1>Title</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, nesciunt sunt! Minima harum obcaecati maiores reiciendis sapiente atque modi veniam eaque possimus! Consequatur, atque maxime. Repudiandae ad excepturi iusto asperiores.</p>
        </div>
        <div className="bg-white rounded-sm shadow-md w-full h-auto p-5">
          <h1>Title</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, nesciunt sunt! Minima harum obcaecati maiores reiciendis sapiente atque modi veniam eaque possimus! Consequatur, atque maxime. Repudiandae ad excepturi iusto asperiores.</p>
        </div>
    </div>
  </div>;
}


Home.layout = page => <App  children={page}/>