import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import NameTableComponent from './components/NameTableComponent';
import Axios from "axios";

function App() {

  // State to represent if page is loading data
  const [loading, setLoading] = useState(true);
  const [names, setNames] = useState([]);

  // https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {

    // Axios GET function declaration
    async function fetchData() {
      await Axios.get('/people')
        .then(response => {setNames(response.data)});
    }
    
    fetchData();
    setLoading(false);
  }, []);
  // [] means that the useEffect will only run when the variables inside the [] are changed
  // If [] is empty like in this example, it will only run once on the application loading


  return (
    <div>
      {/* Loading conditional - If loading state of application is false, only display loading screen, else display names */}
      {loading ? <div>loading...</div> :
        <div>
          React Tutorial
          <hr/>
          <NameTableComponent 
              names={names}
          /> 
        </div>}
    </div>
  );
}

export default App;
