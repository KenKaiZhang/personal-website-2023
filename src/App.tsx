import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Home from "./pages/home/Home";
import Skills from "./pages/Skills";
import Navigationbar from "./components/NavigationBar";
import Expereinces from "./pages/Experiences";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Loader from "./Loader";
import { getSession } from "./util/sessionStorage";

const App = () => {
  const [loading, setLoading] = useState<boolean>(getSession("loading") ? false : true);

  return (
    <div className="App">
      <AnimatePresence>
        {loading ? (
          <div>
            <Loader set={setLoading} />
          </div>
        ) : (
          <React.Fragment>
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
          </React.Fragment>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
