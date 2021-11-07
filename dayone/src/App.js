import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform'
import { useState } from 'react';

function App() {

  const [mystyle, setstyle] = useState({
    color: 'black',
    backgroundColor: 'white',
    
  })

  const darkmode = () => {
    if (mystyle.color === 'black') {
      setstyle({
        color: 'white',
        backgroundColor: 'black',
       
      })
    }

  }


  const lightmode = () => {
    if (mystyle.color === 'white') {
      setstyle({
        color: 'black',
        backgroundColor: 'white'
      })
    }

  }


  return (
    <>

      <Navbar title="TextChanger" page='Chat' />

      <button type="button" className="btn btn-outline-dark btn-sm m-1 e-1" onClick={darkmode}>DarkMode</button>
      <button type="button" className=" btn btn-outline-success btn-sm m-1" onClick={lightmode}>LightMode</button>
      <Textform formname="Registration From" mystyle={mystyle} />
    </>
  );
}





export default App;
