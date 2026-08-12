import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CreatePackage from "./pages/CreatePackage";
import AddContent from "./pages/AddContent";
import PackagePreview from "./pages/PackagePreview";
import OpenBox from "./pages/OpenBox";
import PackageReveal from "./pages/PackageReveal";
import ScrollToTop from "./ScrollToTop";

import Navbar from "./components/common/Navbar";


function App() {

  return (

    <BrowserRouter>

      <ScrollToTop />

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

        {/* <Route
          path="/package/:packageId"
          element={<PackageReveal />}
        /> */}

        <Route path="/open" element={<OpenBox />} />

        <Route
          path="/package/:packageId"
          element={<PackageReveal />}
        />



      </Routes>

    </BrowserRouter>

  );
}

export default App;