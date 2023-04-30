import classnames from 'classnames'
import {
  Children,
  HTMLAttributes,
  PropsWithChildren,
  useCallback,
  useRef,
  useState,
} from 'react'
import { Button } from './Button'
import { Typography } from './Typography'

interface ProgressBarProps {
  currentStep: number
  totalSteps: number
}

const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  const percentage = Math.floor((currentStep / totalSteps) * 100)
  return (
    <div className="absolute flex h-full w-full items-center justify-start">
      <div className="relative w-full bg-gray-100" style={{ height: '2px' }}>
        <div
          className="h-full bg-purple-700 transition-all duration-300"
          style={{ width: percentage + '%' }}
        ></div>
      </div>
    </div>
  )
}

type NavProps = Omit<StepperProps, 'hideFooter' | 'onNext' | 'onPrev'>

const Nav = ({ active, activeSteps, onNav, children }: NavProps) => {
  return (
    <div className="mb-sm relative">
      <ProgressBar
        currentStep={active}
        totalSteps={Children.count(children) - 1}
      />
      <ol className="relative z-10 flex w-full items-center justify-between">
        {Children.map(children, (step, key) => {
          return (
            <li>
              <button
                className={classnames(
                  'flex h-10 w-10 items-center justify-center rounded-full font-bold transition-all duration-300',
                  key <= active ? 'bg-purple-600 text-white' : 'bg-gray-100',
                  key <= activeSteps
                    ? 'pointer-events-auto'
                    : 'pointer-events-none'
                )}
                onClick={() => onNav(key)}
              >
                {key + 1}
              </button>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export const StepFooter = ({ children }: PropsWithChildren) => {
  return (
    <div className="mt-sm flex w-full items-center justify-end gap-4">
      {children}
    </div>
  )
}

type DefaultFooterProps = Omit<StepperProps, 'activeSteps' | 'onNav'>

const DefaultFooter = ({
  hideFooter,
  active,
  onNext,
  onPrev,
  children,
}: DefaultFooterProps) => {
  const totalSteps = Number(Children.count(children) - 1)

  if (hideFooter) return null

  return (
    <StepFooter>
      {!!active && <Button onClick={onPrev}>Prev</Button>}
      <Button onClick={onNext}>
        {active === totalSteps ? 'Done' : 'Next'}
      </Button>
    </StepFooter>
  )
}

export interface StepProps
  extends HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  title: string
}

export const Step = (props: StepProps) => {
  const { title, className, children } = props

  return (
    <div className={classnames('w-full', className)}>
      <Typography as="h2" variant="title-section" className="mb-sm">
        {title}
      </Typography>
      {children}
    </div>
  )
}

export interface StepperProps extends PropsWithChildren {
  active: number
  activeSteps: number
  onNav: (step: number) => void
  hideFooter?: boolean
  onNext: () => void
  onPrev: () => void
}

export const Stepper: React.FC<StepperProps> = (props) => {
  const { active, children } = props
  const steps = Children.toArray(children)

  return (
    <div className="h-auto w-full">
      <Nav {...props} />
      {steps.map((step, key) => {
        if (active === key) return <>{step}</>
      })}
      <DefaultFooter {...props} />
    </div>
  )
}

interface UseStepperProps {
  defaultActiveStep?: number
}

export const useStepper = (props?: UseStepperProps) => {
  const { defaultActiveStep = 0 } = props ? props : {}
  const [step, setStep] = useState(defaultActiveStep)
  const ref = useRef(defaultActiveStep)

  const handleNext = useCallback(() => {
    setStep((current) => {
      ref.current = Number(current + 1)
      return Number(current + 1)
    })
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
      activeSteps: ref.current,
      onNext: handleNext,
      onPrev: handlePrev,
      onNav: handleNav,
    },
    onNext: handleNext,
    onPrev: handlePrev,
  }
}