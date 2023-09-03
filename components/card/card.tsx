import React, { FC } from 'react'
import Image from 'next/image'

import Badge from '@/components/badge'
import User from '@/components/user'

import styles from './card.module.css'
import dayjs from 'dayjs'

type CardProps = {
  image: string
  title: string
  category: string
  user: {
    name: string
    avatar?: string
  }
  date: string
}

const Card: FC<CardProps> = ({ image, title, category, user, date }) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.image}
        src={image}
        width={360}
        height={240}
        alt="Image"
      />
      <div className={styles.content}>
        <Badge variant="secondary">{category}</Badge>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.avatar_time}>
          <User name={user.name} src={user?.avatar} variant="secondary" />
          <span className={styles.time}>
            {dayjs(date).format('MMMM DD, YYYY')}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card
