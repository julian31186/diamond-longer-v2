import { Icon } from '@iconify/react';
import Deso from 'deso-protocol';
import { useState } from 'react';

const Navbar = () =>  {

  const fetchLogin = async () => {
    const deso = new Deso();
    const request = 3;
    const response = await deso.identity.login(request);
    setPublicKey(response.key);
    console.log(response)
    return response;
}



const [publicKey, setPublicKey] = useState();

  
    return(
        <div class="navbar bg-base-100">
  <div class="flex-1 justify-evenly">
    <a class="btn btn-ghost normal-case text-xl gap-1 text-twitblue"> <Icon height="20" width="24" icon="fa:diamond"/> DiamondLonger</a>
    
    <div class="flex gap-2">
    <button class="btn btn-ghost text-twitblue ">Account</button>
    <button onClick={fetchLogin} class="btn bg-twitblue border-0 btn-active text-white hover:bg-gray-400">Write a Post</button>
    </div>
    
  </div>
  <div class="flex-none">
    
  </div>
</div>
    )
}

export default Navbar;