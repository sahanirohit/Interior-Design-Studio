import "./App.css";
import Navbar from "./Pages/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Footer from "./Pages/Footer";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/project" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
