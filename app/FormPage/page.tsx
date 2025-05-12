'use client';
import { useState } from 'react';
import { format } from 'date-fns';
import Link from 'next/link'
import { IoMdArrowRoundDown } from 'react-icons/io'
import { AuroraBackground } from '@/components/ui/aurora-background'
import { DatePickerDemo } from './DatePicker'
import TimePicker from './TimePicker/TimePicker';
import { Textarea } from "@/components/ui/textarea"

const FormPage = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    building: '',
    message: '',
  });
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();


    const { date, time, building, message } = formData;
    // requirements for date and time
    
    const hasFormatTime = time.includes(':') && (time.toLowerCase().includes('am') || time.toLowerCase().includes('pm'));
    const hasFormatDate = date.includes(',') && [...date].some(char => char >= '0' && char <= '9');

    if (!hasFormatTime ) {
      alert('Time must be in the format: HH:MM and include am/pm specification. EX: 4:30 pm');
      return;
    }

    if (!hasFormatDate ) {
      alert('Date must be in the format: Month Day, Year. EX: May 14th, 2025');
      return;
    }


    if (!date || !time || !building || !message) {
      alert('Please fill out all fields.');
      return;
    }

    console.log("Submitting form with data:", formData);

    // Send form info to the backend (API route)
    const response = await fetch('/api/FormSubmit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Form submit successful!');
      // not sure where to redirect to after form submit
      window.location.href = '/';
    } else {
      alert('Form submit failed. Please try again.');
    }
  };

  
  return (
    <AuroraBackground>
      <form onSubmit={handleSubmit}
       className="relative z-10 flex items-center justify-center min-h-screen w-full px-6 py-10">
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
              {/* <DatePickerDemo onChange={(date: string) => setFormData({ ...formData, date })}/>*/ }
              <Textarea placeholder="EX. May 14th, 2025" className="bg-gray-100 border-none text-gray-500 font-normal hover:shadow-2xl w-3/4 h-20 p-4 rounded-md focus:text-blue-950 hover:text-blue-950 placeholder-gray-200 hover:placeholder-blue-950 mb-5" 
                value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value }) } />
            
              <h2 className="text-2xl font-bold text-blue-950 mb-2 mt-5">
                What Food will be Available?
              </h2>
              <div className="border-2 w-10 border-blue-950 mb-4" />
              {/* Add description input or fields here */}
              <Textarea placeholder="EX. Pizza, Sandwiches, Chips, Soda, ..." className="bg-gray-100 border-none text-gray-500 font-normal hover:shadow-2xl w-3/4 h-20 p-4 rounded-md focus:text-blue-950 hover:text-blue-950 placeholder-gray-200 hover:placeholder-blue-950 mb-5" 
                value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value }) } />
            </div>

            {/* Right column */}
            <div className="flex flex-col w-full md:w-1/2 items-center">
              <h2 className="text-2xl font-bold text-blue-950 mb-2">
                Time that Students can Pickup Food
              </h2>
              <div className="border-2 w-10 border-blue-950 mb-8" />
              {/*<TimePicker onChange={(time: string) => setFormData({ ...formData, time }) }/>*/}
              <Textarea placeholder="EX. HH:MM" className="bg-gray-100 border-none text-gray-500 font-normal hover:shadow-2xl w-3/4 h-20 p-4 rounded-md focus:text-blue-950 hover:text-blue-950 placeholder-gray-200 hover:placeholder-blue-950 mb-5" 
                value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value }) } />
            
              <h2 className="text-2xl font-bold text-blue-950 mb-2 mt-5">
                Building and Room Number
              </h2>
              <div className="border-2 w-10 border-blue-950 mb-4" />
              <Textarea placeholder="Ex. Macquarie Hall - Room 212" className="bg-gray-100 border-none text-gray-500 font-normal hover:shadow-2xl w-3/4 h-20 p-4 rounded-md focus:text-blue-950 hover:text-blue-950 placeholder-gray-200 hover:placeholder-blue-950" 
                value={formData.building} onChange={(e) => setFormData({ ...formData, building: e.target.value })} />
            </div>
          </div>

          <div className="flex items-center justify-center">
          <button type="submit" className="border-2 border-blue-950 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-950 hover:text-white text-blue-950 mt-10 transition-colors duration-200"> Submit </button>
          </div>
        </div>
      </form>
    </AuroraBackground>
  )
}

export default FormPage
