import { useState } from "react";
import axios from "axios";
import { Box, Heading, Button, Input, Link, Text } from "@chakra-ui/react";

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
    <Box maxW="lg" mx="auto" textAlign="center">
      <Heading as="h2" size="lg" mb={4}>
        Merge PDF Files
      </Heading>
      <Input
        type="file"
        multiple
        accept="application/pdf"
        onChange={handleFileChange}
        mb={4}
      />
      <Button
        onClick={handleMerge}
        colorScheme="blue"
        mb={4}
        isDisabled={!files.length}
      >
        Merge
      </Button>
      {downloadUrl && (
        <Box mt={4}>
          <Link
            href={downloadUrl}
            download="merged.pdf"
            color="green.400"
            fontWeight="bold"
            isExternal
          >
            Download Merged PDF
          </Link>
        </Box>
      )}
    </Box>
  );
}
