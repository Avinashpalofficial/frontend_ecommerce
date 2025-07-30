import React, { use, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Order from "./pages/Order";
import Login from "./components/Login";
const App = () => {
  const [token, setToken] = useState("");

  return (
    <div className=" bg-gray-50 min-h-screen">
      {token === "" ? (
        <Login />
      ) : (
        <>
          <Navbar />
          <hr className="" />
          <div className="flex w-full">
            <Sidebar />
            <div className="flex-1 p-6">
              <Routes>
                <Route path="/add" element={<Add />} />
                <Route path="/list" element={<List />} />
                <Route path="/orders" element={<Order />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
