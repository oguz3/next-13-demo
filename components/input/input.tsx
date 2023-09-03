import React, { forwardRef } from 'react'
import cn from 'classnames'

import styles from './input.module.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  rightIcon?: React.ReactNode
  wrapperClassName?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ wrapperClassName, className, rightIcon, ...rest }, ref) => {
    return (
      <div className={cn(styles.wrapper, wrapperClassName)}>
        <input
          autoComplete="off"
          className={cn(styles.input, className, {
            [styles.right_icon]: rightIcon,
          })}
          ref={ref}
          {...rest}
        />

        {rightIcon ? <div className={styles.rightIcon}>{rightIcon}</div> : null}
      </div>
    )
  },
)

Input.displayName = 'Input'

export default Input
