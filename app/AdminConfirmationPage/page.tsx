'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';


const ConfirmationPage = () => {
  const [studentName, setStudentName] = useState<string | null>(null);

  useEffect(() => {
    const name = localStorage.getItem('studentName');
    if (name) {
      const firstName = name.trim().split(' ')[0];
      setStudentName(firstName);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center">
        <div className="rounded-2xl shadow-2xl flex bg-white w-full max-w-4xl">
          {/* Left: Logo */}
          <div className="w-2/5 flex items-center justify-center rounded-tl-2xl rounded-bl-2xl p-8 bg-white">
            <Image
              src="/logo.jpeg"
              alt="FoodEZ Logo"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>

          {/* Right: Text content */}
          <div className="w-3/5 p-8 flex flex-col items-start justify-center text-left">
            <div className="text-left font-bold mb-2 text-xl">
              <a href="/">
              Food<span className="text-blue-700">EZ</span>
              </a>
            </div>

            <h2 className="text-3xl font-bold text-blue-950 border-b-5 border-blue-950 inline-block pb-5 mb-2">
            {studentName ? `You're all set!` : "You're all set!"}
            </h2>

            <div className="border-b-2 border-blue-950 w-full max-w-fit mb-4" />
            <p className="text-md text-gray-800 leading-relaxed">
                Welcome aboard,<br/>
                 As an admin, you can log into your account at any time and post about surplus food opportunities to the SJSU community in less than a minute!
            </p>
          </div>
        </div>

        {/* Arrows container: Back on left, Login on right */}
        <div className="flex justify-between w-full max-w-4xl mt-6 px-8">
          {/* Back arrow */}
          <Link href="/" className="flex items-center group">
            <div className="scale-130 border-2 border-blue-950 rounded-full p-1 flex items-center justify-center hover:bg-blue-950">
              <FaArrowLeft className="text-blue-950 group-hover:text-white transition-colors duration-200" />
            </div>
            <span className="ml-2 text-blue-950 group-hover:text-white transition-colors duration-200 font-medium">
            </span>
          </Link>

          {/* Login arrow */}
          <Link href="/SignInPage" className="flex items-center group">
            <span className="mr-2 text-blue-950 group-hover:text-blue transition-colors duration-500 font-medium">
              Login
            </span>
            <div className="scale-130 border-2 border-blue-950 rounded-full p-1 flex items-center justify-center hover:bg-blue-950">
              <FaArrowRight className="text-blue-950 group-hover:text-white transition-colors duration-200" />
            </div>
          </Link>
        </div>



      </main>
    </div>
  );
};

export default ConfirmationPage;
