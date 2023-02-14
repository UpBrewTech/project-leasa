import classnames from 'classnames'
import { Children, PropsWithChildren, useCallback } from 'react'
import { Button } from './Button'

interface ProgressBarProps {
  currentStep: number
  totalSteps: number
}

const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  const percentage = Math.floor((currentStep / totalSteps) * 100)
  return <div>{percentage}%</div>
}

interface NavProps extends Omit<StepperProps, 'dispatch'> {
  onClick: (step: number) => void
}
const Nav = ({ active, onClick, children }: NavProps) => {
  return (
    <div className="mb-sm relative">
      <ol className="flex w-full items-center justify-evenly">
        {Children.map(children, (step, key) => {
          return (
            <li>
              <button
                type="button"
                className={classnames(
                  'flex h-10 w-10 items-center justify-center rounded-full font-bold',
                  key <= active ? 'bg-purple-600 text-white' : 'bg-gray-100'
                )}
                onClick={() => onClick(key)}
              >
                {key + 1}
              </button>
            </li>
          )
        })}
      </ol>
      <ProgressBar
        currentStep={Number(active + 1)}
        totalSteps={Children.count(children)}
      />
    </div>
  )
}

interface FooterButtonsProps {
  currentStep: number
  totalSteps: number
  onClickNext: () => void
  onClickPrev: () => void
}
const FooterButtons = ({
  currentStep,
  totalSteps,
  onClickNext,
  onClickPrev,
}: FooterButtonsProps) => {
  return (
    <div className="pt-sm mt-sm flex w-full items-center justify-end gap-4 border-t">
      {currentStep !== 1 && <Button onClick={onClickPrev}>Prev</Button>}
      {currentStep !== totalSteps ? (
        <Button onClick={onClickNext}>Next</Button>
      ) : (
        <Button>Done</Button>
      )}
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

  const handleNextClick = useCallback(() => {
    dispatch((current) => Number(current + 1))
  }, [dispatch])

  const handlePrevClick = useCallback(() => {
    dispatch((current) => Number(current - 1))
  }, [dispatch])

  const handleNavClick = useCallback(
    (step: number) => {
      dispatch(step)
    },
    [dispatch]
  )

  return (
    <div className="h-auto w-full">
      <Nav onClick={handleNavClick} {...props} />
      {steps[active]}
      <FooterButtons
        currentStep={Number(active + 1)}
        totalSteps={Children.count(children)}
        onClickNext={handleNextClick}
        onClickPrev={handlePrevClick}
      />
    </div>
  )
}
