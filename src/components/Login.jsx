import React, { useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App'; // Assuming you have a config file for backend URL
import { toast } from 'react-toastify';

function Login({ setToken }) {
       const [email, setEmail] = useState("");
       const [password, setPassword] = useState("");
       console.log(backendUrl);
       
    const handleLogin = async  (e) => {

        try {
              e.preventDefault();
              const response = await axios.post(backendUrl + '/api/user/admin', {
                  email,
                  password
              });
              if(response.data.success) {
                  // Handle successful login, e.g., set token or redirect
                 setToken(response.data.token); // Assuming the token is returned in the response
                   
              } 
              else{
                toast.error(response.data.message || "Login failed"); // Display error message
              }
          } catch (error) {
              console.error("Login failed:", error);
                toast.error("Login failed, please try again"); // Display error message
          }
     
    }
  return (
    <div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold">Admin Panel</h1>
            <form onSubmit={handleLogin} className="flex flex-col gap-4 bg-white p-6 rounded shadow-md w-80">
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder="Email" className="border p-2 rounded w-full" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" className="border p-2 rounded w-full" />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
            </form>
        </div>
    </div>
  )

}

export default Login;

