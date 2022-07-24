import React from 'react'

// Styles
import styles from './button.module.scss'

type Props = {
  children: string
}

const Button = ({ children }: Props) => {
  return (
    <button className={styles.button}>{ children }</button>
  )
}

export default Button