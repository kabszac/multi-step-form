
import { createContext, useState } from 'react';
import './App.css';
import PersonalInfo from './components/PersonalInfo';
import Step from './components/Step';
import Stepper from './components/Stepper';

export const FormContext = createContext()
function App() {
  const [activeStepIndex, setActiveStepIndex] = useState(0)
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    phone:'',
    radioOption: '',
    checkboxOptions:[]
  });
  const handleNext = (newData) => {
    setFormData((curr) => ({...curr, ...newData}))
    setActiveStepIndex((curr) => curr + 1)
  }
  const handlePrev = (newData) => {
    setFormData((curr) => ({...curr, ...newData}))
    setActiveStepIndex((prev) => prev - 1)
  }
  const[duration, setDuration] = useState(true)
  const toggleDuration = () => {
    setDuration(!duration)
  }
  return (
    <FormContext.Provider value={{activeStepIndex, setActiveStepIndex, formData, setFormData,duration, toggleDuration, handleNext, handlePrev}}>
      <div className="App">
        <Stepper/>
        <Step/>
      </div>
    </FormContext.Provider>
  );
}

export default App;
