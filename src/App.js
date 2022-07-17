import "./App.scss";
import Fold from "./components/Fold/Fold";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import TextForm from "./components/Form/TextForm";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Fold />
      <Navbar />
      <About />
      <Project />
      <TextForm />
      <Footer />
    </div>
  );
}

export default App;
