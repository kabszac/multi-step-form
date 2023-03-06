import React from 'react';
import AddonsForm from './AddonsForm';
import PlanForm from './PlanForm';


const FormikControl = (props) => {
    const {control, ...rest} = props
    switch(control){
        case 'radio':
            return <PlanForm {...rest}/>
        case  'checkbox':
            return <AddonsForm {...rest}/>
        default: return null 
    }
};

export default FormikControl;