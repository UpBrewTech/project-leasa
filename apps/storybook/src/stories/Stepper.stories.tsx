import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import { Step, Stepper, StepperProps } from 'ui/components/Stepper'
import { Typography } from 'ui/components/Typography'

export default {
  title: 'Example/Stepper',
  component: Stepper,
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    viewMode: 'docs',
  },
} as ComponentMeta<typeof Stepper>

export const Default: ComponentStory<typeof Stepper> = (args: StepperProps) => {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <Stepper active={activeStep} dispatch={setActiveStep}>
      <Step>
        <Typography as="h2" variant="title-section" className="mb-sm">
          Step 1
        </Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi illo
        eligendi inventore provident atque saepe fuga temporibus vel id porro!
      </Step>
      <Step>
        <Typography as="h2" variant="title-section" className="mb-sm">
          Step 2
        </Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi illo
        eligendi inventore provident atque saepe fuga temporibus vel id porro!
      </Step>
      <Step>
        <Typography as="h2" variant="title-section" className="mb-sm">
          Step 3
        </Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi illo
        eligendi inventore provident atque saepe fuga temporibus vel id porro!
      </Step>
    </Stepper>
  )
}
