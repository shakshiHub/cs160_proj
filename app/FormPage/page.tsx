import React from 'react'
import Link from 'next/link'
import { IoMdArrowRoundDown } from "react-icons/io";
import { AuroraBackground } from "@/components/ui/aurora-background";

const FormPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-150">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="rounded-2xl shadow-2xl flex flex-col items-center bg-white w-full max-w-7xl px-8 py-10 mt-10">
        <div className="text-left font-bold w-full">
                Food<span className="text-blue-700">EZ</span>
              </div>
          <div className = "text-center font-bold w-full text-blue-950 text-3xl">
            Extra Food?
          </div>
          <div className = "text-center font-bold w-full text-blue-950 text-3xl">
            Complete the Form Below
          </div>
          <div className="border-2 w-15 border-blue-950 inline-block mb-4 mt-1 mx-auto"></div>

          {/* Row layout for the full page body */}
          <div className="flex flex-row justify-center items-start gap-8 w-full">
            
            {/* Column 1: Form Content */}
            <div className="flex flex-col w-1/2 items-center">
    
              <div className="py-4 text-center w-full">
                <h2 className="text-3xl font-bold text-blue-950 m-2">
                  Enter Date and Time of Event
                </h2>
                <div className="border-2 w-10 border-blue-950 inline-block mb-4 mt-1 mx-auto"></div>
                
              </div>
            </div>

            {/* Column 2: Placeholder for anything else */}
            <div className="flex flex-col w-1/2 items-center">
                <div className="py-4 text-center w-full">
                    <h2 className="text-3xl font-bold text-blue-950 m-2">
                    Description of Event
                    </h2>
                    <div className="border-2 w-10 border-blue-950 inline-block mb-4 mt-1 mx-auto"></div>
                </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default FormPage;
