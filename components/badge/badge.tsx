import React, { FC } from 'react'
import cn from 'classnames'

import styles from './badge.module.css'

type BadgeProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}
const Badge: FC<BadgeProps> = ({ children, variant = 'primary' }) => {
  return (
    <div
      className={cn(styles.badge, {
        [styles.primary]: variant === 'primary',
        [styles.secondary]: variant === 'secondary',
      })}
    >
      {children}
    </div>
  )
}

export default Badge
