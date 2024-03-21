import { ReactNode } from 'react';

export interface ElasticSearchProps {
  className?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  children?: ReactNode;
  isLoading?: boolean;
  isEmpty?: boolean;
  emptyMessage?: string;
}
