import React from 'react';
import Keypad from './Components/Keypad';
import AutoGenerate from './Components/AutoGenerate';

function App() {
  return (
    <div style={style.container}>
      <Keypad/>
      <AutoGenerate/>
    </div>
  );
}
const style={
  container:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  }
}
export default App;
