'use client';
import toast, { Toaster } from "react-hot-toast";

interface ResumeProps {
  pdfUrl: string;
  fileName: string;
  buttonText?: string;
}

const Resume = ({ pdfUrl, fileName, buttonText }: ResumeProps) => {
  const downloadPDF = async () => {
    try {
      const response = await fetch(pdfUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch PDF: ${response.statusText}`);
      }
      const blob = await response.blob();
      const link = document.createElement("a");
      const blobUrl = URL.createObjectURL(blob);
      link.href = blobUrl;
      link.download = fileName || "download.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      toast.error(`Error downloading PDF: ${errorMessage}`);
      console.error("Error downloading PDF:", errorMessage);
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
