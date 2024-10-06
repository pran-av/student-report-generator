import React, { useState } from 'react'

export default function Component() {


    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-blue-100 text-blue-800 p-6">
            <input
              type="text"
              placeholder="Student's Full Name"
              className="text-3xl font-bold mb-2 bg-transparent border-b border-blue-300 focus:outline-none focus:border-blue-500 w-full"
            />
            <div className="flex flex-col space-y-2">
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Grade"
                  className="text-lg bg-transparent border-b border-blue-300 focus:outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder="Exam"
                  className="text-lg bg-transparent border-b border-blue-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              <input
                type="text"
                placeholder="Current Purchase"
                className="text-lg bg-transparent border-b border-blue-300 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
  
          <div className="p-6 space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h2 className="text-2xl font-bold mb-2 text-green-800">Your Return on Investment</h2>
              <div className="flex justify-between items-end">
                <div>
                  <input
                    type="number"
                    placeholder="Return on Investment"
                    className="text-4xl font-bold text-green-700 bg-transparent border-b border-green-400 focus:outline-none focus:border-green-600 w-48"
                  />
                  <p className="text-green-600">₹ worth of value added</p>
                  <p className="text-sm text-green-500 mt-2">Initial Investment = ₹
                    <input
                      type="number"
                      placeholder="Initial Investment"
                      className="bg-transparent border-b border-green-400 focus:outline-none focus:border-green-600 w-24"
                    />
                  </p>
                </div>
                <div className="text-left">
                  <p>
                    <input
                        type="string"
                        placeholder="4x"
                        className="bg-transparent text-4xl font-bold text-green-700 bg-transparent border-b border-green-400 focus:outline-none focus:border-green-600 w-24"
                    />
                  </p>
                  <p className="text-green-600">increase</p>
                </div>
              </div>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2 text-blue-800">Live Classes</h3>
                <input
                  type="number"
                  placeholder="Classes Attended"
                  className="text-3xl font-bold text-blue-700 bg-transparent border-b border-blue-400 focus:outline-none focus:border-blue-600 w-full"
                />
                <p className="text-blue-600">classes attended</p>
                <input
                  type="number"
                  placeholder="Value Added"
                  className="text-sm text-blue-600 bg-transparent border-b border-blue-400 focus:outline-none focus:border-blue-600 w-full mt-2"
                />
                <p className="text-blue-600 text-sm">₹ value added</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2 text-purple-800">Tests</h3>
                <input
                  type="number"
                  placeholder="Tests Attempted"
                  className="text-3xl font-bold text-purple-700 bg-transparent border-b border-purple-400 focus:outline-none focus:border-purple-600 w-full"
                />
                <p className="text-purple-600">tests attempted</p>
                <input
                  type="number"
                  placeholder="Value Added"
                  className="text-sm text-purple-600 bg-transparent border-b border-purple-400 focus:outline-none focus:border-purple-600 w-full mt-2"
                />
                <p className="text-purple-600 text-sm">₹ value added</p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2 text-orange-800">Videos</h3>
                <input
                  type="number"
                  placeholder="Videos Watched"
                  className="text-3xl font-bold text-orange-700 bg-transparent border-b border-orange-400 focus:outline-none focus:border-orange-600 w-full"
                />
                <p className="text-orange-600">videos watched</p>
                <input
                  type="number"
                  placeholder="Value Added"
                  className="text-sm text-orange-600 bg-transparent border-b border-orange-400 focus:outline-none focus:border-orange-600 w-full mt-2"
                />
                <p className="text-orange-600 text-sm">₹ value added</p>
              </div>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2 text-teal-800">Attendance Overview</h3>
                <input
                  type="number"
                  placeholder="Attendance Percentage"
                  className="text-3xl font-bold text-teal-700 bg-transparent border-b border-teal-400 focus:outline-none focus:border-teal-600 w-full"
                />
                <p className="text-teal-600">% live classes attended</p>
              </div>
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2 text-indigo-800">Self Study Overview</h3>
                <input
                  type="number"
                  placeholder="Minutes of Video Watched"
                  className="text-3xl font-bold text-indigo-700 bg-transparent border-b border-indigo-400 focus:outline-none focus:border-indigo-600 w-full"
                />
                <p className="text-indigo-600">minutes of content consumed</p>
              </div>
            </div>
  
            <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
              <h3 className="text-xl font-bold mb-2 text-pink-800">Test Performance</h3>
              <input
                type="number"
                placeholder="Chapter Test Score"
                className="text-3xl font-bold text-pink-700 bg-transparent border-b border-pink-400 focus:outline-none focus:border-pink-600 w-24"
              />
              <span className="text-3xl font-bold text-pink-700">/10</span>
              <p className="text-pink-600">average chapter test score</p>
            </div>
          </div>
  
          <div className="bg-gray-100 p-6 text-center">
            <h3 className="text-2xl font-bold mb-2 text-gray-800">Avail Renewal Offer?</h3>
            <p className="text-lg mb-4 text-gray-600">Upgrade to</p>
            <input
              type="text"
              placeholder="Renewal Package Name"
              className="text-2xl font-bold text-gray-800 bg-transparent border-b border-gray-400 focus:outline-none focus:border-gray-600 mb-4 text-center w-full max-w-md"
            />
            <div className="space-y-4">
              <div>
                <span className="text-2xl font-bold text-gray-500 relative">
                  <span className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-500"></span>
                  ₹
                  <input
                    type="number"
                    placeholder="Strikeoff Amount"
                    className="bg-transparent border-b border-gray-400 focus:outline-none focus:border-gray-600 w-32 text-center"
                  />
                </span>
              </div>
              <div>
                <span className="text-3xl font-bold text-gray-800">₹
                  <input
                    type="number"
                    placeholder="Discount Amount"
                    className="bg-transparent border-b border-gray-400 focus:outline-none focus:border-gray-600 w-32 text-center"
                  />
                </span>
              </div>
            </div>
            <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full text-lg transition duration-300">
              Renew Now
            </button>
          </div>
        </div>
      </div>
    )
  }