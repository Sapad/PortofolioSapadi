import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Project from "./components/Project";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Work from "./components/Work";

function App() {
  return (
    <div className="w-full h-full bg-white ">
      <Sidenav />
      <Main />
      <Work />
      <Project />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
