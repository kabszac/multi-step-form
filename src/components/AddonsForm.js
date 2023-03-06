import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from './TextError';
import { AiFillCheckSquare } from "react-icons/ai";


const f = (a) => {
    return a.map((item) => {
        let c = item.split(',')
        let d = c[0]
        return d
    })
}

const AddonsForm = (props) => {
    const{name,  options, ...rest} = props
    return (
        <div className='form-control'>
            {/* <label>{label}</label> */}
            <Field  name={name}>
                {
                    ({field}) => {
                        console.log('field', field)
                        return options.map((option) => {
                            return (
                                <React.Fragment key={option.key}>
                                    <label htmlFor={option.value} className='lbl-radios' id={f(field.value).includes(option.key)?'checks':null}>
                                        <input 
                                            type='checkbox' 
                                            id={option.value} 
                                            {...field} 
                                            {...rest}
                                            className={f(field.value).includes(option.key)?'no-show':'show'}
                                            value={[option.key, option.value]}
                                            checked={field.value.includes(option.value)} 
                                        />
                                    
                                        <div className={f(field.value).includes(option.key)?'markers':'no-markers'}>{<AiFillCheckSquare/>}</div>
                                        <div className="contents">
                                            <div className="title">{option.key}</div>
                                            <div className="subtext">{option.info}</div>
                                        </div>
                                        <div className="prices">+${option.value}{option.period}</div>
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

export default AddonsForm;