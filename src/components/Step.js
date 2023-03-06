// Step.js
import React, { useContext } from "react";
import { FormContext } from "../App";
import Addons from "./Addons";
import PersonalInfo from "./PersonalInfo";
import Plan from "./Plan";
import Summary from "./Summary";
import Thankyou from "./Thankyou";

function Step() {
  const { activeStepIndex } = useContext(FormContext);
  let stepContent;
  switch (activeStepIndex) {
    case 0:
      stepContent = <PersonalInfo/>;
      break;
    case 1:
      stepContent = <Plan/>;
      break;
    case 2:
      stepContent = <Addons/>;
      break;
    case 3:
      stepContent = <Summary/>
      break
    case 4:
      stepContent = <Thankyou/>
      break;
    default:
  }

  return stepContent;
}

export default Step;
