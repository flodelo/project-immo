import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import Header from "./components/Header";
import CreateListing from "./pages/CreateListing";
import PrivateRoute from "./components/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<PrivateRoute />}>
            <Route path="/profil" element={<Profile />} />
          </Route>
          <Route path="/se-connecter" element={<SignIn />} />
          <Route path="/creer-compte" element={<SignUp />} />
          <Route path="/oubli-mdp" element={<ForgotPassword />} />
          <Route path="/annonces" element={<Offers />} />
          <Route path="/publier-annonce" element={<PrivateRoute />}>
            <Route path="/publier-annonce" element={<CreateListing />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default App;
