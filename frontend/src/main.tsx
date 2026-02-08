import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import theme from "./assets/theme";
import { DataProvider } from "./context/DataContext";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ChakraProvider theme={theme}>
            <DataProvider>
                <App />
            </DataProvider>
        </ChakraProvider>
    </StrictMode>
);
