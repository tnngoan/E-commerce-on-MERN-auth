import React from "react";
// import { Provider } from "react-redux";
// import store from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
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
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Container>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
