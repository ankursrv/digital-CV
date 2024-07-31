import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Experience from './pages/Experience';
import MySkills from './pages/MySkills';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';

import Header from './component/Header';
import Footer from "./component/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/myskills" element={<MySkills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App