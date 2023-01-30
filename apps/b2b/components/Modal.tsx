import classNames from 'classnames'
import Portal from 'components/Portal'
import dynamic from 'next/dynamic'
import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  isOpen: boolean
  onClose: VoidFunction
  containerClass?: string
}

const Modal = ({ isOpen, onClose, containerClass, children }: Props) => {
  const handleOverlayClick = (event: React.SyntheticEvent) => {
    if (event.currentTarget === event.target) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <Portal elementId="modal-portal">
      <div
        className="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center overflow-hidden bg-gray-900/75"
        onClick={handleOverlayClick}
      >
        <div className={classNames('relative bg-white shadow', containerClass)}>
          {children}
        </div>
      </div>
    </Portal>
  )
}

export default dynamic(() => Promise.resolve(Modal), { ssr: false })
