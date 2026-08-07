import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreatePackage from "./pages/CreatePackage";
import Navbar from "./components/common/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/create" element={<CreatePackage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;