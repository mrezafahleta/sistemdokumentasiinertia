import { Link } from "@inertiajs/inertia-react";

export default function Anchor({
    className = "",
    href = "" ,
    children,
}) {
    return (
        <Link
            href={route(href)}
            className={
                `inline-flex items-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150` + className
            }
           
        >
            {children}
        </Link>
    );
}
