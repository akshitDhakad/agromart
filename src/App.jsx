import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/home";
import Login from "./components/Login";
import Error from "./components/error";
import Register from "./components/register";
import Seller from "./components/Seller";
import ForgetPassword from "./components/forgetPassword";
import Preloader from "./components/Preloader";
import Contact from "./components/Contact";
import Admin from "./components/Admin";
import Advertisement from "./components/Advertisement";
import "./App.css";
import SellerPofile from "./components/SellerProfile";
import CardDetails from "./components/CardDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/seller-dashboard" element={<Seller />} />
        <Route path="/seller-dashboard/profile" element={<SellerPofile />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/preloader" element={<Preloader />} />
        <Route path="/advertisement-plans" element={<Advertisement />} />
        <Route path="/card-details/:id" element={<CardDetails />} />
        {/* protected Routes  */}
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
