import { useState } from "react";
import { Steps, Button, ButtonGroup } from "@w-design/core";

export const StepsExample = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const prevStep = () => setActiveStepIndex(activeStepIndex - 1);
  const nextStep = () => setActiveStepIndex(activeStepIndex + 1);

  return (
    <Steps
      steps={[
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
      ]}
      activeIndex={activeStepIndex}
      controlGroup={
        <ButtonGroup>
          <Button onClick={prevStep}>Previous</Button>
          <Button onClick={nextStep}>Next</Button>
        </ButtonGroup>
      }
    />
  );
};
