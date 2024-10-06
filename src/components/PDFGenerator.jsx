/*
import React from 'react'
//import { Button } from "../components/ui/button"
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export default function PDFGenerator({ reportRef }) {
  const generatePDF = async () => {
    const element = reportRef.current
    const canvas = await html2canvas(element)
    const data = canvas.toDataURL('image/png')

    const pdf = new jsPDF('p', 'mm', 'a4')
    const imgProperties = pdf.getImageProperties(data)
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight)
    pdf.save('student_report.pdf')
  }

  return (
    <button onClick={generatePDF}>Download PDF</button>
  )
}

*/