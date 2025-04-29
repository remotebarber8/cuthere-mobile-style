
import { useState } from "react";

interface TimeSelectorProps {
  onSelectTime: (time: string) => void;
}

export default function TimeSelector({ onSelectTime }: TimeSelectorProps) {
  const [selectedDay, setSelectedDay] = useState("today");
  const [selectedTime, setSelectedTime] = useState("12:00 PM");
  
  const days = [
    { id: "today", label: "Today" },
    { id: "tomorrow", label: "Tomorrow" },
    { id: "wednesday", label: "Wed, 1 May" },
    { id: "thursday", label: "Thu, 2 May" },
  ];
  
  const times = [
    "9:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "1:00 PM", "2:00 PM",
    "3:00 PM", "4:00 PM", "5:00 PM",
    "6:00 PM", "7:00 PM", "8:00 PM",
  ];
  
  const handleTimeSelection = (time: string) => {
    setSelectedTime(time);
    onSelectTime(time);
  };
  
  return (
    <div className="mb-6">
      <h2 className="font-medium mb-3">Select Date & Time</h2>
      
      <div className="mb-4">
        <div className="flex overflow-x-auto pb-2 -mx-2 px-2 hide-scrollbar">
          {days.map((day) => (
            <button
              key={day.id}
              onClick={() => setSelectedDay(day.id)}
              className={`py-2 px-4 rounded-full mr-2 whitespace-nowrap ${
                selectedDay === day.id
                  ? "bg-primary text-white" 
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {day.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-3">
        {times.map((time) => (
          <button
            key={time}
            onClick={() => handleTimeSelection(time)}
            className={`py-2 px-2 rounded-lg text-sm ${
              selectedTime === time 
                ? "bg-primary text-white" 
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
}
