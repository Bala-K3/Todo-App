import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-green-100">
            <div className="bg-white shadow-lg rounded-lg p-10 flex flex-col items-center">
                <h1 className="text-5xl font-extrabold mb-4 text-blue-700">Todo App</h1>
                <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
                    Organize your tasks, boost your productivity, and never miss a deadline. Get started by logging in or creating a new account!
                </p>
                <div className="flex space-x-6">
                    <Link
                        to="/login"
                        className="px-8 py-2 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition"
                    >
                        Login
                    </Link>
                    <Link
                        to="/register"
                        className="px-8 py-2 bg-green-600 text-white rounded-full font-semibold shadow hover:bg-green-700 transition"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;