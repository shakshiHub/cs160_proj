'use client';

import React, { useState } from 'react';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import './TimePickerStyles.css'; // Import custom styles
import { Clock as ClockIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';


type TimePickerClientProps = {
  onChange: (time: string) => void;
};



const TimePickerClient: React.FC<TimePickerClientProps> = ({ onChange }) => {
  const [time, setTime] = useState<string | null>('10:00'); // Store time in 24-hour format
  const [isPopoverOpen, setIsPopoverOpen] = useState(false); // State to control popover visibility

  const formatTime = (value: string | null) => {
    if (!value) return '';
    const [hours, minutes] = value.split(':').map(Number);
    const isPM = hours >= 12;
    const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
    return `${formattedHours}:${minutes.toString().padStart(2, '0')} ${isPM ? 'PM' : 'AM'}`;
  };

  const handleConfirm = () => {

    if (time) {
      onChange(time); // should send val back
      setIsPopoverOpen(false);
    }
  };

  return (
    <div className="bg-gray-100 w-64 h-12 flex items-center mb-4 rounded-2xl hover:shadow-2xl">
      <ClockIcon className="text-gray-400 mx-2 h-4 w-4" />

      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
        <PopoverTrigger asChild>
          <div className="flex-1 h-full">
            <Button
              variant="ghost"
              className={cn(
                "w-full h-full text-left text-m bg-gray-100 outline-none text-gray-400 font-normal px-0 hover:bg-gray-100 focus:ring-0",
                !time && "text-gray-400"
              )}
            >
              <div className="w-full text-left">
                {time ? formatTime(time) : <span>Pick a time</span>}
              </div>
            </Button>
          </div>
        </PopoverTrigger>
        <PopoverContent
          align="start" // Aligns the popover to the left edge of the trigger
          sideOffset={4} // Adds spacing between the trigger and the popover
          className={cn(
            "w-64 bg-gray-100 shadow-lg rounded-2xl p-4 mt-2",
            "text-gray-500 -translate-x-5"
          )}
          style={{
            transform: 'translateX(-10px)', // Shifts the popover 10px to the left
            border: 'none',
          }}
        >
          <div className="rounded-md bg-gray-100 text-black">
            <div className="border-2 border-gray-300 rounded-md p-2">
              <TimePicker
                onChange={setTime} // Directly update the time in 24-hour format
                value={time} // Pass the time in 24-hour format
                disableClock={true} // Hides the clock icon
                format="h:mm a" // Display the time in 12-hour format with AM/PM
                className="w-full text-black"
              />
            </div>
            <div className="flex justify-center items-center mt-4">
              <button type="button" 
                onClick={handleConfirm}
                className="border-2 border-blue-950 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-950 hover:text-white text-blue-950"
              >
                Confirm
              </button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default TimePickerClient;