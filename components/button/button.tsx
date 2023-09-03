import React, { FC } from 'react'
import cn from 'classnames'

import styles from './button.module.css'

type ButtonVarint = 'primary'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVarint
}

const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className,
  ...rest
}) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: variant === 'primary',
      })}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
