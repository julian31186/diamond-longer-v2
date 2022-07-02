import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Deso from 'deso-protocol';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Artboard from './components/Artboard';
import Post from './components/Post';
import {BrowserRouter as Router, Route, Switch , Link} from 'react-router-dom';


function App() {

  const fetchLogin = async () => {
    const deso = new Deso();
    const request = 3;
    const response = await deso.identity.login(request);
    setPublicKey(response.key);
    console.log(response.key)
}

  const logOut = async () => {
    const deso = new Deso();
    const request = publicKey;
    const response = await deso.identity.logout(request);
    setPublicKey('');
}


//logout not working
//page routing for when user is logged in create logged in boolean flag
//embed diamond post for home page
//database && link generation
//NFT Concert Tickets*


 const [publicKey, setPublicKey] = useState('');

  return (
    <Router>

    <div className="App bg-grey w-screen h-screen">
      <Navbar/>    

      <Switch>
        <Route exact path="/">
          <Artboard/>
        </Route>

        <Route exact path="/post">
          <Post/>
        </Route>
      </Switch>

    </div>
    </Router>
  );
}

export default App;
