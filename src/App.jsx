import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes.jsx";
import Create from "./pages/Create.jsx";


function App() {


  return (

        <Router>
            <Routes>
                <Route exact path="/" element={<Notes/>}/>
               <Route path="/create" element={<Create/>} />

            </Routes>
        </Router>

  )
}

export default App
