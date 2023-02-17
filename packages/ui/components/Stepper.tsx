import classnames from 'classnames'
import { Children, PropsWithChildren, useCallback, useState } from 'react'

interface ProgressBarProps {
  currentStep: number
  totalSteps: number
}

const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  const percentage = Math.floor((currentStep / totalSteps) * 100)
  return (
    <div className="absolute flex h-full w-full items-center justify-start">
      <div
        className="bg-purple-700"
        style={{ height: '2px', width: percentage + '%' }}
      ></div>
    </div>
  )
}

interface NavProps extends Omit<StepperProps, 'dispatch'> {
  onClick: (step: number) => void
}

const Nav = ({ active, onClick, children }: NavProps) => {
  return (
    <div className="mb-sm relative">
      <ProgressBar
        currentStep={Number(active + 1)}
        totalSteps={Children.count(children)}
      />
      <ol className="relative z-10 flex w-full items-center justify-around">
        {Children.map(children, (step, key) => {
          return (
            <li>
              <span
                className={classnames(
                  'flex h-10 w-10 items-center justify-center rounded-full font-bold',
                  key <= active ? 'bg-purple-600 text-white' : 'bg-gray-100'
                )}
              >
                {key + 1}
              </span>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export type StepProps = PropsWithChildren

export const Step = ({ children }: StepProps) => {
  return <div className="w-full">{children}</div>
}

export interface StepperProps extends PropsWithChildren {
  active: number
  onNav: (step: number) => void
}

export const Stepper: React.FC<StepperProps> = (props) => {
  const { active, onNav, children } = props
  const steps = Children.toArray(children)

  return (
    <div className="h-auto w-full">
      <Nav onClick={onNav} {...props} />
      {steps[active]}
    </div>
  )
}

interface UseStepperProps {
  defaultActiveStep?: number
}

export const useStepper = (props: UseStepperProps) => {
  const { defaultActiveStep = 0 } = props
  const [step, setStep] = useState(defaultActiveStep)

  const handleNext = useCallback(() => {
    setStep((current) => Number(current + 1))
  }, [setStep])

  const handlePrev = useCallback(() => {
    setStep((current) => Number(current - 1))
  }, [setStep])

  const handleNav = useCallback(
    (step: number) => {
      setStep(step)
    },
    [setStep]
  )

  return {
    stepperProps: {
      active: step,
      onNav: handleNav,
    },
    onNext: handleNext,
    onPrev: handlePrev,
  }
}
