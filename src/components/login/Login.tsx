import React, { FormEvent } from 'react'

// Redux
import { useDispatch } from 'react-redux'
import loginStore from '../../redux/login/loginStore'

// Components
import Input from '../html/Input'
import Label from '../html/Label'
import Button from '../html/Button'

// React-Router
import { Link } from 'react-router-dom'

// Styles
import styles from './login.module.scss'

// Hook
import useForm from '../hooks/useForm'

const login = () => {
  const email = useForm({ option: 'email' })
  const password = useForm({ option: 'password' })
  const dispatch = useDispatch()

  function handleSubmit(event : FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (email.validate().regex && password.validate().regex) {
      dispatch(loginStore.actions.setData({ email: email.value, password: password.value }))
    } else {
      window.alert('Todos os campos devem ser preenchidos corretamente')
      dispatch(loginStore.actions.setError())
    }
  }
 
  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmit}>
        <section>
          <Label htmlFor={'input-email'}> Email </Label>
          <Input 
            onChange={email.onChange} value={email.value} 
            warning={email.warning} id={'input-email'} type={'email'}/>
        </section>

        <section>
          <Label htmlFor={'input-password'}> Senha </Label>
          <Input 
            onChange={password.onChange} value={password.value} 
            warning={password.warning} id={'input-passowrd'} type={'password'}/>
        </section>

        <div>
          <Link to='/cadastry'>criar conta</Link>
          <Button>ENTRAR</Button>
        </div>
        
      </form>
    </section>
  )
}

export default login