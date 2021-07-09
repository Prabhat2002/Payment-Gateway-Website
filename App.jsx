import './App.css';
import Gpay from './Gpay'
import React, { useState } from 'react';


function App() {
  const [expand,setExpand]=useState(false);;
  const expandit=()=>
  {
    setExpand(true);
  }
  return (
  <>
  <div id="desc">
  </div>
   <div className="App">
      <h3>Let's Donate with Google Pay</h3>
      <br/>
      {expand ?(<Gpay/>)
      :
      <button id="button" onClick={expandit}>Donate Now</button>
      }
    </div>
    
  </> 
  );
}
export default App;