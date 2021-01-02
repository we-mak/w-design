import { Steps, Button, ButtonGroup } from "@w-design/core";
import { useState } from "react";

export const StepsExample = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const prevStep = () => setActiveStepIndex(activeStepIndex - 1);
  const nextStep = () => setActiveStepIndex(activeStepIndex + 1);

  return (
    <Steps
      steps={[
        {
          title: "Step 1",
          content: "This is step 1",
        },
        {
          title: "Step 2",
          content: "This is step 2",
        },
        {
          title: "Step 3",
          content: "This is step 3",
        },
      ]}
      activeIndex={activeStepIndex}
      controlGroup={
        <ButtonGroup>
          <Button onClick={prevStep}>Prev</Button>
          <Button onClick={nextStep}>Next</Button>
        </ButtonGroup>
      }
    />
  );
};
