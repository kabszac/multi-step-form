import { Form, Formik } from 'formik';
import React, { useContext } from 'react';
import * as Yup from 'yup'
import { arcade } from '../images';
import { advanced } from '../images';
import { pro } from '../images';
import FormikControl from './FormikControl';
import { FormContext } from '../App';
import Switch from "react-switch";
import '../css/Plan.css'

const Plan = () => {
    const {  formData, activeStepIndex, setActiveStepIndex, duration, toggleDuration, handleNext, handlePrev } = useContext(FormContext)
    const validationSchema = Yup.object({
        radioOption:Yup.string().required('Required!')
    })
    const radioOption1 = [
        {
            key:'Arcade',
            value: 9,
            image: arcade,
            period: '/mo',
        },
        {
            key:'Advanced',
            value: 12,
            image: advanced,
            period: '/mo',
        },
        {
            key:'Pro',
            value: 15,
            image: pro,
            period: '/mo',
        }       
    ]
    const radioOption2 = [
        {
            key:'Arcade',
            value: 90,
            image: arcade,
            period: '/yr',
            info: '2 months free'
        },
        {
            key:'Advanced',
            value: 120,
            image: advanced,
            period: '/yr',
            info: '2 months free'
        },
        {
            key:'Pro',
            value: 150,
            image: pro,
            period: '/yr',
            info: '2 months free'
        }    
    ]
    return (
        <div className="personal-info">
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing</p>
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
                                control='radio' 
                                name='radioOption'
                                options={radioOption1}
                            />
                            <button type='submit' className='form-submit'>Next</button>
                        </Form>
                    )
                }
                
            </Formik> */}
            <div className="plan-choice-wrap">
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
                                <FormikControl control='radio' name='radioOption' options={radioOption1}/>
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
                                <FormikControl control='radio' name='radioOption' options={radioOption2}/>
                                <button type='submit' className='form-submit'>Next Step</button>
                            </Form>
                        )
                    }
                </Formik>
            }
            </div>
            <div className="plan-toggle">
                <p className={duration?"toggle-active":null}>Monthly</p>
                <Switch onChange={toggleDuration} checked={duration === false}  uncheckedIcon={false} checkedIcon={false} onColor='#02295a'/>
                <p className={duration? null:'toggle-active'}>Yearly</p>
            </div>
            <button type='button' className='go-back' onClick={handlePrev}>Go Back</button>
        </div>
    );
};

export default Plan;