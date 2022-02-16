import { useState, useEffect } from 'react';
import BookList from './components/bookList/booklist';
import './App.css';
import Slideshow from './components/Ad/ad';

function App() {

  const [data,setData] = useState([])

  useEffect(()=>{

    // use setData to set the state variable data to the complete array of products
    // that you retrieve using fetch

    // 'x' is the data that is found in the API . You are then setting the data of the original state
    // to a state that contains API data

    // passing 'x' in as a parameter for setData
    fetch('http://localhost:3000/books').then(x=>x.json().then(x=>setData(x)))

    // empty array means that it will run upon the first render. 
    // otherwise, useEffect will run everytime the state changes
  },[])

  console.dir(data)

  return (
    <div className="App">
      <div>
        <h1>Welcome to my library</h1>
        <Slideshow/>
        <BookList books = {data}/>
      </div>

    </div>
  );
}

export default App;
