import { toast as Toast, Slide } from 'react-toastify'

import type { ToastTransition } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export type ToastType = {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right',
  autoClose?: number | false,
  hideProgressBar?: boolean,
  closeOnClick?: boolean,
  pauseOnHover?: boolean,
  draggable?: boolean,
  progress?: undefined | number | string,
  closeButton?: React.ReactNode | boolean,
  theme?: 'dark' | 'light' | 'colored',
  icon?: React.ReactNode | boolean,
  pauseOnFocusLoss?: boolean,
  delay?: number,
  type?: 'default' | 'success' | 'info' | 'warning' | 'error',
  transition?: ToastTransition
}

const defaultToastOptions: ToastType = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
  closeButton: true,
  theme: 'colored',
  icon: true,
  pauseOnFocusLoss: true,
  delay: 0,
  type: 'default',
  transition: Slide,
}

export const toast = {
  success: (message: string, options?: ToastType) => Toast(
    message,
    { ...defaultToastOptions, ...options, type: 'success' }
  ),
  error: (message: string, options?: ToastType) => Toast(
    message,
    { ...defaultToastOptions, ...options, type: 'error' }
  ),
  info: (message: string, options?: ToastType) => Toast(
    message,
    { ...defaultToastOptions, ...options, type: 'info' }
  ),
  warning: (message: string, options?: ToastType) => Toast(
    message,
    { ...defaultToastOptions, ...options, type: 'warning' }
  ),
  default: (message: string, options?: ToastType) => Toast(
    message,
    { ...defaultToastOptions, ...options, type: 'default' }
  )
}

export default toast
