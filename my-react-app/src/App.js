import './App.css';
import { Achievements } from './components/Achievement/Achievement';
import { Contents } from './components/Achievement/content';
import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import { Dates } from './components/Achievement/date';

function MyApp() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <DatePicker
        onChange={onChange}
        value={value}

      />
    </div>
  );
}
function App() {
  return (
    <div class="app">
     <Achievements/>
     <br/>
      <div >
      <input style={{ height: 50, width: "200%", borderColor: 'gray', borderWidth: 1,  marginBottom: 20 }}/>
        </div>
        <Contents/>
        <br/>
          <div >
          <input style={{ height: 200, width: "200%", borderColor: 'gray', borderWidth: 1,  marginBottom: 20 }}/>
          </div>
          <Dates/>
          <br/>
                <div 
                className="app__date">
                <MyApp />
                
                </div> 
</div>
  )}

export default App;
