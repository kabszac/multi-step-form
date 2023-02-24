import React, { useContext, useEffect } from 'react';
import '../css/Stepper.css'
import { FormContext } from '../App';
import { mobile } from '../images';

const Stepper = () => {
    const {activeStepIndex} = useContext(FormContext)
    useEffect(() => {
        const stepperItems = document.querySelectorAll(".stepper-number");
        stepperItems.forEach((step, i) => {
          if (i <= activeStepIndex) {
            step.classList.add("active");
          } else {
            step.classList.remove("active");
          }
        });
      }, [activeStepIndex]);
    return (
        <div className='stepper'> 
            <div className="wrapper">   
                <div className="stepper-number">1</div>
                <div className="stepper-number">2</div>
                <div className="stepper-number">3</div>
                <div className="stepper-number">4</div>
            </div>  
        </div>
    );
};

export default Stepper;