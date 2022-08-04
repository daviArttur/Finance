// TypeScript
import { userInterface } from "../interfaces/user"

export default class getUsersData {
  email: string
  password: string

  constructor(email: string, password: string) {
    this.email = email
    this.password = password
  }

  returnUser(usersArray: userInterface[]): userInterface {
    return usersArray.find((user) => {
      return user.email === this.email && user.password === this.password
    })!
  }

  getUsersInLocalStorage() {
    const users = window.localStorage.getItem("users")!
    const usersArray = JSON.parse(users)
    return this.returnUser(usersArray)
  }

  verifyIfExistsUsersInLocalStorage() {
    if (window.localStorage.getItem("users")) {
      return this.getUsersInLocalStorage()
    } else {
      return false
    }
  }

  init() {
    return this.verifyIfExistsUsersInLocalStorage()
  }
}