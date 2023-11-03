import React from 'react'

import styles from './button.module.scss'

export type ButtonType = {
  children?: React.ReactNode,
  type?: 'button' | 'submit' | 'reset',
  handle?: () => void,
  disabled?: boolean,
  fullWidth?: boolean,
  variant?: 'filled' | 'outlined' | 'google' | 'iconOutlined' | 'iconFilled' | 'onlyIcon',
  icon?: React.ReactNode,
  iconPosition?: 'left' | 'middle' | 'right',
  isActive?: boolean
}

const buttonStyles: { [key: string]: string } = {
  filled: styles.filled,
  outlined: styles.outlined,
  google: styles.google,
  iconOutlined: styles.iconOutlined,
  iconFilled: styles.iconFilled,
  onlyIcon: styles.onlyIcon
}

const Button = ({
  children,
  type = 'button',
  disabled = false,
  fullWidth = false,
  isActive = false,
  variant,
  handle,
}: ButtonType) => {
  return (
    <button
      onClick={handle}
      disabled={disabled}
      type={type}
      className={`${styles.button} ${fullWidth && styles.fullWidth} ${variant && buttonStyles[variant]} ${disabled && styles.disabled} ${isActive && styles.active} ${isActive && styles.active}`}
    >
      {children}
    </button>
  )
}


export default Button
