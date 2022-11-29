import { useEffect, useState } from 'react';

import { TransactionStatus } from '@/constant/types';
import { useToast } from '@/contexts/ToastContext';

const toastDuration = 5500;

const Toast = () => {
  const toastContext = useToast();

  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    setToastVisible(toastContext?.toastContent?.message ? true : false);
    // Timer used for animation purposes
    const showToastTimer = setTimeout(() => {
      setToastVisible(false);
    }, toastDuration - 50);

    // Timer used to reset the toast data
    const hideToastTimer = setTimeout(() => {
      toastContext?.hideToast();
    }, toastDuration);

    return () => {
      clearTimeout(hideToastTimer);
      clearTimeout(showToastTimer);
    };
  }, [toastContext]);

  return toastContext && toastContext.toastContent ? (
    <div
      className={`fixed z-50 ${
        toastVisible
          ? 'opacity-1 translate-x-0'
          : 'translate-x-[500px] opacity-0'
      } top-28 right-20 transition-all ease-linear`}
    >
      <div
        className='w-96 rounded-md bg-white/10 text-sm shadow-md backdrop-blur-sm'
        id='static-example'
        role='alert'
        aria-live='assertive'
        aria-atomic='true'
        data-mdb-autohide='false'
      >
        <div
          className={`flex items-center justify-between rounded-t-md border-b border-white/20 ${
            toastContext.toastContent?.status === TransactionStatus.Success
              ? 'bg-blue-500/60'
              : 'bg-red-500/60'
          } bg-clip-padding py-2 px-3`}
        >
          <p className='flex items-center font-bold text-white'>
            {toastContext.toastContent?.status === TransactionStatus.Success ? (
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='check-circle'
                className='mr-2 h-4 w-4 fill-current'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path
                  fill='white'
                  d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'
                ></path>
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='white'
                className='mr-2 h-5 w-5'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z'
                />
              </svg>
            )}
            {toastContext.toastContent?.status === TransactionStatus.Success
              ? 'Transaction Executed'
              : 'Transaction Failed'}
          </p>
          <div className='flex'>
            <a
              className={`flex items-center gap-1 align-middle text-xs ${
                toastContext.toastContent?.status === TransactionStatus.Success
                  ? 'text-blue-500/50'
                  : 'text-red-500/50'
              } `}
              target='_blank'
              rel='noreferrer'
              href={`https://testnet.snowtrace.io/tx/${toastContext.toastContent.hash}`}
            >
              <span className='text-xs text-white'>View on Explorer</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='white'
                className='h-5 w-5'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
                />
              </svg>
            </a>
          </div>
        </div>
        <div
          className={`absolute top-[36px] h-[2px] overflow-clip ${
            toastVisible ? 'w-full' : 'w-0'
          }  ${
            toastContext.toastContent.status === TransactionStatus.Success
              ? 'bg-blue-500'
              : 'bg-red-500'
          } transition-all duration-[5000ms] ease-linear`}
        ></div>
        <div className='break-words rounded-b-lg  p-3 text-white'>
          {toastContext.toastContent?.message}
        </div>
      </div>
    </div>
  ) : null;
};

export default Toast;
