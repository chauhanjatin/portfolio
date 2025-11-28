import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Loader from "./components/Loader";

import Hero from "./pages/Hero";
import Aboutus from "./pages/Aboutus";
import Mywork from "./pages/Mywork";
import Hireme from "./pages/Hireme";
import Projectdetails1 from "./pages/Projectdetails1";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <Menu />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/mywork" element={<Mywork />} />
        <Route path="/hireme" element={<Hireme />} />
        <Route path="/project-details-1" element={<Projectdetails1/>} />
      </Routes>
    </>
  );
}

export default App;
