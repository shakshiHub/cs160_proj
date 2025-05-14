import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import Link from 'next/link'

// Include in index.html or global CSS:
// <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700;800;900&display=swap" rel="stylesheet" />

export default function Hero() {
  return (

    <AuroraBackground>
    <div className="flex items-center justify-center min-h-screen">
      {/* Flex container for arrows and hero box */}
      <div className="flex items-center space-x-8">
        {/* Left Arrow for Admin */}
        <div className="relative w-full left-15">
          <Link
            href="AdminSignUpPage"
            className="w-35 border-2 bg-white border-blue-950 rounded-full px-4 py-2 inline-flex items-center justify-center text-blue-950 hover:bg-blue-950 hover:text-white transition-colors duration-200"
          >
            <FaArrowLeft className="mr-2" />
            <span className="font-semibold">Admin</span>
          </Link>
        </div>

        {/* Hero Box */}
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full text-center min-w-100">
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
        <div className="relative w-full">
          <Link
            href="StudentSignUpPage"
            className="w-35 border-2 bg-white border-blue-950 rounded-full px-4 py-2 inline-flex items-center justify-center text-blue-950 hover:bg-blue-950 hover:text-white transition-colors duration-200"
          >
            <FaArrowRight className="mr-2" />
            <span className="font-semibold">Student</span>
          </Link>
        </div>
      </div>
    </div>
    </AuroraBackground>

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
