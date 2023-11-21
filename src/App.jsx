import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes.jsx";
import Create from "./pages/Create.jsx";
import { ThemeProvider, createTheme} from '@mui/material/styles';
import {purple} from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: '#e6b3ff',
        },
        secondary: purple,
    },
    typography: {
        fontFamily: 'Quicksand',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    },
});

function App() {

      return (
            <ThemeProvider theme={theme}>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Notes/>}/>
                        <Route path="/create" element={<Create/>} />
                    </Routes>
                </Router>
            </ThemeProvider>
  )
}

export default App
