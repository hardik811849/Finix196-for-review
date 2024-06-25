import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store.js";

const theme = extendTheme({
  breakpoints: {
    base: "320em", // 0px
    xsm: "376px", // ~320px.
    sm: "431px", // ~480px.
    md: "821px", // ~768px
    lg: "1025px", // ~  850px
    xl: "1440px", // ~1150px
    "2xl": "1600px", // ~10px
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </React.StrictMode>
  </Provider>
);
