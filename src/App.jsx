import React, { use, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Order from "./pages/Order";
import Login from "./components/Login";
import { ToastContainer } from 'react-toastify';
 export const backendUrl = import.meta.env.VITE_BACKEND_URL;

 console.log("Backend URL:", backendUrl);
 
const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  useEffect(() => {
    localStorage.setItem("token", token);   //  Store token in localStorage  and this  is key ...value  pair
  }, [token]);

  return (
    <div className=" bg-gray-50 min-h-screen">
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken} />
          <hr className="" />
          <div className="flex w-full">
            <Sidebar />
            <div className="flex-1 p-6">
              <Routes>
                <Route path="/add" element={<Add token={token} />} />
                <Route path="/list" element={<List token={token} />} />
                <Route path="/orders" element={<Order token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
