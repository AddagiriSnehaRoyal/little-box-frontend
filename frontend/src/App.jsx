import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CreatePackage from "./pages/CreatePackage";
import AddContent from "./pages/AddContent";
import PackagePreview from "./pages/PackagePreview";

import Navbar from "./components/common/Navbar";


function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/create"
          element={<CreatePackage />}
        />

        <Route
          path="/create/content"
          element={<AddContent />}
        />

        <Route
          path="/package/preview"
          element={<PackagePreview />}
        />

        <Route
          path="/package/:id"
          element={<PackagePreview />}
        />

        

      </Routes>

    </BrowserRouter>

  );
}

export default App;