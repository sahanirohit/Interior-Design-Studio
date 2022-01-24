import "./App.css";
import Navbar from "./Pages/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Priority from "./Pages/Priority";
import HomeOwner from "./Pages/HomeOwner";
import Footer from "./Pages/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Login />
      <Priority />
      {/* <HomeOwner /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
