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

    const [publicKey, setPublicKey] = useState();


    return(
        <div class="flex mt-10 justify-center gap-6">
            <div class="bg-white rounded-md w-652.5 h-592.48">


            </div>
            <div class="rounded-md bg-white w-64 h-32 ">
                <p class="flex justify-center">Get Started</p>
                <button onClick={fetchLogin} class="btn bg-twitblue border-0 btn-active text-white hover:bg-gray-400 gap-2 mt-5"><Icon height="20" width="24" icon="fa:diamond"/>Sign in with DeSo</button>
            

            </div>
            
            
        </div>
        
        
    )
}


export default Artboard;