import { useState } from "react";
import Deso from 'deso-protocol';



const Post = () => {

    const [charCount, setCharCount] = useState(0);
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');


    const submitPost = async (post) => {
        const deso = new Deso();
        const request = {
        "UpdaterPublicKeyBase58Check": "BC1YLgze5LxcM1Gf4oCxA4cUvzoj6hnftXtv4rc3s7JBmbS9fM5F8fk",
        "BodyObj": {
          "Body": `${content}`,
          "VideoURLs": [],
          "ImageURLs": []
        }
      };
       const response = await deso.posts.submitPost(request);
       setTitle('');
       setContent('');
       setCharCount(0);
      }
//ddd
      const updateContentCount = (e) => {
        setContent(e.target.value);
        setCharCount(e.target.value.length);
      }

      const addTitle = (e) => {
        setTitle(e.target.value);
      }
      
    
    //getting profile pic and all account info when loggin is done in a different componenet   
    //awaitng login before routing to post page
    //making sure users can only go to post route if they are logged in

    return(
        <div className="flex mt-10 justify-center gap-6">
            
            <div className="justify-between bg-white rounded-md w-652.5 h-592.48">

                <div className="flex flex-row justify-between bg-white border-b-2">
                <div className="ml-2 mt-2 flex text-3xl pb-4">New Post</div>
                <div className="flex text-3xl mr-4 mt-1">{charCount}</div>
                </div>

                <div>
                <input onChange={e => addTitle(e)} value={title} type="text" placeholder="Title (Not for diamond)" className="mt-4 input input-bordered w-full " />
                <textarea  value={content} onChange={e => updateContentCount(e)} className="mt-4 input input-bordered w-full h-96" placeholder="Write your post here..."></textarea>
                <button  onClick={submitPost} className="btn btn-info w-full">Post It</button>
                </div>

            </div>

            <div className="rounded-md bg-white w-64 h-32 ">
                <div>
                    
                </div>

               
            </div>
            
            
        </div>
    )

}

export default Post;