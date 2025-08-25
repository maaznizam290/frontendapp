import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Row } from "reactstrap";   // keep if you really want reactstrap Row
import { ChakraProvider, Container } from "@chakra-ui/react"; // use Chakra's Container
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Merge from "./pages/Merge";

function App() {
  return (

        <Container maxW="container.md" py={8}>
    <Router>
      <Row>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/merge" element={<Merge />} />
          </Routes>
      </Row>
      <Footer />
    </Router>
        </Container>
  );
}

export default App;
