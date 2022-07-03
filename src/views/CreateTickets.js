import React, { useState, useEffect } from 'react'
import './createticks.css'
import Deso from 'deso-protocol';
import { toastySuccess } from '../components/toasts'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function CreateTickets() {
    const [publicKey, setPublicKey] = useState("");
    const [bio, setBio] = useState("");
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");
    const [link, setLink] = useState("");
    const [vidLink, setVidlink] = useState("");
    const [postLink, setPostLink] = useState("");
    const deso = new Deso();
    useEffect(() => {
        try {
            toastySuccess("checking to see if you have already logged in");
            const key = deso.identity.getUserKey();
            console.log(key);
            if (key !== "" && key !== null) {
                setPublicKey(key);
                toastySuccess("you have already logged in");
            }
        } catch (e) {
            console.log(e);
        }
    }, []);
    const postTickets = async () => {
        toastySuccess("Posting your ticket on chain!");
        let baseUri = "https://diamondapp.com/posts";
        let url = link
            ? link
            : "https://www.onetherapybrighton.com/wp-content/uploads/2017/11/cartoon-counselling-session-e1521493521159.jpg";
        let vidUrl = vidLink
            ? vidLink
            : "https://media.giphy.com/media/wKNShEiXo1V5SFwyMa/giphy.gif";
        console.log(url, vidUrl);
        const postReq = {
            UpdaterPublicKeyBase58Check: publicKey,
            BodyObj: {
                Body: `name: ${name} bio: ${bio} location: ${location} price: ${price}   @DiamondLonger`,
                VideoURLs: [vidLink],
                ImageURLs: [url],
            },
        };
        const res = await deso.posts.submitPost(postReq);
        let finalLink = `${baseUri}/${res.PostHashHex}`;
        setPostLink(finalLink);
        console.log(res);
        toastySuccess("Posted on chain...");
        setBio("");
        setName("");
        setLocation("");
        setPrice("");
        setLink("");
        setVidlink("");
    };

    return (
        <div className="main-container">
            <p className="title" style={{ marginBottom: "10px", color: "black" }}>
                Enter your Details
            </p>
            <div className="form-container">
                <input
                    type="text"
                    placeholder="Tell us a little about your concert"
                    value={bio}
                    onChange={(e) => {
                        setBio(e.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="Where will the concert be held?"
                    value={location}
                    onChange={(e) => {
                        setLocation(e.target.value);
                    }}
                />

                <input
                    type="text"
                    placeholder="Your Name/Band's Name"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="What is your price? "
                    value={price}
                    onChange={(e) => {
                        setPrice(e.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="Add any image you want to add "
                    value={link}
                    onChange={(e) => {
                        setLink(e.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="Add any Video you want to add "
                    value={vidLink}
                    onChange={(e) => {
                        setVidlink(e.target.value);
                    }}
                />
                <div>
                    <button className="btn bg-twitblue border-0 btn-active text-white hover:bg-gray-400" onClick={postTickets} >
                        Submit your Tickets on chain!
                    </button>
                </div>

            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {postLink && (
                <header>
                    <div className="right">{postLink}</div>
                </header>
            )}
        </div>
    )
}

export default CreateTickets