import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages and components
import Home from "./pages/Home";
import Header from "./components/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#648DE5",
    },
    text: {
      primary: "#FFF",
    },
  },
  shadows: {
    ...createTheme().shadows,
    myShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
