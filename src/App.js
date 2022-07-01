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
    console.log(response.key)
}

  const logOut = async () => {
    const deso = new Deso();
    const request = publicKey;
    const response = await deso.identity.logout(request);
    setPublicKey('');
}

const fetchPost = async () => {
  const deso = new Deso();
  const request = {
  "PostHashHex": "ca2feea1e28431b61450222b8d2828c6da8ae5ce32a79791abda36c6ad78df03"
};
 const response = await deso.posts.getSinglePost(request);
 console.log(response)
}

//logout not working
//page routing for when user is logged in create logged in boolean flag
//embed diamond post for home page
//database && link generation
//NFT Concert Tickets*


 const [publicKey, setPublicKey] = useState('');

  return (
    <div className="App bg-grey w-screen h-screen">
      <Navbar/>    
      
      <Artboard/>

      <div className="flex flex-col">
      
      <button onClick={fetchLogin}>Login</button>    
      <button onClick={() => console.log(publicKey)}>{publicKey}Log Key</button>    
      <button >LogOut</button>
      
      </div>

      <button onClick={fetchPost}>ca2feea1e28431b61450222b8d2828c6da8ae5ce32a79791abda36c6ad78df03</button>
      
      
      
    </div>
    
  );
}

export default App;
