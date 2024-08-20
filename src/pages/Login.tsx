import React from 'react';
import CustomInput from '../components/CustomInput';

const Login = () => {
  return (
    <div className="min-h-screen w-full bg-blue-800 flex justify-center items-center">
      <div className="w-[400px] bg-white rounded-3xl shadow-xl p-6">
        <div className="text-center text-3xl text-blue-800 font-semibold mb-8">LOGIN</div>

        {/* Email Input */}
        <CustomInput className="mb-4" title="Email" type="email" placeholder="Enter your email" />

        {/* Password Input */}
        <CustomInput className="mb-4" title="Password" type="password" placeholder="Enter your password" />

        {/* Login Button */}
        <button className="w-full bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">Login</button>
      </div>
    </div>
  );
};

export default Login;
