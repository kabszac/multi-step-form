import { Form, Formik } from 'formik';
import React, { useContext } from 'react';
import * as Yup from 'yup'
import FormikControl from './FormikControl';
import { FormContext } from '../App';
import '../css/Addons.css'

const Addons = () => {
    const {  formData, activeStepIndex, setActiveStepIndex, duration, toggleDuration, handleNext, handlePrev } = useContext(FormContext)
    const validationSchema = Yup.object({
        //radioOption:Yup.string().required('Required!')
    })
    const checkboxOptions1 = [
        {
            key:'Online Services',
            value: 1,
            period: '/mo',
            info: 'Access to multiplayer games'
        },
        {
            key:'Larger Storage',
            value: 2,
            period: '/mo',
            info: 'Extra 1TB of cloud save'
        },
        {
            key:'Customizable profile',
            value: 3,
            period: '/mo',
            info: 'Custom theme on your profile'
        }       
    ]
    const checkboxOptions2 = [
        {
            key:'Online Services',
            value: 10,
            period: '/yr',
            info: 'Access to multiplayer games'
        },
        {
            key:'Larger Storage',
            value: 20,
            period: '/yr',
            info: 'Extra 1TB of cloud save'
        },
        {
            key:'Customizable profile',
            value: 30,
            period: '/yr',
            info: 'Custom theme on your profile'
        }    
    ]
    return (
        <div className="personal-info">
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience</p>
            {/* <Formik 
                initialValues={formData} 
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    handleNext(values)
                    console.log('data', values)
                }}
            >
                {
                    (formik) => (
                        <Form>
                            <FormikControl 
                                control='checkbox' 
                                name='checkboxOptions'
                                options={checkboxOptions1}
                            />
                            <button type='submit' className='form-submit'>Next Step</button>
                        </Form>
                    )
                }
                
            </Formik> */}
            {
                duration? <Formik 
                initialValues={formData} 
                validationSchema={validationSchema}
                onSubmit={(values)=>{
                    handleNext(values)
                    console.log('data', values)
                }}>
                    {
                        (formik) => (
                            <Form>
                                <FormikControl control='checkbox' name='checkboxOptions' options={checkboxOptions1}/>
                                <button type='submit' className='form-submit'>Next Step</button>
                            </Form>
                        )
                    }
                </Formik>:<Formik 
                initialValues={formData} 
                validationSchema={validationSchema}
                onSubmit={(values)=>{
                    handleNext(values)
                    console.log('data', values)
                }}>
                    {
                        (formik) => (
                            <Form>
                                <FormikControl control='checkbox' name='checkboxOptions' options={checkboxOptions2}/>
                                <button type='submit' className='form-submit'>Next Step</button>
                            </Form>
                        )
                    }
                </Formik>
            }
            <button type='button' className='go-back' onClick={handlePrev}>Go Back</button>
        </div>
    );
};

export default Addons;