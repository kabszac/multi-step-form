import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from './TextError';

const splt = (c) => {
    let b = c.split(',')
    return b[0]
}
const PlanForm = (props) => {
    const{name,  options, ...rest} = props
    return (
        <div className='form-controls'>
            {/* <label>{label}</label> */}
            <Field  name={name}>
                {
                    ({field}) => {
                        console.log('field', field)
                        return options.map((option) => {
                            return (
                                <React.Fragment key={option.key}>
                                    
                                    <input 
                                        type='radio' 
                                        id={option.value} 
                                        {...field} 
                                        {...rest}
                                        value={[option.key, option.value]}
                                        checked={field.value[0] === option.key && field.value[1]===option.value} 
                                    />
                                    <label htmlFor={option.value} className='lbl-radio' id={splt(field.value) === option.key?'checked':null}>
                                        <div className="marker"><img src={option.image} alt={option.key} /></div>
                                        <div className="content">
                                            <div className="title">{option.key}</div>
                                            <div className="price">${option.value}{option.period}</div>
                                            <div className="subtext">{option.info}</div>
                                        </div>
                                    </label>
                                </ React.Fragment>
                            )
                        })
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    );
};

export default PlanForm;