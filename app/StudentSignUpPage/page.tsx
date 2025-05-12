'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { MdMailOutline, MdOutlineVpnKey } from 'react-icons/md';
import { FaArrowLeft, FaPhone } from 'react-icons/fa';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { MdDriveFileRenameOutline } from 'react-icons/md';

const StudentSignUpPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { password, confirmPassword, phone } = formData;
    // requirements for password
    const hasUpperCase = [...password].some(char => char >= 'A' && char <= 'Z'); // has at least 1 uppercase
    const hasLowerCase = [...password].some(char => char >= 'a' && char <= 'z'); // has at least 1 lowercase
    const hasNumber = [...password].some(char => char >= '0' && char <= '9'); // has at least 1 number
    const isLong = password.length >= 8; // is 8 chars long

    // requirements for phone number
    const isLongPhone = phone.length == 10; // is 10 chars long (xxx xxx xxxx)
  
    if (!hasUpperCase || !hasLowerCase || !hasNumber || !isLong) {
      alert('Password must be at least 8 characters long and includ: an uppercase letter, a lowercase letter, and a number.');
      return;
    }

    if (!isLongPhone) {
      alert('Phone number must be valid length (10 digits) and only include numbers.');
      return;
    }

    // Validate form
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Send user data to the backend (API route)
    const response = await fetch('/api/StudentSignUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Sign-up successful!');
      // redirect to sign-in page STILL HAVENT SET UP SIGN IN FUNCTION- sorry
      window.location.href = '/SignInPage';
    } else {
      alert('Sign-up failed. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-150">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="rounded-2xl shadow-2xl flex bg-white w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              Food<span className="text-blue-700">EZ</span>
            </div>
            <div className="py-15">
              <h2 className="text-3xl font-bold text-blue-950 mb-2">Spartan Sign Up</h2>
              <div className="border-2 w-10 border-blue-950 inline-block mb-4 mt-1"></div>
              <div className="flex flex-col items-center">
                <form onSubmit={handleSubmit}>
                  <div className="bg-gray-100 w-64 p-2 flex items-center rounded-2xl mb-3 hover:shadow-2xl transition-shadow duration-200">
                    <MdMailOutline className="text-gray-400 mx-2 my-3" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      pattern="^[a-zA-Z0-9._%+-]+@sjsu\.com$"
                      required
                      className="bg-gray-100 outline-none text-m flex-1"
                    />
                  </div>
                  <div className="bg-gray-100 w-64 p-2 flex items-center rounded-2xl mb-3 hover:shadow-2xl transition-shadow duration-200">
                    <MdOutlineVpnKey className="text-gray-400 mx-2 my-3" />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="bg-gray-100 outline-none text-m flex-1"
                    />
                  </div>
                  <div className="bg-gray-100 w-64 p-2 flex items-center rounded-2xl mb-3 hover:shadow-2xl transition-shadow duration-200">
                    <MdOutlineVpnKey className="text-gray-400 mx-2 my-3" />
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      className="bg-gray-100 outline-none text-m flex-1"
                    />
                  </div>
                  <button
                    type="submit"
                    className="border-2 border-blue-950 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-950 hover:text-white text-blue-950 mt-5 transition-colors duration-200"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
          <AuroraBackground className="rounded-tr-2xl rounded-br-2xl py-20 px-12 text-white min-h-131 min-w-100 max-w-112">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold">Additional Info</h2>
              <div className="border-2 w-10 border-white inline-block mb-2 hover:shadow-2xl transition-shadow duration-200"></div>

              <div className="bg-blue-100 w-64 p-2 flex items-center rounded-2xl mb-3 hover:shadow-2xl transition-shadow duration-200">
                    <MdDriveFileRenameOutline className="text-gray-400 mx-2 my-3" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-blue-100 text-black outline-none text-m flex-1"
                    />
                  </div>

                  <div className="bg-blue-100 w-64 p-2 flex items-center rounded-2xl mb-3 hover:shadow-2xl transition-shadow duration-200">
                    <FaPhone className="text-gray-400 mx-2 my-3" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      maxLength={10}
                      className="bg-blue-100 text-black outline-none text-m flex-1"
                    />
                  </div>
                  
            </div>
          </AuroraBackground>
        </div>
        <div className="relative w-full left-58">
          <Link href="/SignInPage" className="absolute left-0 top-5 flex items-center group">
            <div className="scale-130 border-2 border-blue-950 rounded-full p-1 flex items-center justify-center hover:bg-blue-950">
              <FaArrowLeft className="text-blue-950 group-hover:text-white transition-colors duration-200" />
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default StudentSignUpPage;
