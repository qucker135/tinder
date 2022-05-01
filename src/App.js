import './App.css';
import { useState, useEffect } from "react";
import Home from "./Components/Home";
import Add from "./Components/Add";
import Group from "./Components/Group";
import AddGroup from "./Components/AddGroup";
import Profile from "./Components/Profile";
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import axios from 'axios';

function App() {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/APIs/students.json').then(res => {
      setStudents(res.data);
    });

    axios.get('http://localhost:3000/APIs/groups.json').then(res => {
      setGroups(res.data);
    });
  },[]);
  

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
          <NavLink to="/groups">Szukanie grup</NavLink><br/>
          <NavLink to="/add-group">Dodaj grupę</NavLink><br/>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home students={students} setStudents={setStudents} />}/>
          <Route path="/add" element={<Add students={students} setStudents={setStudents} />}/>
          <Route path="/groups" element={<Group groups={groups} setGroups={setGroups} />}/>
          <Route path="/add-group" element={<AddGroup groups={groups} setGroups={setGroups} />}/>
          <Route path="/profile" element={<Profile students={students} setStudents={setStudents} />}/>
        </Routes>
        </BrowserRouter>
      </main>
      <footer className="App-footer">&copy; qucker135</footer>
    </div>
  );
}

export default App;
