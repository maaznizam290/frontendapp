import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";   // ✅ import your App.js instead of redefining
import AnimatedBackground from "./components/backgroundAnimated";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <ChakraProvider >
   <AnimatedBackground/>
    <App />
  </ChakraProvider>
);
