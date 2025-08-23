import { useState } from "react";
import axios from "axios";

export default function Merge() {
  const [files, setFiles] = useState([]);
  const [downloadUrl, setDownloadUrl] = useState(null);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleMerge = async () => {
    const formData = new FormData();
    for (let file of files) {
      formData.append("files", file);
    }

    const response = await axios.post("http://localhost:5000/api/pdf/merge", formData, {
      responseType: "blob",
      headers: { "Content-Type": "multipart/form-data" },
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    setDownloadUrl(url);
  };

  return (
    <div className="max-w-lg mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Merge PDF Files</h2>
      <input type="file" multiple accept="application/pdf" onChange={handleFileChange} />
      <button
        onClick={handleMerge}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
      >
        Merge
      </button>
      {downloadUrl && (
        <a
          href={downloadUrl}
          download="merged.pdf"
          className="block mt-4 text-green-600 underline"
        >
          Download Merged PDF
        </a>
      )}
    </div>
  );
}
