import { Link as RouterLink } from "react-router-dom";
import { Flex, Box, Link } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex as="nav" bg="gray.800" color="white" p={4} gap={6}>
      <Box>
        <Link as={RouterLink} to="/" fontWeight="bold">
          Home
        </Link>
      </Box>
      <Box>
        <Link as={RouterLink} to="/merge">
          Merge PDF
        </Link>
      </Box>
    </Flex>
  );
}
