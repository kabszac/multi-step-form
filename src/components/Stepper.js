import React, { useContext, useEffect } from 'react';
import '../css/Stepper.css'
import { FormContext } from '../App';
import { mobile } from '../images';


const Stepper = () => {
    const {activeStepIndex} = useContext(FormContext)
    useEffect(() => {
        const stepperItems = document.querySelectorAll(".stepper-number");
        stepperItems.forEach((step, i) => {
          if (i == activeStepIndex) {
            step.classList.add("active");
          } else {
            step.classList.remove("active");
          }
        });
      }, [activeStepIndex]);
    return (
      <>

        <div className='stepper'> 
            <div className="wrapper">   
                <div className="stepper-number">1</div>
                <div className="stepper-number">2</div>
                <div className="stepper-number">3</div>
                <div className="stepper-number">4</div>
            </div>  
        </div>
        <div className="stepper-desktop">
          <div className="stepper-desktop-grp">
            <div className="stepper-number" id={activeStepIndex === 0?'active-desktop1':null}>1</div>
            <div className="stepper-info">
              <p className='stepper-step-count'>STEP 1</p>
              <p className='stepper-step-name'>YOUR INFO</p>
            </div>
          </div>
          <div className="stepper-desktop-grp">
            <div className="stepper-number" id={activeStepIndex === 1?'active-desktop2':null}>2</div>
            <div className="stepper-info">
              <p className='stepper-step-count'>STEP 2</p>
              <p className='stepper-step-name'>SELECT PLAN</p>
            </div>
          </div>
          <div className="stepper-desktop-grp">
            <div className="stepper-number" id={activeStepIndex === 2?'active-desktop3':null}>3</div>
            <div className="stepper-info">
              <p className='stepper-step-count'>STEP 3</p>
              <p className='stepper-step-name'>ADD-ONS</p>
            </div>
          </div>
          <div className="stepper-desktop-grp">
            <div className="stepper-number" id={activeStepIndex === 3?'active-desktop4':null}>4</div>
            <div className="stepper-info">
              <p className='stepper-step-count'>STEP 4</p>
              <p className='stepper-step-name'>SUMMARY</p>
            </div>
          </div>
        </div>
      </>
    );
};

export default Stepper;