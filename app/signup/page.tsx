"use client";
import React, { useEffect, useState } from 'react';

const Page = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        


    })


    const collectData = async () => {
        if (!name || !email || !password) {
            setError("All fields are required.");
            return;
        }

        console.warn(name, email, password);
        setError("");
        setLoading(true);

        try {
            let result = await fetch("http://localhost:5000/register", {
                method: "POST",
                body: JSON.stringify({ name, email, password }),
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            const data = await result.json();
            console.log(data);

            if (result.ok) {
                localStorage.setItem("user", JSON.stringify(data));
                alert("Registration successful!");
                // Redirect or perform another action after successful registration
            } else {
                setError(data.message || "Registration failed. Please try again.");
            }

        } catch (err) {
            console.error("Error:", err);
            setError("An error occurred. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="bg-gray-800 p-10 rounded-2xl shadow-2xl w-full max-w-md transform transition-all hover:scale-105">
                <h1 className="text-4xl font-bold text-center text-white mb-6">Secure Register</h1>

                {/* Display error message if any */}
                {error && <div className="text-red-500 text-center mb-4">{error}</div>}

                {/* Username Input */}
                <input 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    className="inputBox w-full p-4 mb-4 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                    type="text" 
                    placeholder="Username" 
                />

                {/* Email Input */}
                <input 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    className="inputBox w-full p-4 mb-4 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                    type="email" 
                    placeholder="Email" 
                />

                {/* Password Input */}
                <input 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    className="inputBox w-full p-4 mb-4 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                    type="password" 
                    placeholder="Password" 
                />

                {/* Submit Button */}
                <button 
                    onClick={collectData} 
                    className="w-full py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-transform transform hover:scale-105" 
                    type="button"
                    disabled={loading}
                >
                    {loading ? "Registering..." : "Register"}
                </button>    
            </div>
        </div>
    );
}

export default Page;
