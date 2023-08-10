import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import {Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import './styles/var.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path={"/"}
          element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
