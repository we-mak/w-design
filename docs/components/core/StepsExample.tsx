import { Button, ButtonGroup, Steps } from "@w-design/core";
import { useState } from "react";

const steps: any = [
  {
    title: "Step 1",
    content: <div>This is step 1</div>,
  },
  {
    title: "Step 2",
    content: <div>This is step 2</div>,
  },
  {
    title: "Step 3",
    content: <div>This is step 3</div>,
  },
];

const StepsExample = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const prevStep = () => setActiveStepIndex(activeStepIndex - 1);
  const nextStep = () => setActiveStepIndex(activeStepIndex + 1);

  return (
    <Steps
      steps={steps}
      activeIndex={activeStepIndex}
      controlGroup={
        <ButtonGroup>
          <Button onClick={prevStep} isDisabled={activeStepIndex === 0}>
            Previous
          </Button>
          <Button
            onClick={nextStep}
            isDisabled={activeStepIndex >= steps.length - 1}
          >
            Next
          </Button>
        </ButtonGroup>
      }
    />
  );
};

export default StepsExample;
