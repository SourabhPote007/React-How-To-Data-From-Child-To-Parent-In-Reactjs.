
// How To Data From Child To Parent In Reactjs ?


import './App.css';
import React, { useState } from 'react';
import Callback from './Components/Callback';

//Parent-Component
function App() {
  const [UIcolor, setUIColor] = useState(null)
  //Our Collback Function
  const getColor = (color) => { setUIColor(color)};
  return (
    <div className="App">
      <div className='App_color_container' style={{background : `${UIcolor}`}}></div>
      <Callback getColor={getColor}/>
    </div>
  );
}

export default App;
