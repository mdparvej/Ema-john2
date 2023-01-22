import logo from './logo.svg';
import './App.css';
import react, {useState, useEffect} from "react"
function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=500').then(res => res.json())
    .then(data => setUser(data.results)).catch((error) => "error")
  },[]);
  return (
    <div className="App">
      <header className="App-header" style={{display:'grid' , gridTemplateColumns: 'auto auto auto auto auto auto auto auto auto auto auto'}}>
        {
          user.map(person => <img src={person.picture.large} alt="" srcset="" style={{width: '100px',border: '1px solid green'}}/>)
          
        }
      </header>
    </div>
  );
}

export default App;
