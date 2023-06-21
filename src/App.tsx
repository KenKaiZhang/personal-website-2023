import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Home from "./pages/home/Home";
import Skills from "./pages/Skills";
import Navigationbar from "./components/NavigationBar";
import Expereinces from "./pages/Experiences";

const App = () => {
  return (
    <div className="App">
      <Navigationbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiences" element={<Expereinces />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
