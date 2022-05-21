import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';

function App() {

  const [apiData, setApiData] = useState([]);

  
  const fetchApiData = async () => {
      //You could also use setTimeout to create interval fetch (has drawbacks)
       //setTimeout(fetchGCD, interval * 1000);
       const liveUrl =  "https://liquality.io/swap/agent/api/swap/marketinfo";
      const res = await fetch(liveUrl);
      const data = await res.json();

      data.map((item, index) => {
        if(item.from === 'RBTC'){
          console.log(item.from, item.to, 'just rbtc from values')
         
        }
      })
       //Sets the raw groundData
       setApiData(data);
  };
      
        //Fetch on mounting component
        useEffect(() => {
          fetchApiData();
        }, []);
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    
    hwwwwjjj
      </header>
    </div>
  );
}

export default App;
