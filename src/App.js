import { Routes,Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Portofolio from "./components/Portofolio/Portofolio";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/service" element={<Service />}/>
          <Route path="/portofolio" element={<Portofolio />}/>
          <Route path="/team" element={<Team />}/>
          <Route path="/contact" element={<Contact />}/>
      </Routes>
    </>
  );
}

export default App;