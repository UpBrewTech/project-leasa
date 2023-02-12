import classNames from 'classnames'
import dynamic from 'next/dynamic'
import { PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

interface Props extends PropsWithChildren {
  id: string
  isOpen: boolean
  onClose: VoidFunction
  className?: string
}

const Modal = ({ id, isOpen, onClose, className, children }: Props) => {
  const handleOverlayClick = (event: React.SyntheticEvent) => {
    if (event.currentTarget === event.target) onClose()
  }

  if (!isOpen) return null

  return createPortal(
    <div
      id={`${id}-modal`}
      className="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center overflow-hidden bg-gray-900/75"
      onClick={handleOverlayClick}
    >
      <div className={classNames('relative bg-white shadow', className)}>
        {children}
      </div>
    </div>,
    document.body
  )
}

export default dynamic(() => Promise.resolve(Modal), { ssr: false })
