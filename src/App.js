import "./App.scss";
import Fold from "./components/Fold/Fold";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Fold />
      <Navbar />
      <About />
      <Project />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
