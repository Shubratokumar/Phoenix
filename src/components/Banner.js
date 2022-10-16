import React from 'react';
import "../styles/banner.css";

const Banner = () => {
    return (
        <div className='banner'>
            <div className="heading-wrapper">
                <div className="heading">
                    <h5 className='sub-heading'>Let's Make</h5>
                    <h1 className='main-heading'>Great things Together!</h1>
                    <div className='hire-btn'>
                        <button>
                            Hire Us Now
                        </button>
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default Banner;