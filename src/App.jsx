import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import CropScanner from "./pages/CropScanner";

export default function App(){
  return <BrowserRouter><Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/crop-scanner" element={<CropScanner/>}/>
  </Routes></BrowserRouter>;
}