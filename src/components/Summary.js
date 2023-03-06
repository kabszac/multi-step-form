import React from 'react';
import { useContext } from 'react';
import { FormContext } from '../App';
import '../css/Summary.css'


const splt = (c) => {
    let b = c.split(',')
    return b[0]
}
const spltLst = (c) => {
    let b = c.split(',')
    return b
}

const number = (c) => {
    let b = c.split(',')
    return Number(b[1])
}
const checkboxNames = (lst) => {
    return lst.map((item) => splt(item))
}
const checkboxPriceLst = (lst) => {
    return lst.map((item) => number(item))
}
const Summary = () => {
    const {formData, activeStepIndex, setActiveStepIndex, duration,  handlePrev} = useContext(FormContext)
    const priceLst = [...checkboxPriceLst(formData.checkboxOptions), number(formData.radioOption)]
    const handleChange = () => {
        setActiveStepIndex((curr) => curr-2)
    }
    const handleConfirm = () => {
        setActiveStepIndex((curr) => curr + 1)
    }
    return (
        <div className="personal-info">
            <h1>Finishing up</h1>
            <p>Double check everything looks OK before confirming</p>
            {
                duration?<div className='summary'>
                    <div className="plan-addons">
                        <div className="plan">
                            <div className="plan-name">
                                {splt(formData.radioOption)} (Monthly)
                                <div className="change"><button onClick={handleChange}>Change</button></div>  
                            </div>
                            <div className="plan-price">${number(formData.radioOption)}/mo</div>
                        </div>
                        <hr />
                        <div className="addons">
                            <div className="item-class">
                                {checkboxNames(formData.checkboxOptions).map(item => (
                                    <div className='item' key={item}>{item}</div>
                                ))}
                            </div>     
                            <div className="price-class">
                                {checkboxPriceLst(formData.checkboxOptions).map(no => (
                                    <div className='item-price' key={no}>+${no}/mo</div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="total">
                        <div className="total-name">Total (per month)</div>
                        <div className="total-price">
                            ${priceLst.reduce((accumulator, currentValue) => accumulator + currentValue,0)}/mo
                        </div>
                    </div>
                    <button className='go-back' onClick={handlePrev}>Go Back</button>
                    <button className='form-submit' onClick={handleConfirm}>Confirm</button>
                </div>:<div className='summary'>
                    <div className="plan-addons">
                        <div className="plan">
                                <div className="plan-name">
                                    {splt(formData.radioOption)} (Yearly)
                                    <div className="change"><button onClick={handleChange}>Change</button></div>  
                                </div>
                                <div className="plan-price">${number(formData.radioOption)}/yr</div>  
                        </div>
                        <hr />
                        <div className="addons">
                            <div className="item-class">
                                {checkboxNames(formData.checkboxOptions).map(item => (
                                    <div className='item' key={item}>{item}</div>
                                ))}
                            </div>     
                            <div className="price-class">
                                {checkboxPriceLst(formData.checkboxOptions).map(no => (
                                    <div className='item-price' key={no}>+${no}/yr</div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="total">
                        <div className="total-name">Total (per year)</div>
                        <div className="total-price">
                            ${priceLst.reduce((accumulator, currentValue) => accumulator + currentValue,0)}/yr
                        </div>
                    </div>
                    <button className='go-back' onClick={handlePrev}>Go Back</button>
                    <button className='form-submit' onClick={handleConfirm}>Confirm</button>
                </div>
            }
        </div>
    );
};

export default Summary;