import React from 'react'

import styles from './Header.css'

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <span>My website</span>
      </div>
      <div className={styles.actions}>
      </div>
    </div>
  )
}
