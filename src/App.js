import React from "react";
import "./App.css";
// import { Provider } from "react-redux";
// import store from "./store";
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
      <NavigationBar />
    </BrowserRouter>
  );
}

export default App;
