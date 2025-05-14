'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';

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
              Food<span className="text-blue-700">EZ</span>
            </div>

            <h2 className="text-3xl font-bold text-blue-950 border-b-5 border-blue-950 inline-block pb-5 mb-2">
            {studentName ? `You're all set, ${studentName}!` : "You're all set!"}
            </h2>

            <div className="border-b-2 border-blue-950 w-full max-w-fit mb-4" />
            <p className="text-md text-gray-800 leading-relaxed">
              ✅ You’ve successfully signed up! <br />
              📬 Check your spam folder for any emails from <strong>ezefood09@gmail.com</strong>. <br />
              🎉 Welcome to <strong>FoodEZ</strong> — real-time alerts when free food hits campus!
            </p>
          </div>
        </div>

        {/* Back arrow */}
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

export default ConfirmationPage;
