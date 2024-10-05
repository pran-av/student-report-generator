import React, { useState } from 'react'
import StudentDataForm from './StudentDataForm'
import ActivityReport from './ActivityReport'

export default function Home() {
  const [studentData, setStudentData] = useState(null)

  const handleFormSubmit = (data) => {
    setStudentData(data)
  }

  return (
    <div>
      {!studentData ? (
        <StudentDataForm onSubmit={handleFormSubmit} />
      ) : (
        <ActivityReport studentData={studentData} />
      )}
    </div>
  )
}