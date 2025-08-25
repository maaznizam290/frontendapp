import { Heading, Text, Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box textAlign="center">
      <Heading as="h1" size="2xl" mb={4}>
        Free PDF Tools
      </Heading>
      <Text fontSize="xl">
        Merge, Split, Compress and Convert PDFs online for free.
      </Text>
    </Box>
  );
}
