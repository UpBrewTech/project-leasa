import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from 'ui/components/Button'
import {
  Step,
  StepFooter,
  Stepper,
  StepperProps,
  useStepper,
} from 'ui/components/Stepper'

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
      <Step title="Step 1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi illo
        eligendi inventore provident atque saepe fuga temporibus vel id porro!
        <StepFooter>
          <Button onClick={onNext}>Next</Button>
        </StepFooter>
      </Step>
      <Step title="Step 2">
        Dolor dicta earum odio suscipit nihil accusamus totam. Similique
        perspiciatis modi aperiam. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Excepturi illo eligendi inventore provident atque
        saepe fuga temporibus vel id porro!
        <StepFooter>
          <Button onClick={onPrev}>Prev</Button>
          <Button onClick={onNext}>Next</Button>
        </StepFooter>
      </Step>
      <Step title="Step 3">
        Excepturi illo eligendi inventore provident atque saepe fuga temporibus
        vel id porro! Similique est incidunt illo distinctio quidem
        perspiciatis?
        <StepFooter>
          <Button onClick={onPrev}>Prev</Button>
          <Button onClick={onNext}>Next</Button>
        </StepFooter>
      </Step>
      <Step title="Step 4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus commodi
        eum cumque quibusdam culpa saepe, suscipit voluptatibus laudantium in
        similique inventore cum corrupti totam obcaecati optio eligendi
        repudiandae nulla vero hic quo odio alias tempore ipsum aliquid. Quod
        repellendus cumque unde. Voluptas nostrum illo ullam temporibus debitis
        nemo voluptatum eos.
        <StepFooter>
          <Button onClick={onPrev}>Prev</Button>
          <Button>Done</Button>
        </StepFooter>
      </Step>
    </Stepper>
  )
}
