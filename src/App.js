import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { Create } from "./Components/Create";
import { Update } from "./Components/Update";
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add" element={<Create/>} />
        <Route path="/edit" element={<Update/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
