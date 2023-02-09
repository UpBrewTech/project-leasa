import dynamic from 'next/dynamic'
import { PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

interface Props extends PropsWithChildren {
  id: string
  onOverlayClick?: (event: React.SyntheticEvent) => void
  className?: string
}

const Portal = ({ id, className, onOverlayClick, children }: Props) => {
  const handleOverlayClick = (event: React.SyntheticEvent) => {
    onOverlayClick && onOverlayClick(event)
  }

  return (
    <>
      {createPortal(
        <div
          id={id}
          className={className && className}
          onClick={handleOverlayClick}
        >
          {children}
        </div>,
        document.body
      )}
    </>
  )
}

export default dynamic(() => Promise.resolve(Portal), { ssr: false })
