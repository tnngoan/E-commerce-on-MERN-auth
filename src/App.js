import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  NavigationBar,
  Footer,
  Home,
  Cart,
  Login,
  Register,
  Profile,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
