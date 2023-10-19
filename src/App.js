
import { useState } from 'react';
import './App.css';
import HomePage from './Component/HomePage';
import NavBar from './Component/NavBar';

function App() {
  const [query , setQuery] = useState("");
  const [Dark , setDark] = useState(false);

  const handleMode = ()=>{
    setDark(!Dark);
    console.log(Dark)
}
    const handleQuery = (e)=>{
        setQuery(e.target.value)
        console.log(e.target.value)
    }
  return (
   <>
   <NavBar handleQuery = {handleQuery} mode = {Dark} handleMode = {handleMode} query = {query}></NavBar>
  <HomePage query = {query} mode={Dark}/>
   </>
  );
}

export default App;
