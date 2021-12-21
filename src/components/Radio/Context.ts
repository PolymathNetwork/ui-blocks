import { createContext, ChangeEvent } from 'react';

export const Context = createContext<{
  name?: string;
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
} | null>(null);
