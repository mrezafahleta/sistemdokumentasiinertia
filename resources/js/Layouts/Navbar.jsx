import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function Navbar() {
  return (
      <div>

          <Link
              href={route("login")}
              className="text-sm text-gray-700 dark:text-gray-500 underline"
          >
              Log in
          </Link>

          <Link
              href={route("register")}
              className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
          >
              Register
          </Link>
      </div>
  );
}
