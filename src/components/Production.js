import React from 'react';
import "../styles/production.css";
import ProductionImg from "../assets/images/production.jpg";

const Production = () => {
    return (
        <div className='production'>
            <div className="production-img">
                <img src={ProductionImg} alt="production-img" />
            </div>
            <div className="production-desc">
                <h1 className='production-heading'>
                    We are a creative film and photo production company based in New York.
                </h1>
                <p>
                    We are a creative film and photo production company hungry for quality in aesthetics. To create modern recognizable stuff we are working with a strong network of experienced professionals. We set up teams to shape your identity, push your idea and manage the workflow from pre- to post-production.
                </p>
                <div className='production-btn'>
                        <button>
                            Our Production
                        </button>
                </div>
            </div>            
        </div>
    );
};

export default Production;