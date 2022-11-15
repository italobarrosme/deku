import { ReactNode, useState } from 'react'
import styleModule from './Modal.module.scss'

export type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export const Modal = ({
  children,
  isOpen,
  onClose,
}: ModalProps) => {

  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const handleClose = () => {
    setIsModalOpen(false);
    onClose();
  };

  return (
    <>
    {isModalOpen && (
      <div className={styleModule['modal']}>
        <div>
          <button onClick={handleClose}>
            X
          </button>
        </div>
        
        <div>
          {children}
        </div>
      </div>
    )}
    </>
  );
};