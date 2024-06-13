import { Routes, Route, HashRouter } from "react-router-dom";
import "./App.css";
import Dashboard from "../dashboard/Dashboard";
import Footer from "../footer/Footer";
import AboutUs from "../aboutUs/AboutUs";
import Products from "../products/Products";
import { ParallaxProvider } from "react-scroll-parallax";
import Contact from "../contact/Contact";
import NaviSec from "../navi/NaviSec";
import Applications from "../applications/Applications";
import LanguageSelect from "../languageSelect";

function App() {
  return (
    <ParallaxProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
        </Routes>
        
        <NaviSec></NaviSec>
        <div id="lang-cont">
        <LanguageSelect></LanguageSelect>
        </div>
       
        <Routes>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/applications" element={<Applications />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
       
        <Footer></Footer>
      </HashRouter>
    </ParallaxProvider>
  );
}

export default App;
