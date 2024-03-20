import { ReactNode } from 'react';

export interface ModalProps {
  isActive: boolean;
  children: ReactNode;
  className?: string;
  onClose: () => void;
}
