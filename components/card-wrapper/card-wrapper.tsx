import React, { FC } from 'react'
import cn from 'classnames'

import styles from './card-wrapper.module.css'

type CardWrapperProps = {
  children: React.ReactNode
  className?: string
}
const CardWrapper: FC<CardWrapperProps> = ({ children, className }) => {
  return (
    <section className={cn('container', className)}>
      <div className={styles.grid}>{children}</div>
    </section>
  )
}

export default CardWrapper
