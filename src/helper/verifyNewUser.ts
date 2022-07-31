interface dataUserInterface {
  name: string,
  email: string
}
export class verifyIfNewUserDataIsValid {

  name: string
  email: string
  arrayUsers: dataUserInterface[]
  
  constructor (newUser: { name: string, email: string }) {
    this.name = newUser.name
    this.email = newUser.email
    this.arrayUsers = []
  }

  emailIsEqual() {
    const response = this.arrayUsers.find((user) => user.email === this.email)
    if (response) {
      return { valid: false, message: 'Já existe uma conta com esse email' }
    } else {
      return { valid: true }
    }
  }

  nameIsEqual() {
    const response = this.arrayUsers.find((user) => user.name === this.name)
    if (response) {
      return { valid: false, message: 'Já existe uma conta com esse nome' }
    } else {
      return this.emailIsEqual()
    }
  }

  nameAndEmailIsEqual() {
    const response = this.arrayUsers.find((user) => user.name === this.name && user.email === this.email)
    if (response) {
      return { valid: false, message: 'Já existe um usuário com o mesmo nome e email' }
    } else {
      return this.nameIsEqual()
    }
  }

  checkIfExistUsers() {
    const verifyUsersInLocalStorage = window.localStorage.getItem('users')
    if ( verifyUsersInLocalStorage ) {
      const users: dataUserInterface[] = JSON.parse(verifyUsersInLocalStorage)
      this.arrayUsers = users
      return this.nameAndEmailIsEqual()
    } else {
      return { valid: true }
    }
  }

  init() {
    this.nameAndEmailIsEqual = this.nameAndEmailIsEqual.bind(this)
    this.checkIfExistUsers = this.checkIfExistUsers.bind(this)
    this.nameIsEqual = this.nameIsEqual.bind(this)
    return this.checkIfExistUsers()
  }
  
  //checkIfNewUserIsDifferentFromOther()
}
