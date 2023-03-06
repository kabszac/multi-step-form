import React from 'react';
import PersonalInfoForm from './PersonalInfoForm';
import '../css/Personal.css'

const PersonalInfo = () => {
    return (
        <React.Fragment className='personal-info-wrapper'>
            <div className='personal-info'>
                <h1>Personal Info</h1>
                <p>Please provide your name, email address, and phone number</p>
                <PersonalInfoForm/>
            </div>
        </React.Fragment>
    );
};

export default PersonalInfo;