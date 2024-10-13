import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";
import FooterComponent from "./components/FooterComponent";
import AboutComponent from "./components/AboutComponent";
import ContactComponent from "./components/ContactComponent";

function App() {
    return (
        <Router>
            <HeaderComponent />
            <Box minHeight="calc(100vh - 200px)" bg="retroGreen.50">
                <Routes>
                    <Route path="/" element={<MainComponent />} />
                    <Route path="/about" element={<AboutComponent />} />
                    <Route path="/contact" element={<ContactComponent />} />
                </Routes>
            </Box>
            <FooterComponent />
        </Router>
    );
}

export default App;
