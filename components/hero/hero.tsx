import React, { FC } from 'react'

import styles from './hero.module.css'
import Badge from '../badge/badge'
import User from '../user/user'
import dayjs from 'dayjs'

type HeroProps = {
  image: string
  title: string
  category: string
  user: {
    name: string
    avatar?: string
  }
  date: string
}

const Hero: FC<HeroProps> = ({ image, title, category, user, date }) => {
  return (
    <section>
      <div className="container">
        <div
          className={styles.wrapper}
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(20, 22, 36, 0.40) 0%, rgba(20, 22, 36, 0.40) 100%), url(${image})`,
          }}
        >
          <div className={styles.content}>
            <Badge>{category}</Badge>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.user_wrapper}>
              <User name={user.name} src={user?.avatar} />
              <span className={styles.date}>
                {' '}
                {dayjs(date).format('MMMM DD, YYYY')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
