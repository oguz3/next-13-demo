import React from 'react'
import Link from 'next/link'

import LogoSquare from '@/components/icons/logo-square'
import Newsletter from '@/components/newsletter/newsletter'

import styles from './footer.module.css'

const footerLinks = [
  {
    id: 0,
    title: 'Quick Link',
    links: [
      {
        id: 0,
        title: 'Home',
        path: '/',
      },
      {
        id: 1,
        title: 'About',
        path: '/',
      },
      {
        id: 2,
        title: 'Blog',
        path: '/',
      },
      {
        id: 3,
        title: 'Archived',
        path: '/',
      },
      {
        id: 4,
        title: 'Author',
        path: '/',
      },
      {
        id: 5,
        title: 'Contact',
        path: '/',
      },
    ],
  },
  {
    id: 1,
    title: 'Category',
    links: [
      {
        id: 0,
        title: 'Lifestyle',
        path: '/',
      },
      {
        id: 1,
        title: 'Technology',
        path: '/',
      },
      {
        id: 2,
        title: 'Travel',
        path: '/',
      },
      {
        id: 3,
        title: 'Business',
        path: '/',
      },
      {
        id: 4,
        title: 'Economy',
        path: '/',
      },
      {
        id: 5,
        title: 'Sports',
        path: '/',
      },
    ],
  },
]

const footerBottomLinks = [
  {
    id: 0,
    title: 'Terms of Use',
    path: '/',
  },
  {
    id: 1,
    title: 'Privacy Policy',
    path: '/',
  },
  {
    id: 2,
    title: 'Cookie Policy',
    path: '/',
  },
]

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.about}>
            <h5 className={styles.title}>About</h5>
            <p className={styles.detail}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <p className={styles.contact}>
              <b>Email :</b>info@jstemplate.net
            </p>
            <p className={styles.contact}>
              <b>Phone :</b>880 123 456 789
            </p>
          </div>
          <nav className={styles.nav}>
            {footerLinks.map((link) => (
              <ul key={link.id} className={styles.nav_list}>
                <li className={styles.list_title}>{link.title}</li>
                {link.links.map((item) => (
                  <li key={item.id} className={styles.list_item}>
                    <Link href={item.path}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
          <div className={styles.newsletter}>
            <Newsletter />
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.logo}>
            <LogoSquare />
            <div className={styles.logo_text}>
              <h5>
                Meta<b>Blog</b>
              </h5>
              <p>
                © JS Template <span>2023. All Rights Reserved.</span>
              </p>
            </div>
          </div>
          <nav className={styles.bottom_nav}>
            {footerBottomLinks.map((link) => (
              <Link key={link.id} href={link.path}>
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
