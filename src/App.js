import './App.css';
import { useState } from "react";
import Home from "./Components/Home";
import Second from "./Components/Second";
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';

function App() {
  const [students, setStudents] = useState([
    {name: "Mikołaj Czerniak", desc: "Młody, dynamiczny student", tags: ["c++", "verilog", "arduino", "php"], subjects: ["AK2", "PIW", "PIPG"]},
    {name: "Łukasz Tomczak", desc: "Ekspert ds. budowy kompilatorów", tags: ["c++", "vhdl", "java", "php"], subjects: ["PIPG", "EAC", "ELE"]},
    {name: "Ernest Przybył", desc: "Ekspert ds. JVM", tags: ["java", "kotlin", "groovy", "c#"], subjects: ["PJ", "WF", "AK2"]},
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Tinder dla projektów &lt;3</h2>
      </header>
      <main>
        <BrowserRouter>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/second">Second</NavLink>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home students={students} setStudents={setStudents} />}/>
          <Route path="/second" element={<Second students={students} setStudents={setStudents} />}/>
        </Routes>
        </BrowserRouter>
      </main>
      <footer className="App-footer">&copy; qucker135</footer>
    </div>
  );
}

export default App;
