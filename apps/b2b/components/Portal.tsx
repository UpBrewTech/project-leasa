import dynamic from 'next/dynamic'
import { PropsWithChildren, useLayoutEffect } from 'react'
import { createPortal } from 'react-dom'

interface Props extends PropsWithChildren {
  elementId: string
  className?: string
}

const Portal = ({ children, elementId, className }: Props) => {
  const element = document.createElement('div')
  element.setAttribute('id', elementId)
  element.setAttribute('class', className ? className : '')

  useLayoutEffect(() => {
    if (!document.getElementById(elementId)) {
      document.body.appendChild(element)
    }

    return () => {
      if (document.getElementById(elementId)) {
        element.remove()
      }
    }
  }, [elementId, element])

  return createPortal(children, element)
}

export default dynamic(() => Promise.resolve(Portal), { ssr: false })
