/*
import React, { useState } from 'react'
//import { Button } from "../components/ui/button"
//import { Box, TextField } from "../components/ui/input"
//import { Box } from 'lucide-react'
//import { Label } from "@/components/ui/label"

export default function StudentDataForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    grade: "",
    package: "",
    attendamce: 0,
    //total: 0,
    videoMinutes: 0,
    averageTestScore: 0,
    lastActivity: "",
    roi: 0,
    renewalPackageName: "",
    renewalPackageAmount: 0
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      ...formData,
      attendance: parseInt(formData.attendance),
      averageTestScore: parseFloat(formData.averageTestScore),
      lastActivity: new Date(formData.lastActivity),
      roi: parseInt(formData.roi),
      renewalAmount: parseInt(formData.renewalAmount)
      
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name">Student Name</label>
        <input id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="grade">Grade</label>
        <input id="grade" name="grade" value={formData.grade} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="package">Package Name</label>
        <input id="package" name="package" value={formData.package} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="attendance">Attendance Percentage</label>
        <input id="attendance" name="attendance" value={formData.attendance} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="videoMinutes">Minutes of Video Watched</label>
        <input id="videoMinutes" name="videoMinutes" value={formData.videoMinutes} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="averageTestScore">Average Chapter Test Score</label>
        <input id="averageTestScore" name="averageTestScore" value={formData.averageTestScore} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="lastActivity">Last Activity yyyy-mm-dd</label>
        <input id="lastActivity" name="lastActivity" value={formData.lastActivity} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="roi">Return on Investment</label>
        <input id="roi" name="roi" value={formData.roi} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="renewalPackage">Renewal Package Name</label>
        <input id="renewalPackage" name="renewalPackage" value={formData.renewalPackage} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="renewalAmount">Renewal Package Discounted Amount</label>
        <input id="renewalAmount" name="renewalAmount" value={formData.renewalAmount} onChange={handleChange} required />
      </div>
      
      <button type="submit">Generate Report</button>
    </form>
  )
}

*/