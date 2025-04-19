import React from 'react'
import Link from 'next/link'
import { IoMdArrowRoundDown } from 'react-icons/io'
import { AuroraBackground } from '@/components/ui/aurora-background'
import { DatePickerDemo } from './DatePicker'
import TimePicker from './TimePicker/TimePicker';

const FormPage = () => {
  return (
    <AuroraBackground>
      {/* Full-screen wrapper with relative positioning to layer correctly */}
      <div className="relative z-10 flex items-center justify-center min-h-screen w-full px-6 py-10">
        {/* Form Card */}
        <div className="w-full max-w-6xl bg-white shadow-2xl rounded-2xl p-10 flex flex-col">
          {/* Header */}
          <div className="text-left font-bold text-2xl mb-6">
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
            <h2 className="text-2xl font-bold text-blue-950 mb-2">
              Enter Date of Event
            </h2>
            <div className="border-2 w-10 border-blue-950 mb-4" />
            <DatePickerDemo />

            <h2 className="text-2xl font-bold text-blue-950 mb-2">
              Enter Time of Event
            </h2>
            <div className="border-2 w-10 border-blue-950 mb-4" />
            <TimePicker></TimePicker>
          </div>

          {/* Right column */}
          <div className="flex flex-col w-full md:w-1/2 items-center">
            <h2 className="text-2xl font-bold text-blue-950 mb-2">
              Description of Event
            </h2>
            <div className="border-2 w-10 border-blue-950 mb-4" />
            {/* Add description input or fields here */}
            </div>
          </div>
        </div>
      </div>
    </AuroraBackground>
  )
}

export default FormPage
