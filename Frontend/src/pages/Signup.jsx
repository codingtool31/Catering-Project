import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
const [isAdmin, setIsAdmin] = useState(false);

//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const response = await fetch('http://localhost:5000/api/signup', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData),
//     });

//     const data = await response.json();
//     if (response.ok) {
//       console.log('Signup successful:', data);
//       alert('Signup successful! You can now log in.');
//     } else {
//       alert(data.message || 'Signup failed');
//     }
//   } catch (error) {
//     console.error('Signup error:', error);
//     alert('Signup failed');
//   }
// };
const handleSubmit = async (e) => {
  e.preventDefault();
  const payload = {
    ...formData,
    role: isAdmin ? 'admin' : 'user',
    adminCode: isAdmin ? formData.adminCode : undefined,
  };

  try {
    const response = await fetch('http://localhost:5000/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    if (response.ok) {
      alert('Signup successful');
    } else {
      alert(data.message || 'Signup failed');
    }
  } catch (error) {
    console.error(error);
    alert('Signup error');
  }
};


  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 py-12">
      {/* Back to Home Button */}
      <div className="absolute top-6 left-6">
        <Link to="/" className="text-black text-3xl hover:text-gray-500">
          &larr; {/* This is the left arrow */}
        </Link>
      </div>

      {/* Signup Form */}
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Create Account</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <div className="relative mt-2">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-gray-300 focus:border-black focus:outline-none py-2 text-gray-900"
                required
              />
            </div>
          </div>

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
{/* Admin Toggle */}
<div className="mt-4">
  <label className="inline-flex items-center">
    <input
      type="checkbox"
      checked={isAdmin}
      onChange={() => setIsAdmin(!isAdmin)}
      className="mr-2"
    />
    Register as Admin
  </label>
</div>

{isAdmin && (
  <div className="mt-4">
    <label htmlFor="adminCode" className="block text-sm font-medium text-gray-700">
      Admin Code
    </label>
    <input
      type="text"
      id="adminCode"
      name="adminCode"
      value={formData.adminCode || ''}
      onChange={handleChange}
      className="w-full bg-transparent border-b-2 border-gray-300 focus:border-black focus:outline-none py-2 text-gray-900"
      required
    />
  </div>
)}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-4 mt-6 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition duration-300 ease-in-out"
          >
            Sign Up
          </button>
        </form>

        {/* Link to Login Page */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-black font-semibold hover:text-gray-500 transition duration-300">
              Log in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
