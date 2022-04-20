import { useState } from "react";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";

function Wizard() {
    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    });

    const [currentStep, setCurrentStep] = useState(0);

    const makeRequest = (formData) => {
        console.log("Form Submitted", formData);
    };

    const handleNextStep = (newData, final = false) => {
        setData((prev) => ({ ...prev, ...newData }));

        if (final) {
            makeRequest(newData);
            return;
        }

        setCurrentStep((prev) => prev + 1);
    };

    const handlePrevStep = (newData) => {
        setData((prev) => ({ ...prev, ...newData }));
        setCurrentStep((prev) => prev - 1);
    };

    const steps = [
        <StepOne next={handleNextStep} data={data} />,
        <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
    ];

    // console.log("data", data);

    return <>{steps[currentStep]}</>;
}

export default Wizard;
