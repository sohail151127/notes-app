import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateNotes from './components/updateNotes/UpdateNotes';
import HomePage from './components/homePage/HomePage';

import "./app.css";
import {
  Routes,
  Route,
} from "react-router-dom";


const App = () => {
  const [gotData, setGotData] = useState("")

  const receiveData=( addItem)=>{
    // console.log(addItem)
    setGotData(addItem)
  }
  
  // console.log(gotData)

  
  return (
    <>
{/* sohail"/HomePage" */}
    <Routes>
      <Route index element={<HomePage />} />

      <Route path="/HomePage" index element={
      <HomePage gotData={gotData}  />
      } />

      <Route path="/UpdateNotes" element={
      <UpdateNotes receiveUpdateNotesData={receiveData}/>
      } />
    </Routes>
    </>
  )
}

export default App