'use client'

import React from 'react'
import { useForm } from 'react-hook-form'

import Input from '@/components/input/input'
import Button from '@/components/button/button'
import Mail from '@/components/icons/mail'

import styles from './newsletter.module.css'

type FormData = {
  email: string
}

const Newsletter = () => {
  const { register, handleSubmit } = useForm<FormData>()
  const onSubmit = (data: FormData) => console.log(data)

  return (
    <div className={styles.newsletter}>
      <h5>Weekly Newsletter</h5>
      <p>Get blog articles and offers via email</p>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          wrapperClassName={styles.input}
          rightIcon={<Mail />}
          placeholder="Your Email"
          {...register('email')}
        />
        <Button type="submit">Subscribe</Button>
      </form>
    </div>
  )
}

export default Newsletter
