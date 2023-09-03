'use client'

import React from 'react'
import { useForm } from 'react-hook-form'

import SearchOutline from '@/components/icons/search-outline'

import styles from './search-input.module.css'
import { useRouter } from 'next/navigation'

type FormData = {
  search: string
}
const SearchInput = () => {
  const router = useRouter()

  const { register, handleSubmit } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    router.push(`/search?q=${data.search}`)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search"
        autoComplete="off"
        {...register('search')}
      />
      <button className={styles.submit} type="submit">
        <SearchOutline />
      </button>
    </form>
  )
}

export default SearchInput
