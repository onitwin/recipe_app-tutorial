import React,{useEffect,useState} from 'react';
import './App.css';

const App=() =>{
  




  useEffect(()=>{
    getRecipes()

  },[]) //empty array means only runs once, no array refreshes each time. alternatively add what you want to track.

  const getRecipes= async()=>{
    const response =await fetch(`https:api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data= await response.json()
    console.log(data)

  }

  // alternative fetch method:
  // fetch(`https:api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
  // .then(response =>{response.json()})
 // .then (array.push(response))



  return (
    <div className="App">
      <form className='search-form' >
        <input className="search-bar" type="text"></input>
        <button  className="search-button" type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
