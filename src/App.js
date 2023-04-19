import React,{useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
function App() {
 const [data, setData] = useState([]);

  useEffect(()=>{
    async function fetchData(){
      await refreshFetchData()
    }
    fetchData()
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
  
  return (
    <div className="App">
      <div>
        {data.map(ele=>{
          return(
            <>
             <h3>{`${ele.name.title} ${ele.name.first} ${ele.name.last}`}</h3>
             <p>{ele.email}</p>
            </>
          )
        })}
      </div>
      <div >
        <button onClick={refreshFetchData}>ReFresh</button>
      </div>
    </div>
  );
}

export default App;
