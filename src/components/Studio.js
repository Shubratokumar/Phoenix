import React from 'react';
import "../styles/studio.css";
import StudioImg from "../assets/images/studio.jpg";

const Studio = () => {
    return (
        <div className='studio'>            
            <div className="studio-desc">
                <h1 className='studio-heading'>
                    Do not hesitate to choose 
                    <br />
                    Phoenix Media as your studio.
                </h1>
                <p>
                    Donec accumsan auctor iaculis. Sed suscipit arcu ligula at egestas magna molestie a. Proin ac ex maximus, ultrices justo eget, sodales orci.                    
                </p>
                <p>
                    Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, idae gravida mi purus sit amet erat. Ut dictum nisi massa, vitae pulvinar metus scelerisque in.
                </p>
                <div className='studio-btn'>
                        <button>
                            Our Studios
                        </button>
                </div>
            </div>
            <div className="studio-img">
                <img src={StudioImg} alt="studio-img" />
            </div>
        </div>
    );
};

export default Studio;