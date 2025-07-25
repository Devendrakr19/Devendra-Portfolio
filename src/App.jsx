import { useEffect } from "react";
import "./App.css";
import Home from "./Components/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <>
      <Router>
        <Home />
      </Router>
    </>
  );
}

export default App;
