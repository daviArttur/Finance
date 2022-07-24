import React from 'react'

// Styles
import styles from './label.module.scss'

type Props = {
  htmlFor: string
  children: string
}

const Label = ({ htmlFor, children }: Props ) => {
  return (
    <label htmlFor={htmlFor} className={styles.label}>
      {children}
    </label>
  )
}

export default Label