import React, { ChangeEvent, ChangeEventHandler } from 'react'

interface Props {
  option: 'email' | 'password' | 'default'
}

const optionsToRegex = {
  email: {
    regex: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    warningMessage: 'Preencha um email válido'
  },
  password: {
    regex: /^[a-zA-Z0-9-]{4,}\b$/,
    warningMessage: 'Sua senha deve ter no mínimo 4 caracteres'
  },
  default: {
    regex: /[a-zA-Z0-9-]/,
    warningMessage: 'Preencha um valor'
  },
  
}

function useForm({ option }: Props) {

  const [ value, setValue ] = React.useState('')
  const [ warning, setWarning ] = React.useState('')
  const [ warningWasActived, setWarningWasActived ] = React.useState(false)

  function validate() {
  
    const regex = RegExp(optionsToRegex[option].regex).test(value)
    if (!regex) {
      const warningMessage = optionsToRegex[option].warningMessage
      return {
        regex,
        warningMessage
      }
    }
  
    return regex
  }

  function onChange({ target }: ChangeEvent<HTMLInputElement>) {

    setValue(target.value)
    const receiveWarningToRegex = validate()
    const verifyIfRegexContainWarning = typeof receiveWarningToRegex === 'object'
  
    if ( target.value === '') {
      setWarningWasActived(true)
      return setWarning('Preencha um valor')
    }
    
    if (verifyIfRegexContainWarning && warning !== '' || verifyIfRegexContainWarning && warningWasActived) {
      
      return setWarning(receiveWarningToRegex.warningMessage)
    }

    else {
      setWarning('')
    }
  }

  return {
    warning,
    value,
    onChange,
    validate
  }
}



export default useForm