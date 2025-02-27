import toast, { Toaster } from "react-hot-toast";

const Resume = ({ pdfUrl, fileName, buttonText }) => {
  const notify = () => toast("Here is your toast.");
  const downloadPDF = async () => {
    try {
      // Fetch the PDF file
      const response = await fetch(pdfUrl);

      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`Failed to fetch PDF: ${response.statusText}`);
      }

      // Convert the response to a blob
      const blob = await response.blob();

      // Create a download link
      const link = document.createElement("a");

      // Create a Blob URL from the blob
      const blobUrl = URL.createObjectURL(blob);

      // Set the download link attributes
      link.href = blobUrl;
      link.download = fileName || "download.pdf";

      // Append the link to the document
      document.body.appendChild(link);

      // Trigger a click on the link to start the download
      link.click();

      // Remove the link from the document
      document.body.removeChild(link);

      // Revoke the Blob URL to free up resources
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      notify("Error downloading PDF", error.message);
      console.error("Error downloading PDF:", error.message);
    }
  };

  return (
    <div className="transition-all duration-300 active:scale-[0.96] max-w-[200px] mx-auto md:mx-0 flex justify-center lg:flex lg:justify-start">
      <span
        onClick={downloadPDF}
        className="cursor-pointer bg-gradient-to-r max-w-[197px] lg:max-w-[252px] to-[#D9D9D9] from-[#D9D9D900] py-0.5 pr-0.5"
      >
        <p className="bg-[#0b040c] px-[17px] py-[18px] font-medium text-[18px] font-clash">
          {buttonText || "Download PDF"}
        </p>
      </span>
      <Toaster />
    </div>
  );
};

export default Resume;
