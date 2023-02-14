import classnames from 'classnames'
import { Children, PropsWithChildren } from 'react'

interface ProgressBarProps {
  currentStep: number
  totalSteps: number
}

const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  const percentage = Math.floor((currentStep + 1 / totalSteps) * 100)
  return <div>{percentage}%</div>
}

type NavProps = StepperProps
const Nav = ({ active, dispatch, children }: NavProps) => {
  return (
    <div className="mb-sm relative">
      <ol className="flex w-full items-center justify-evenly">
        {Children.map(children, (step, key) => {
          return (
            <li>
              <span
                className={classnames(
                  'flex h-10 w-10 items-center justify-center rounded-full font-bold',
                  active === key ? 'bg-purple-600 text-white' : 'bg-gray-100'
                )}
              >
                {key + 1}
              </span>
            </li>
          )
        })}
      </ol>
      <ProgressBar currentStep={active} totalSteps={Children.count(children)} />
    </div>
  )
}

export type StepProps = PropsWithChildren

export const Step = ({ children }: StepProps) => {
  return <div className="w-full">{children}</div>
}

export interface StepperProps extends PropsWithChildren {
  active: number
  dispatch: React.Dispatch<React.SetStateAction<number>>
}

export const Stepper: React.FC<StepperProps> = (props) => {
  const { active, dispatch, children } = props
  const steps = Children.toArray(children)

  return (
    <div className="h-auto w-full">
      <Nav {...props} />
      {steps[active]}
    </div>
  )
}
