import './App.css';
import { useState } from "react";
import Home from "./Components/Home";
import Add from "./Components/Add";
import Second from "./Components/Second";
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';

function App() {
  const [students, setStudents] = useState([
    {
      name: "Mikołaj Czerniak",
      email: "mikolaj.czerniak@gmail.com",
      desc: "Młody, dynamiczny student",
      tags: ["c++", "verilog", "arduino", "php"],
      subjects: ["AK2", "PIW", "PIPG"]
    },
    {
      name: "Kulash Doomchuck",
      email: "kulash.doomchuck@gmail.com",
      desc: "Ekspert ds. budowy kompilatorów",
      tags: ["c++", "vhdl", "java", "php"],
      subjects: ["PIPG", "EAC", "ELE"]
    },
    {
      name: "Pen Pineapple",
      email: "apple.pen@gmail.com",
      desc: "Ekspert ds. JVM",
      tags: ["java", "kotlin", "groovy", "c#"],
      subjects: ["PJ", "WF", "AK2"]
    },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Tinder dla projektów &lt;3</h2>
      </header>
      <main>
        <BrowserRouter>
        <nav>
          <NavLink to="/">Home</NavLink><br/>
          <NavLink to="/add">Dodaj własne ogłoszenie</NavLink><br/>
          <NavLink to="/second">Second</NavLink><br/>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home students={students} setStudents={setStudents} />}/>
          <Route path="/add" element={<Add students={students} setStudents={setStudents} />}/>
          <Route path="/second" element={<Second students={students} setStudents={setStudents} />}/>
        </Routes>
        </BrowserRouter>
      </main>
      <footer className="App-footer">&copy; qucker135</footer>
    </div>
  );
}

export default App;
