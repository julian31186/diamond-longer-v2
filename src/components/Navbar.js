import { Icon } from '@iconify/react';
import Deso from 'deso-protocol';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Navbar = () => {

  const fetchLogin = async () => {
    const deso = new Deso();
    const request = 3;
    const response = await deso.identity.login(request);
    setPublicKey(response.key);
    console.log(response.key)
    return response;
  }

  const [publicKey, setPublicKey] = useState();


  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 justify-evenly">
        <Link to="/"><a className="btn btn-ghost normal-case text-xl gap-1 text-twitblue"> <Icon height="20" width="24" icon="fa:diamond" /> DiamondLonger</a></Link>

        <div className="flex gap-2">
          <button className="btn btn-ghost text-twitblue ">Account</button>
          <Link to="/post"> <button onClick={fetchLogin} className="btn bg-twitblue border-0 btn-active text-white hover:bg-gray-400">Write a Post</button></Link>
          <Link to="/ticket"> <button className="btn bg-twitblue border-0 btn-active text-white hover:bg-gray-400">Buy Tickets</button></Link>
          <Link to="/newticket"> <button className="btn bg-twitblue border-0 btn-active text-white hover:bg-gray-400">Post New Tickets</button></Link>
        </div>

      </div>
      <div className="flex-none">

      </div>
    </div>
  )
}

export default Navbar;