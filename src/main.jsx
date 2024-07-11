import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { DurationProvider } from "./context/DurationContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <DurationProvider>
        <App />
      </DurationProvider>
    </ThemeProvider>
  </BrowserRouter>
);
