import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateNotes from './components/updateNotes/UpdateNotes';
import HomePage from './components/homePage/HomePage';

import "./app.css";
import {
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  

  const receiveData=( )=>{
 
  }
  

  return (
    <>
{/* sohail"/HomePage" */}
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/HomePage" index element={
      <HomePage addItem={receiveData} />} />
      <Route path="/UpdateNotes" element={
      <UpdateNotes receiveUpdateNotesData={receiveData} />
      } />
    </Routes>
    
    </>
  )
}

export default App