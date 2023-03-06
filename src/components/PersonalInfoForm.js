import React from 'react';
import { Formik, Form,  Field, ErrorMessage} from 'formik';
import { FormContext } from '../App';
import * as Yup from 'yup'
import TextError from './TextError';
import "yup-phone";
import { useContext } from 'react';



const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().email('Wrong format').required('Required!'),
    phone: Yup.string().matches(phoneRegExp, 'Required!').required('Required!')
})
const PersonalInfoForm = () => {
    const { formData, handleNext } = useContext(FormContext)
    return (
        <Formik 
            initialValues={formData}  
            validationSchema={validationSchema}
            onSubmit={(values) => {
                handleNext(values)
                console.log(values)
            }}
        >
            <Form>
                <div className="form-control">
                    <div className="label-error">
                        <label htmlFor="name">Name</label>
                        <ErrorMessage name='name' component={TextError}/>
                    </div>
                    <Field name='name'>
                        {
                            (props) =>  {
                                const {field, form, meta} = props
                                return(
                                   
                                    <input 
                                        type="text" 
                                        name="name" 
                                        id="name" 
                                        className={meta.touched && meta.error? "input-error": null} 
                                        placeholder='e.g Stephen King'
                                        {...field}
                                    />
                                        
                                    
                                )
                            }
                        }
                    </Field>   
                </div>

                <div className="form-control">
                    <div className="label-error">
                        <label htmlFor="email">Email</label>
                        <ErrorMessage name='email' component={TextError}/>
                    </div>
                    <Field name='email'>
                        {
                            (props) =>  {
                                const {field, form, meta} = props
                                return(
                                   
                                    <input 
                                        type="text" 
                                        name="email" 
                                        id="email" 
                                        className={meta.touched && meta.error? "input-error": null} 
                                        placeholder='e.g StephenKing@lorem.com'
                                        {...field}
                                    />
                                        
                                    
                                )
                            }
                        }
                    </Field>   
                </div>

                <div className="form-control">
                    <div className="label-error">
                        <label htmlFor="phone">Phone Number</label>
                        <ErrorMessage name='phone' component={TextError}/>
                    </div>
                    <Field name='phone'>
                        {
                            (props) =>  {
                                const {field, form, meta} = props
                                return(
                                   
                                    <input 
                                        type="text" 
                                        name="phone" 
                                        id="phone" 
                                        className={meta.touched && meta.error? "input-error": null} 
                                        placeholder='e.g 0741768612'
                                        {...field}
                                    />
                                        
                                    
                                )
                            }
                        }
                    </Field>   
                </div>
                <button type='submit' className='form-submit'>
                    Next Step
                </button>
            </Form>
        </Formik>
    );
};

export default PersonalInfoForm;