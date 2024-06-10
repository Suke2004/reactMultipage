import { Route,Routes } from "react-router-dom"
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home , ToDo ,  Calculator , Counter , Color } from "./components/pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/color" element={<Color />} />
      </Routes>
    </div>
  );
}


export default App;