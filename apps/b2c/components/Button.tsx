import classNames from "classnames"
import {
  ButtonHTMLAttributes,
  ClassAttributes,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
} from "react"
import { IconLoader } from "ui/Icons"

export interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    ClassAttributes<HTMLButtonElement>,
    ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
}

const Button = forwardRef(
  (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
      type = "button",
      className,
      loading,
      children,
      ...otherProps
    } = props

    return (
      <button
        ref={ref}
        type={type}
        className={classNames(
          "relative bg-slate-700 px-4 py-2 font-light text-white",
          "hover:bg-slate-800",
          "disabled:pointer-events-none disabled:opacity-50",
          { "pointer-events-none text-transparent opacity-50": loading },
          className
        )}
        {...otherProps}
      >
        {loading && (
          <span className="absolute left-0 w-full">
            <IconLoader className="mx-auto h-5 w-5 animate-spin fill-slate-700 text-gray-100" />
          </span>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"
export default Button
