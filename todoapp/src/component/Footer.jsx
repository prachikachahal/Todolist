import React from 'react'
import styles from "./inline.module.css"
export default function Footer({complete,todocount}) {
  return (
    <div className={styles.footer}>
<span className={styles.item}>Completed Todos:{complete}</span>
<span className={styles.item}>Total todo:{todocount}</span>
    </div>
  )
}