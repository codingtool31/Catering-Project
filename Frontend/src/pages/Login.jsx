
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Form Submitted', formData);

    // Simulate successful login
    // In a real-world scenario, you would authenticate the user here
    navigate('/dashboard');  // Redirect to the Dashboard page upon successful login
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 py-12">
      {/* Back to Home Button */}
      <div className="absolute top-6 left-6">
        <Link to="/" className="text-black text-3xl hover:text-gray-500">
          &larr; {/* This is the left arrow */}
        </Link>
      </div>

      {/* Login Form */}
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Log In</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <div className="relative mt-2">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-gray-300 focus:border-black focus:outline-none py-2 text-gray-900"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative mt-2">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-gray-300 focus:border-black focus:outline-none py-2 text-gray-900"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-4 mt-6 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition duration-300 ease-in-out"
          >
            Log In
          </button>
        </form>

        {/* Link to Signup Page */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-black font-semibold hover:text-gray-500 transition duration-300">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
