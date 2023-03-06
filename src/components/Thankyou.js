import React from 'react';
import { thankyou } from '../images';
import '../css/Thankyou.css'

const Thankyou = () => {
    return (
        <>
            <div className='personal-info'>
                    <div className="wrap-thanks">
                        <div className="thanks-img"><img src={thankyou} alt="thankyou" /></div>
                        <h1> Thank you!</h1>
                        <div className="wrap-thanks-p">
                            <p>Thanks for confirming your subscription! </p>
                            <p>We hope you have fun using our platform</p>
                            <p>If you ever need support please free to email us.</p>
                        </div>                     
                    </div>
            </div>
        </>
    );
};

export default Thankyou;