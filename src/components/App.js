
import '../styles/App.css';
import React, { useState } from 'react';

// export default function App() {
const App=()=>{
 const[input,setInput]=useState(");
   const[term,setTerm ]=useState(");
    const handleChange=(e)=>{
  setInput(e.target.value);
 }
 const handleSubmit=(e)=>{
  e.preventDefault():
  setTerm(term+input);
  setInput(");
           }
 
  return (
    <div>
   <label for="input"></label>
  <input id='input' value={inputValue} onChange={changeInput} />
  
      <p id='intro'>Concated String</p>
      <p id='text'>{text} </p>
      <button id='button' onClick={handleSubmit}>Submit>
        Click me
      </button>
 <p>{term}</p>
    </div>
  );
}
export default App;
