import React from 'react';

export const Context = React.createContext<{
  name?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} | null>(null);
