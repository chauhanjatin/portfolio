import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Menu from "./components/Menu";

// Pages
import Hero from "./pages/Hero";
import Aboutus from "./pages/Aboutus";
import Mywork from "./pages/Mywork";
import Hireme from "./pages/Hireme";

function App() {
  return (
    <>
      <Navbar />
      <Menu />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/mywork" element={<Mywork />} />
        <Route path="/hireme" element={<Hireme />} />
      </Routes>
    </>
  );
}

export default App;
