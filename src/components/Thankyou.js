import React from 'react';
import { thankyou } from '../images';
import '../css/Thankyou.css'

const Thankyou = () => {
    return (
        <div className='personal-info'>
            <div className="thanks-desktop">
                <div className="wrap-thanks">
                    <div className="thanks-img"><img src={thankyou} alt="thankyou" /></div>
                    <h1> Thank you!</h1>
                    <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at  support@loremgaming.com. </p>
                </div>
            </div>
        </div>
    );
};

export default Thankyou;