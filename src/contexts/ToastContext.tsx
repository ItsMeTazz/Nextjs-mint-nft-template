import React, { createContext, ReactNode, useContext, useState } from 'react';

import { ToastItem, TransactionStatus } from '@/constant/types';

interface IToastContext {
  toastContent: ToastItem | null;
  showToast: (status: TransactionStatus, message: string, hash: string) => void;
  hideToast: () => void;
}

interface IProviderProps {
  children?: ReactNode;
}

const ToastContext = createContext<IToastContext | null>(null);

export const ToastProvider = ({ children }: IProviderProps) => {
  const [toastContent, setToastContent] = useState<ToastItem | null>(null);

  const showToast = (
    status: TransactionStatus,
    message: string,
    hash: string
  ) => {
    setToastContent({
      status,
      message,
      hash,
    });
  };
  const hideToast = () => {
    setToastContent(null);
  };

  return (
    <ToastContext.Provider
      value={{
        toastContent,
        showToast,
        hideToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
