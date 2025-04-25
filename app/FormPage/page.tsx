import React from 'react'
import Link from 'next/link'
import { IoMdArrowRoundDown } from 'react-icons/io'
import { AuroraBackground } from '@/components/ui/aurora-background'
import { DatePickerDemo } from './DatePicker'
import TimePicker from './TimePicker/TimePicker';
import { Textarea } from "@/components/ui/textarea"

const FormPage = () => {
  return (
    <AuroraBackground>
      {/* Full-screen wrapper with relative positioning to layer correctly */}
      <div className="relative z-10 flex items-center justify-center min-h-screen w-full px-6 py-10">
        {/* Form Card */}
        <div className="w-full max-w-6xl bg-white shadow-2xl rounded-2xl p-5 flex flex-col">
          {/* Header */}
          <div className="text-left font-bold mb-6">
            Food<span className="text-blue-700">EZ</span>
          </div>
          <div className="text-center font-bold text-blue-950 text-3xl mb-1">
            Extra Food?
          </div>
          <div className="text-center font-bold text-blue-950 text-3xl mb-4">
            Complete the Form Below
          </div>
          <div className="border-2 w-10 border-blue-950 inline-block mx-auto mb-10" />

          {/* Two-column layout */}
          <div className="flex flex-col md:flex-row gap-10 w-full items-center">
            {/* Left column */}
            <div className="flex flex-col w-full md:w-1/2 items-center">
              <h2 className="text-2xl font-bold text-blue-950 mb-2 mt-5">
                Enter Date of Event
              </h2>
              <div className="border-2 w-10 border-blue-950 mb-8" />
              <DatePickerDemo/>
              <h2 className="text-2xl font-bold text-blue-950 mb-2 mt-5">
                What Food will be Available?
              </h2>
              <div className="border-2 w-10 border-blue-950 mb-4" />
              {/* Add description input or fields here */}
              <Textarea placeholder="EX. Pizza, Sandwiches, Chips, Soda, ..." className="bg-gray-100 border-none text-gray-500 font-normal hover:shadow-2xl w-3/4 h-20 p-4 rounded-md focus:text-blue-950 hover:text-blue-950 placeholder-gray-200 hover:placeholder-blue-950 mb-5"/>
            </div>

            {/* Right column */}
            <div className="flex flex-col w-full md:w-1/2 items-center">
              <h2 className="text-2xl font-bold text-blue-950 mb-2">
                Time that Students can Pickup Food
              </h2>
              <div className="border-2 w-10 border-blue-950 mb-8" />
              <TimePicker></TimePicker>
              <h2 className="text-2xl font-bold text-blue-950 mb-2 mt-5">
                Building and Room Number
              </h2>
              <div className="border-2 w-10 border-blue-950 mb-4" />
              <Textarea placeholder="Ex. Macquarie Hall - Room 212" className="bg-gray-100 border-none text-gray-500 font-normal hover:shadow-2xl w-3/4 h-20 p-4 rounded-md focus:text-blue-950 hover:text-blue-950 placeholder-gray-200 hover:placeholder-blue-950"/>
            </div>
          </div>
          <div className="flex items-center justify-center">
          <Link href="#" className="border-2 border-blue-950 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-950 hover:text-white text-blue-950 mt-10 transition-colors duration-200">Submit</Link>
          </div>
        </div>
      </div>
    </AuroraBackground>
  )
}

export default FormPage
