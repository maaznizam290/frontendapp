import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function AnimatedBackground() {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      w="100%"
      h="100%"
      zIndex={-1}
      overflow="hidden"
    >
      {/* Top Gray Shape */}
      <MotionBox
        position="absolute"
        top="-100px"
        left="50%"
        transform="translateX(-50%)"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/workflow-02.png"
          alt="Blurred Gray"
          w="760px"
          h="668px"
          opacity={0.3}
        />
      </MotionBox>

      {/* Bottom Blue Shape */}
      <MotionBox
        position="absolute"
        bottom="-150px"
        left="60%"
        animate={{ x: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/workflow-01.png"
          alt="Blurred Blue"
          w="760px"
          h="668px"
          opacity={0.5}
        />
      </MotionBox>
    </Box>
  );
}
