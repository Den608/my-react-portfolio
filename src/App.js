import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, Projects, Experience, SingleProject } from "./pages";
import { Navbar, Footer } from "./components";

const App = () => {
  return (
    <main className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<SingleProject />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
