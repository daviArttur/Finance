import React, { ChangeEvent } from 'react'

// Styles
import styles from './input.module.scss'

type Props = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  value: string
  warning: string | false
  id: string
  type: string
}

const Input = ({ onChange, value, warning, id, type }: Props) => {
  return (
    <>
      <input
        type={type}
        name={id}
        id={id}
        value={value}
        onChange={onChange}
        data-testid={id}
        className={styles.input}
      />
      {warning && (
        <span className='warning'>{ warning }</span>
      )}
    </>
  )
}

export default Input