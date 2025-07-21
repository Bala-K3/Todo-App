import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Dummy submit handler
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add login logic here
        alert("Logged in!");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 relative">
                <div className="absolute -top-8 -left-8 w-20 h-20 bg-pink-400 rounded-full opacity-30 z-0"></div>
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-indigo-400 rounded-full opacity-30 z-0"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-2 tracking-wide">
                        Todo-App Login
                    </h2>
                    <p className="text-center text-gray-500 mb-6">
                        Organize your day, one task at a time.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                                placeholder="••••••••"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform"
                        >
                            Login
                        </button>
                    </form>
                    <div className="mt-4 flex items-center justify-center">
                        <span className="text-gray-400 mx-2">or</span>
                    </div>
                    <div className="mt-4 flex justify-center">
                        <button
                            type="button"
                            onClick={() => {
                                // Replace with your Google OAuth logic
                                window.location.href = "/api/auth/google";
                            }}
                            className="flex items-center gap-2 w-full justify-center py-3 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-semibold shadow transition"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 48 48">
                                <g>
                                    <path fill="#4285F4" d="M24 9.5c3.54 0 6.7 1.22 9.2 3.23l6.9-6.9C36.44 2.54 30.6 0 24 0 14.82 0 6.73 5.8 2.7 14.1l8.1 6.3C12.8 13.2 17.9 9.5 24 9.5z"/>
                                    <path fill="#34A853" d="M46.1 24.5c0-1.6-.14-3.13-.41-4.6H24v9.1h12.4c-.54 2.9-2.2 5.36-4.7 7.02l7.2 5.6c4.2-3.9 6.6-9.7 6.6-17.12z"/>
                                    <path fill="#FBBC05" d="M10.8 28.4c-1.1-3.2-1.1-6.7 0-9.9l-8.1-6.3C.9 16.1 0 19.9 0 24c0 4.1.9 7.9 2.7 11.2l8.1-6.8z"/>
                                    <path fill="#EA4335" d="M24 48c6.6 0 12.1-2.2 16.1-6.1l-7.2-5.6c-2 1.4-4.7 2.3-8.9 2.3-6.1 0-11.2-4.1-13-9.7l-8.1 6.3C6.7 42.2 14.8 48 24 48z"/>
                                </g>
                            </svg>
                            Sign in with Google
                        </button>
                    </div>
                    <div className="mt-6 text-center">
                        <a
                            href="#"
                            className="text-sm text-indigo-600 hover:underline transition"
                        >
                            Forgot password?
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;