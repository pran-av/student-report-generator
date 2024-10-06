/*
import React, { useState } from 'react'
//import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

export default function Component({ studentData }) {
  const [currentDate] = useState(new Date())

 

  //const COLORS = ['#4CAF50', '#FFA000']

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-100 text-blue-800 p-6">
          <h1 className="text-3xl font-bold mb-2">{studentData.name}&apos;s Performance Report</h1>
          <p className="text-lg">Grade: {studentData.grade} | Package: {studentData.package}</p>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-full bg-green-50 border border-green-200 rounded-lg p-4">
            <h2 className="text-2xl font-bold mb-2 text-green-800">Attendance Overview</h2>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-4xl font-bold text-green-600">{studentData.attendance}%</p>
                <p className="text-green-700">Live Classes Attended</p>
              </div>
              
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="text-xl font-bold mb-2 text-blue-800">Video Learning Progress</h3>
            <p className="text-4xl font-bold text-blue-600">{studentData.videoMinutes} minutes</p>
            <p className="text-blue-700">of educational content consumed</p>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h3 className="text-xl font-bold mb-2 text-purple-800">Test Score Performance</h3>
            <div className="flex items-center justify-between">
              <p className="text-4xl font-bold text-purple-600">{studentData.averageTestScore}/10</p>
              
            </div>
            <p className="text-purple-700">Average Chapter Test Score</p>
          </div>
          
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h3 className="text-xl font-bold mb-2 text-orange-800">Last Activity</h3>
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="grid grid-cols-7 gap-2 mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center text-gray-500 text-sm">{day}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {Array(firstDayOfMonth).fill(null).map((_, index) => (
                  <div key={`empty-${index}`} className="h-8"></div>
                ))}
                {days.map((day) => (
                  <div
                    key={day}
                    className={`h-8 flex items-center justify-center rounded-full text-sm
                      ${day === studentData.lastActivity.getDate() ? 'bg-orange-500 text-white' : 'text-gray-700'}`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="col-span-full bg-teal-50 border border-teal-200 rounded-lg p-4">
            <h3 className="text-xl font-bold mb-2 text-teal-800">Total Return on Investment</h3>
            <p className="text-4xl font-bold text-teal-600">₹{studentData.roi.toLocaleString()}</p>
            <p className="text-teal-700">Value Added</p>
          </div>
        </div>
        <div className="bg-gray-100 p-6">
          <div className="w-full text-center">
            <h3 className="text-2xl font-bold mb-2 text-gray-800">Ready to Level Up?</h3>
            <p className="text-lg mb-4 text-gray-600">Upgrade to the {studentData.renewalPackage}</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full text-lg transition duration-300">
              Renew Now for ₹{studentData.renewalAmount}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
*/