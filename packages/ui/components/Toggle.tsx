import classnames from 'classnames'

export interface ToggleProps {
  alternative?: boolean
  defaultChecked?: boolean
  disabled?: boolean
}

export const Toggle = ({
  alternative,
  defaultChecked,
  disabled,
}: ToggleProps) => {
  return (
    <label
      className={classnames(
        'relative inline-flex',
        disabled ? 'cursor-not-allowed' : 'cursor-pointer'
      )}
    >
      <input
        type="checkbox"
        value=""
        defaultChecked={defaultChecked}
        disabled={disabled}
        className="peer sr-only"
      />
      <div
        className={classnames(
          'h-6 w-11 rounded-full',
          "border after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:transition-all after:content-[''] peer-checked:after:translate-x-full",
          alternative
            ? 'border-purple-600 bg-white after:border-white after:bg-purple-600'
            : 'border-gray-200 bg-gray-200 after:border-gray-300 after:bg-white peer-checked:bg-purple-600 peer-checked:after:border-white'
        )}
      ></div>
    </label>
  )
}
