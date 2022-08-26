import { Link } from "@inertiajs/inertia-react";
export default function Header({
    title,
    href="",
    anchorLabel
}) {
  return (
      <div>
          <div className="flex justify-between items-center">
              <h1 className="font-bold text-2xl text-slate-500">
                {title}
              </h1>
  
          </div>
          <div className="w-full bg-gray-700 h-[1px] mt-5 mb-4"></div>
      </div>
  );
}
