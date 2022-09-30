
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home"
import Create from "./Create"

function App() {


  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
