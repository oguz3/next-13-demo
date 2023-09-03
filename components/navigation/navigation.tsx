import React from 'react'
import Link from 'next/link'

import SearchInput from '@/components/search-input/search-input'
import Logo from '@/components/icons/logo'

import styles from './navigation.module.css'

const navigationLinks = [
  {
    label: 'Technology',
    href: '/technology',
  },
  {
    label: 'Sports',
    href: '/sports',
  },
  {
    label: 'Science',
    href: '/science',
  },
  {
    label: 'Health',
    href: '/health',
  },
  {
    label: 'Business',
    href: '/business',
  },
]

const Navigation = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.navigation}>
          <Link href="/">
            <Logo />
          </Link>

          <div className={styles.right}>
            <nav className={styles.nav}>
              {navigationLinks.map((link) => (
                <Link
                  className={styles.nav_link}
                  key={link.href}
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <SearchInput />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navigation
