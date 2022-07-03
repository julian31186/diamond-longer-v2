import React, { useState, useEffect } from 'react'
import Cards from '../components/Cards';
import { toastySuccess, toastyFailure } from '../components/toasts';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Deso from 'deso-protocol';
import axios from 'axios'
function Tickets() {
    const pfps = [
        "https://i.pinimg.com/originals/83/89/2c/83892c806ca8f287926b91f15ce5adc0.jpg",
        "https://i.pinimg.com/236x/91/fd/ce/91fdceeaba021b3c87e8d696c13d618f.jpg",
        "http://pm1.narvii.com/7305/f687328407de3238a00b165790d5b01a505ff9d6r1-720-960v2_uhq.jpg",
    ];
    const [post, setPost] = useState([]);
    const [publicKey, setPublicKey] = useState("");
    const deso = new Deso()
    const getPosts = async (publicKey) => {
        const BASEURI = "https://api.desodev.com/api";
        const path = "/v0/get-posts-for-public-key";

        const data = {
            PublicKeyBase58Check: publicKey,
            ReaderPublicKeyBase58Check: "",
            NumToFetch: 20,
            MediaRequired: false,
        };
        const res = await axios.post(BASEURI + path, data, { mode: "no-cors", headers: { "Access-Control-Allow-Origin": "*" } }).then((res) => {
            // console.log(res.data);
            return res.data;
        });
        console.log(res);
        let x = res.Posts;
        let y = [];
        for (let i = 0; i < x.length; i++) {
            if (x[i].Body.includes("@DiamondLonger")) {
                x[i].Body = x[i].Body.toString().replace("@DiamondLonger", "");
                // console.log(k);
                y.push(x[i]);
            }
        }
        console.log(y);
        setPost((prev) => [...prev, ...y]);
    };
    useEffect(() => {
        try {
            toastySuccess("checking to see if you have already logged in");
            const key = deso.identity.getUserKey();
            if (key !== "" && key !== null) {
                setPublicKey(key);
                toastySuccess("you have already logged in, check footer for details");
            }
        } catch (e) {
            console.log(e);
        }
    }, []);
    useEffect(() => {
        getPosts(publicKey);
    }, [publicKey]);
    useEffect(() => {
        getPosts("BC1YLfyvnDiwb1PLjdB4KtLhCiDoaV4qZ1MUJs15tzdDAXe4LBtfs8x");
    }, []);
    return (
        <div>{post.length > 0 &&
            post.map((post, index) => {
                let body = post.Body;
                let image = post.ImageURLs[0];
                let poster = post.PosterPublicKeyBase58Check;

                return (
                    <Cards
                        name={poster}
                        image={image}
                        desc={body}
                        key={index}
                        userImage={pfps[pfps.length % (index + 1)]}
                    />
                );
            })}</div>
    )
}

export default Tickets