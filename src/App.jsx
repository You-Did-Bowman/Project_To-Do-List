import "./App.css";
import Display from "./components/Display";
import Category from "./components/Category";
import Add from "./components/Add";
import { Routes, Route, NavLink } from "react-router-dom";
import InspoPhrase from "./components/InspoPhrase";

function App() {
  return (
    <>
      <InspoPhrase />
      {/* This div should be in Display.jsx. There it should contain <Filter /> as well.
      But don't want to interfer with Divya =D */}
      <div className = "menu">
      <button><NavLink to="/add">Add</NavLink> </button>
        <Category />
      </div>

      <Routes>
        <Route index element={<Display />} />
        <Route path="/" element={<Display />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </>
  );
}

export default App;
