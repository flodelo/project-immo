import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import Header from "./components/Header";

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profil" element={<Profile/>} />
        <Route path="/se-connecter" element={<SignIn/>} />
        <Route path="/creer-compte" element={<SignUp/>} />
        <Route path="/oubli-mdp" element={<ForgotPassword/>} />
        <Route path="/annonces" element={<Offers/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
