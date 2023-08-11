import { Toaster } from "react-hot-toast";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <>
      <Toaster />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

export default App;