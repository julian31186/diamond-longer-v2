import React from "react";
import "./cards.css";

function Cards({ image, desc, userImage }) {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <img src={image} alt="rover" />
                </div>
                <div className="card-body">
                    <h4>{desc}</h4>
                    {/* <p>An exploration into the truck's polarising design</p> */}
                    <div className="user">
                        <img src={userImage} alt="user" />
                        <div className="user-info">
                            <h5>March</h5>
                            <small>2h ago</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;