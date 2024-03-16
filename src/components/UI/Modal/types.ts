import { ReactNode } from 'react';

export interface ModalProps {
  isActive: boolean;
  children: ReactNode;
  onClose: () => void;
}
