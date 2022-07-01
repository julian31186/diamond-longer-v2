import { Icon } from '@iconify/react';
import Deso from 'deso-protocol';
import { useState } from 'react';

const Artboard = () => {

    const fetchLogin = async () => {
        const deso = new Deso();
        const request = 3;
        const response = await deso.identity.login(request);
        setPublicKey(response.key);
        console.log(response)
        return response;
    }

    const getPost = async () => {
        const deso = new Deso();
        const request = {
          "ResponseLimit": 20
        };
         const response = await deso.posts.getHotFeed(request);
        return response
    }

    const submitPost = async () => {
        const deso = new Deso();
        const request = {
          "UpdaterPublicKeyBase58Check": "",
          "BodyObj": {
            "Body": "Checking out the developer hub",
            "VideoURLs": [],
            "ImageURLs": []
          }
        };
         const response = await deso.posts.submitPost(request);
    }


    const [publicKey, setPublicKey] = useState('');


    return(
        <div className="flex mt-10 justify-center gap-6">
            
            <div className="flex flex-col justify-lef bg-white rounded-md w-652.5 h-592.48">
                <div className="border-b-2 ">
                <h1 className="flex mt-4 ml-4 font-bold mb-4">Sign in to start writing longer posts with DiamondLonger</h1>
                </div>
                
                
               <div className="flex flex-row mt-2 gap-2 pb-8 border-b-2">
               <button onClick={fetchLogin} class="ml-4 btn bg-twitblue border-0 btn-active text-white hover:bg-gray-400 gap-2 mt-5"><Icon height="20" width="24" icon="fa:diamond"/>Sign in with DeSo</button>
               <p className="mt-7" >DiamondLonger is the easy way to share long messages</p>
               
               
               </div>   
                <div>{publicKey}</div>
               
                                                                                                                                                     
            </div>
            <div className="rounded-md bg-white w-64 h-32 ">
                <p className="flex justify-center mt-4 border-b-2">Get Started</p>
                <button onClick={fetchLogin} className="btn bg-twitblue border-0 btn-active text-white hover:bg-gray-400 gap-2 mt-5"><Icon height="20" width="24" icon="fa:diamond"/>Sign in with DeSo</button>
            
               
            </div>
            
            
        </div>
        
        
    )
}


export default Artboard;