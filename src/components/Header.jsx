import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const location = useLocation();

  console.log(location.pathname);

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="/logo.png"
            alt="logo"
            className="h-6 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-6">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-neutral-950 border-b-red-400"
              }`}
              onClick={() => navigate("/")}
            >
              Accueil
            </li>
            {/* [3px] = custom tailwind size */}
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/annonces") &&
                "text-neutral-950 border-b-red-400"
              }`}
              onClick={() => navigate("/annonces")}
            >
              Annonces
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/se-connecter") &&
                "text-neutral-950 border-b-red-400"
              }`}
              onClick={() => navigate("/se-connecter")}
            >
              Se connecter
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
