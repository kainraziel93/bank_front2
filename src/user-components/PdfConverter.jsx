import React from 'react';
import html2canvas from "html2canvas";
import { IoMdAttach } from "react-icons/io";
import { FaPrint } from "react-icons/fa";
import { jsPDF } from "jspdf";

const PdfConverter = ({rootElementId , downloadFileName}) => {
  
    const downloadPdfDocumentWithDelay = () => {
        setTimeout(downloadPdfDocument, 1000); // Wait for 3 seconds before calling downloadPdfDocument
    }
    const downloadPdfDocument =async () => {
        document.getElementById(rootElementId).className = document.getElementById(rootElementId).className.replace('d-none pdf-wrapper', 'd-flex pdf-wrapper')
        const input = document.getElementById(rootElementId);
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF({
                    orientation:"portrait",
                    unit:"px",
                    format:"a4"
                }
                

                );
                const width = pdf.internal.pageSize.getWidth();
                const height = (canvas.height*width)/canvas.width;
                pdf.addImage(imgData, 'JPEG', 8, 8);
                const randomNumber1 = Math.floor(Math.random() * 90000) + 10000;
                const randomNumber2 = Math.floor(Math.random() * 90000) + 10000;

                 downloadFileName = `${randomNumber1}_${randomNumber2}`;
                pdf.save(`${downloadFileName}.pdf`);
                document.getElementById(rootElementId).className = document.getElementById(rootElementId).className.replace('d-flex pdf-wrapper', 'd-none pdf-wrapper')
            })
    }

    return <IoMdAttach style={{cursor:"pointer"}} onClick={downloadPdfDocumentWithDelay}>Download Pdf</IoMdAttach>

}

export default PdfConverter;