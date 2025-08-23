import { useColorMode } from "@chakra-ui/color-mode";
import { Button } from "@chakra-ui/react";
function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
         <div>
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? "🌙 Dark" : "☀️ Light"}
      </Button>
        Hello this is the testing application 
        
    </div>
  );
}

export default App;
