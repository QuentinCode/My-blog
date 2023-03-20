import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
        <ul className={styles.listeNav}>
            <Link href='/'>Home</Link>
            <Link href='/blog'>Blog</Link>
            <Link href='/utilisateurs'>Liste</Link>
            <Link href='/add'>Add</Link>
        </ul>
    </nav>

  )
}
