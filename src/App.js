import React,{useState, useEffect} from 'react';
import './App.css';
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    refreshFetchData()
  },[])

  const refreshFetchData = async() =>{
    try {
      const response = await axios.get('https://randomuser.me/api')
      setData(response.data.results)
      localStorage.setItem('myData', JSON.stringify(response.data.results))
    } catch (error) {
      console.log(error)
    }
  }
  const {name:{first, last ,title}, email} = data.length > 0 && data[0]
  return (
    <div className="App">
      <div className='App_User'>
        <p>Name: <span>{`${title} ${first} ${last}`}</span></p>
        <p>Email: <span>{email}</span></p>
      </div>
      <div>
        <button onClick={refreshFetchData}>Refresh</button>
      </div>
    </div>
  );
}

export default App;
