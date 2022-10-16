import React from 'react';
import "../styles/studios.css";
import Studio1 from "../assets/images/studio1.jpg";
import Studio2 from "../assets/images/studio2.jpg";
import Studio3 from "../assets/images/studio3.jpg";
const Studios = () => {
    return (
        <div className='studios-wrapper'>
            <div className="container">
                <div className="title">
                    <h2>Our Workspaces</h2>
                </div>
                <div className="studios">
                    <div className='card'>
                        <img src={Studio2} alt="Studio2" />
                        <div className="card-desc">
                            <h4>Camera Roll</h4>
                            <div className="btn">
                                <button>More Details</button>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={Studio1} alt="Studio1" />
                        <div className="card-desc">
                            <h4>Meeting Space</h4>
                            <div className="btn">
                                <button>More Details</button>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={Studio3} alt="Studio3" />
                        <div className="card-desc">
                            <h4>Sound Stages</h4>
                            <div className="btn">
                                <button>More Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Studios;