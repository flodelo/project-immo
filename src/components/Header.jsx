import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Header() {
  const navigate = useNavigate();

  const location = useLocation();

  const [pageState, setPageState] = useState("Se connecter");

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profil");
      } else {
        setPageState("Se connecter");
      }
    });
  }, [auth]);

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
            className="h-7 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-8">
            <li
              className={`cursor-pointer py-3 text-md font-semibold ${
                pathMatchRoute("/") && "text-red-600 border-b-red-500 border-b-[3px]"
              }`}
              onClick={() => navigate("/")}
            >
              Accueil
            </li>
            {/* [3px] = custom tailwind size */}
            <li
              className={`cursor-pointer py-3 text-md font-semibold ${
                pathMatchRoute("/annonces") &&
                "text-red-600 border-b-red-500 border-b-[3px]"
              }`}
              onClick={() => navigate("/annonces")}
            >
              Annonces
            </li>
            <li
              className={`cursor-pointer py-3 text-md font-semibold ${
                (pathMatchRoute("/se-connecter") || pathMatchRoute("/profil")) &&
                "text-red-600 border-b-red-500 border-b-[3px]"
              }`}
              onClick={() => navigate("/profil")}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
