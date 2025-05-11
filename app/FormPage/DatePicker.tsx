"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


type DatePickerDemoProps = {
  onChange: (date: string) => void;
};


export const DatePickerDemo: React.FC<DatePickerDemoProps> = ({ onChange }) => {
  const [date, setDate] = React.useState<Date>()

  const handleDateChange = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    
    if (selectedDate) {
      onChange(selectedDate.toISOString());
    }
  };



  return (
    <div className="bg-gray-100 w-64 h-12 flex items-center mb-4 rounded-2xl hover:shadow-2xl">
      <CalendarIcon className="text-gray-400 mx-2 h-4 w-4" />

      <Popover>
        <PopoverTrigger asChild>
          <div className="flex-1 h-full">
            <Button
              variant="ghost"
              className={cn(
                "w-full h-full text-left text-m bg-gray-100 outline-none text-gray-400 font-normal px-0 hover:bg-gray-100 focus:ring-0",
                !date && "text-gray-400"
              )}
            >
              <div className="w-full text-left">
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </div>
            </Button>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 bg-white border-none shadow-lg rounded-xl mt-2">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
            className="rounded-md text-blue-950 bg-gray-100"
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
