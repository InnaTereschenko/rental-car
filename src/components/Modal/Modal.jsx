import { useEffect } from "react";
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('#modal - root');

const Modal = ({ car, onClose }) => {
    const {
    id,
    year,
    rentalPrice,
    rentalConditions,
    model,
    mileage,
    make,
    type,
    img,
    functionalities,
    fuelConsumption,
    engineSize,
    description,
    address,
    accessories,
  } = car;

    
useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleClickBackdrop = evt => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
    };
    
 const city = address.split(',')[1];
  const country = address.split(',')[2];
  const condition = rentalConditions.split('\n');
  const age = condition[0].split(' ').slice(-1).join('');

  const mile = (mileage / 1000).toString().replace('.', ',');

    return createPortal(
        <Modal>
            
</Modal>, modalRoot
);
}

export default Modal;