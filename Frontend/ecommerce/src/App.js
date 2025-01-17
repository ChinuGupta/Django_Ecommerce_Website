import React from "react";
import Header from "./components/Header";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from "./components/screens/HomeScreen";
import SignupScreen from "./components/screens/SignupScreen";
import LoginScreen from "./components/screens/LoginScreen";
import About from "./components/screens/About";
import CartScreen from "./components/screens/CartScreen";
import ProductScreen from "./components/screens/ProductScreen"


export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<LoginScreen />} />
        <Route exact path="/signup" element={<SignupScreen />} />
        <Route exact path="/cart" element={<CartScreen />} />
        <Route exact path="/product/:id" element={<ProductScreen/>} />
        <Route exact path="/cart/:id?" element={<CartScreen/>} />
      </Routes>
      
    </Router>
  );
}
