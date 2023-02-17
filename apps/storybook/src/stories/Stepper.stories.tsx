import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from 'ui/components/Button'
import { Step, Stepper, StepperProps, useStepper } from 'ui/components/Stepper'
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
  const { stepperProps, onNext, onPrev } = useStepper({})

  return (
    <Stepper {...stepperProps}>
      <Step>
        <Typography as="h2" variant="title-section" className="mb-sm">
          Step 1
        </Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi illo
        eligendi inventore provident atque saepe fuga temporibus vel id porro!
        <div className="mt-sm flex w-full items-center justify-end gap-4">
          <Button onClick={onNext}>Next</Button>
        </div>
      </Step>
      <Step>
        <Typography as="h2" variant="title-section" className="mb-sm">
          Step 2
        </Typography>
        Dolor dicta earum odio suscipit nihil accusamus totam. Similique
        perspiciatis modi aperiam. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Excepturi illo eligendi inventore provident atque
        saepe fuga temporibus vel id porro!
        <div className="mt-sm flex w-full items-center justify-end gap-4">
          <Button onClick={onPrev}>Prev</Button>
          <Button onClick={onNext}>Next</Button>
        </div>
      </Step>
      <Step>
        <Typography as="h2" variant="title-section" className="mb-sm">
          Step 3
        </Typography>
        Excepturi illo eligendi inventore provident atque saepe fuga temporibus
        vel id porro! Similique est incidunt illo distinctio quidem
        perspiciatis?
        <div className="mt-sm flex w-full items-center justify-end gap-4">
          <Button onClick={onPrev}>Prev</Button>
          <Button>Done</Button>
        </div>
      </Step>
    </Stepper>
  )
}
