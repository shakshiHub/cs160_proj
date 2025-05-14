import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Include in index.html or global CSS:
// <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700;800;900&display=swap" rel="stylesheet" />

export default function Hero() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Flex container for arrows and hero box */}
      <div className="flex items-center space-x-8">
        {/* Left Arrow for Admin */}
        <a
          href="/AdminSignUpPage"
          className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
        >
          <ArrowLeft size={24} />
          <span className="font-medium">Admin</span>
        </a>

        {/* Hero Box */}
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full text-center">
          <h1
            className="text-black text-5xl font-extrabold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Welcome to Food<span className="text-blue-700">EZ</span>
          </h1>
          <p className="text-gray-500 text-base leading-relaxed">
            where surplus food meets san jose state students.
          </p>
        </div>

        {/* Right Arrow for Students */}
        <a
          href="/StudentSignUpPage"
          className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
        >
          <span className="font-medium">Student</span>
          <ArrowRight size={24} />
        </a>
      </div>
    </div>
  );
}

/*import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className = 'text-center pt-10 px-5'>Hi everyone! so this is just the main page, idk maybe we should make a home screen? But ill link the different webpages on here!</h1>
      <div className="p-3">
      <Link href="/SignInPage">Sign In Page</Link>
      </div>
      <div className="p-3">
        <Link href="/FormPage">Form Page</Link>
      </div>
      <div className="p-3">
        <Link href="/AdminSignUpPage">Admin Sign Up Page</Link>
      </div>
      <div className="p-3">
        <Link href="/StudentSignUpPage">Student Sign Up Page</Link>
      </div>
    </main>
  );
}*/
