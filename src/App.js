import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Job from "./Components/Job";
import FillForm from "./Components/FillForm";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job" element={<Job />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fill" element={<FillForm />} />
      </Routes>
    </Router>
  );
}

export default App;
