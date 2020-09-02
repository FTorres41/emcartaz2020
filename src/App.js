import React from "react";
import Routes from "./routes";
import { ThemeProvider } from "styled-components";
import GlobalStyle, { theme } from "./theme/globalStyles";

function App() {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
  );
}

export default App;
