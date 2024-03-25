async function generatePDF() {
  const userInput = document.getElementById("userInput").value;
  //Creating a new pdf file
  const { PDFDocument } = PDFLib;
  const pdfDoc = await PDFDocument.create();

  //adding page to the pdf file
  const page = pdfDoc.addPage();

  //add the text to the pdf file
  page.drawText(userInput, { x: 50, y: 500 });

  // Save the PDF as a Blob
  const pdfBytes = await pdfDoc.save();
  const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });

  // Create a download link for the Blob
  const downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(pdfBlob);
  downloadLink.download = "output.pdf";

  // Append the link to the document and trigger the download
  document.body.appendChild(downloadLink);
  downloadLink.click();

  // Remove the link from the document
  document.body.removeChild(downloadLink);
}
