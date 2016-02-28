import React from 'react'

import styles from './styles.css'
import HomeIcon from '../HomeIcon'

export default function Header() {
  return (
    <div className={styles.Header}>
      <div className={styles.Title}>
        <HomeIcon />
      </div>
      <div className={styles.Actions}>
      </div>
    </div>
  )
}
