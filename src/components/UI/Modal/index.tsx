import { MouseEvent } from 'react';
import { createPortal } from 'react-dom';

import { ICONS } from '@/constants';

import { BackdropStyled, ModalCloseButtom, ModalContent } from './styled';
import { ModalProps } from './types';

const { CrossIcon } = ICONS;

export const Modal = ({ className, isActive, children, onClose }: ModalProps) => {
  const handleContentClick = (event: MouseEvent) => event.stopPropagation();

  if (!isActive) {
    return null;
  }

  return createPortal(
    <BackdropStyled $show onClick={onClose}>
      <ModalContent className={className} onClick={handleContentClick}>
        <ModalCloseButtom onClick={onClose}>
          <CrossIcon />
        </ModalCloseButtom>

        {children}
      </ModalContent>
    </BackdropStyled>,
    document.getElementById('modal')!,
  );
};
