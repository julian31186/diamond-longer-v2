import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Deso from 'deso-protocol';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Artboard from './components/Artboard';


function App() {

  const fetchLogin = async () => {
    const deso = new Deso();
    const request = 3;
    const response = await deso.identity.login(request);
    setPublicKey(response.key);
    console.log(response)
    return response;
}

  const logOut = async () => {
    const deso = new Deso();
    const request = null;
    const response = await deso.identity.logout(request);
}

//logout not working
//when signing in with side button the key does not log
//having trouble with state
//page routing for when user is logged in create logged in boolean flag
//mobile version looks like shit


 const [publicKey, setPublicKey] = useState('');

  return (
    <div className="App bg-grey w-screen h-screen">
      <Navbar/>    
      <Artboard/>
      <div class="mr-48">
      <button onClick={fetchLogin}>Login</button>
      <h1></h1>
      <button onClick={() => console.log(publicKey)}>{publicKey}Log Key</button>
      <h1> </h1>
      <button onClick={logOut}>LogOut</button>
      </div>


      
      
    </div>
    
  );
}

export default App;
