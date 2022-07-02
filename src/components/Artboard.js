import { Icon } from '@iconify/react';
import Deso from 'deso-protocol';
import { useState } from 'react';
import {BrowserRouter as Router, Route, Switch , Link} from 'react-router-dom';

const Artboard = () => {

    const [publicKey, setPublicKey] = useState('');

    var isLoggedIn = false;


    const fetchLogin = async () => {
        const deso = new Deso();
        const request = 3;
        const response = await deso.identity.login(request);
        setPublicKey(response.key);
        if(response.key !== null) {
            isLoggedIn = true;
        }
        console.log(response)
        console.log(isLoggedIn)  
    }

  



    return(
        <div className="flex mt-10 justify-center gap-6">
            
            <div className="flex flex-col justify-lef bg-white rounded-md w-652.5 h-592.48">
                <div className="border-b-2 ">
                <h1 className="flex mt-4 ml-4 font-bold mb-4">Sign in to start writing longer posts with DiamondLonger</h1>
                
                </div>
                
                
               <div className="flex flex-row mt-2 gap-2 pb-8 border-b-2">
               <Link to="/post"><button onClick={fetchLogin} class="ml-4 btn bg-twitblue border-0 btn-active text-white hover:bg-gray-400 gap-2 mt-5"><Icon height="20" width="24" icon="fa:diamond"/>Sign in with DeSo</button></Link>
               <p className="mt-7" >DiamondLonger is the easy way to share long messages</p>
               </div>   

               <div className="flex justify-center mt-40">
               <p className="m-auto">ADD embeded tweet after we get links working copy twitlonger</p>
                <div>{publicKey}</div>
                </div>
               
                                                                                                                                                     
            </div>
            <div className="rounded-md bg-white w-64 h-32 ">
                <p className="flex justify-center mt-4 border-b-2">Get Started</p>
                <Link to="/post"><button onClick={fetchLogin} class="ml-4 btn bg-twitblue border-0 btn-active text-white hover:bg-gray-400 gap-2 mt-5"><Icon height="20" width="24" icon="fa:diamond"/>Sign in with DeSo</button></Link>
            
               
            </div>
            
            
        </div>
        
        
    )
}


export default Artboard;