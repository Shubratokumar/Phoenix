import React from 'react';
import "../styles/footer.css";

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <footer className='footer'>
                <div className='copyright'>
                    Copyright &copy; 2022 | All Right Reserved by  <span>Phoenix Media</span>
                </div>
                <div className="developer">
                    Developed by <span>Shubrato Kumar</span>
                </div>
                
            </footer>
        </div>
    );
};

export default Footer;