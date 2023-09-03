'use client'

import React, { FC } from 'react'
import Image from 'next/image'

import styles from './avatar.module.css'

import avatar from '@/public/assets/image/avatar-null.png'

export type AvatarProps = {
  src?: string
  size?: number
}
const Avatar: FC<AvatarProps> = ({ src, size = 36 }) => {
  return (
    <Image
      src={src || avatar.src}
      className={styles.avatar}
      width={size}
      height={size}
      alt="Avatar"
    />
  )
}

export default Avatar
