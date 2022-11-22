import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateNotes from './components/updateNotes/UpdateNotes';
import HomePage from './components/homePage/HomePage';

// import "./app.css";
import {
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  
  return (
    <>
    <Routes>
      <Route exact path="/" element={<HomePage/>} />

      <Route path="/UpdateNotes/:id" element={<UpdateNotes/>} />
    </Routes>
    </>
  )
}
export default App