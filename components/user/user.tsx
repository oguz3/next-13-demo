import type { AvatarProps } from '../avatar/avatar'
import React, { FC } from 'react'
import cn from 'classnames'

import Avatar from '@/components/avatar'

import styles from './user.module.css'

type UserProps = AvatarProps & {
  variant?: 'primary' | 'secondary'
  className?: string
  name: string
}
const User: FC<UserProps> = ({
  variant = 'primary',
  className,
  name,
  src,
  size,
}) => {
  return (
    <div
      className={cn(styles.wrapper, className, {
        [styles.primary]: variant === 'primary',
        [styles.secondary]: variant === 'secondary',
      })}
    >
      <Avatar src={src} size={size} />
      <div className={styles.name}>{name}</div>
    </div>
  )
}

export default User
