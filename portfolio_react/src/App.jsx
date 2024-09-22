import Home from "./Components/Navbar/Home/Home";
import Navbar from "./Components/Navbar/Navbar/Navbar";
import About from "./Components/Navbar/About/About";
import Experience from "./Components/Navbar/Experience/Experience";
import Projects from "./Components/Navbar/Projects/Projects";
import Footer from "./Components/Navbar/Footer/Footer";

function App() {


  return (
   <div className="bg-[#171d32] h-auto w-full overflow-hidden">
    <Navbar />
    <Home />
    <About />
    <Experience />
    <Projects />
    <Footer />
  </div>
  );

}

export default App;
