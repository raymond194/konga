import React, { Children } from 'react'
import '../styles/children/modal.css'

type ModalProps = {
  isOpen: boolean,
  onClose: () => void,
  title?: string
  children: React.ReactNode
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null
  return (
    <div className='modal-overlay' onClick={onClose}>
      <div className='modal-panel' onClick={(e) => e.stopPropagation()}>
        <div className={`${title ? 'modal-headerExtra' : 'modal-header'}`}>
          {title && <h3>{title}</h3>}
          <button className='modal-close' onClick={onClose}>
            x &nbsp;<span className='close'>Close </span>
          </button>
        </div>

        {/* MODAL BODY*/}
        {children}
      </div>
    </div>
  )
}

export default Modal
