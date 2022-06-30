import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Deso from 'deso-protocol';
import { useState } from 'react';


function App() {

  const fetchLogin = async () => {
    const deso = new Deso();
    const request = 3;
    const response = await deso.identity.login(request);
    setPublicKey(response.key);
    console.log(response)
    return response;
}

 const [publicKey, setPublicKey] = useState();

  return (
    <div className="App">
      <div> DiamondLonger</div>
      <button onClick={fetchLogin}>Login</button>
      <h1>BC1YLgze5LxcM1Gf4oCxA4cUvzoj6hnftXtv4rc3s7JBmbS9fM5F8fk</h1>
      <button onClick={() => console.log(publicKey)}>{publicKey}Log Key</button>
    </div>
    
  );
}

export default App;
