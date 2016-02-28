import React from 'react'

import styles from './styles.css'

export default function Header() {
  return (
    <div className={styles.Header}>
      <div className={styles.Title}>
        <span>My website</span>
      </div>
      <div className={styles.Actions}>
      </div>
    </div>
  )
}
