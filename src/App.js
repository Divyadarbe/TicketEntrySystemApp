import React from 'react';
import Keypad from './Components/Keypad';

function App() {
  return (
    <div style={style.container}>
      <Keypad/>
    </div>
  );
}
const style={
  container:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    margin:40
  }
}
export default App;
