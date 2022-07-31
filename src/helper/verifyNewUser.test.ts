import { verifyIfNewUserDataIsValid } from "./verifyNewUser"


describe("Let's test verifyIfNewUserDataIsValid expecting valid returns", () => {

  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => JSON.stringify([ { name: "Adam", surname: "Jordan", email: "adam@xample", password: "adamJordan" } ])),
        setItem: jest.fn(() => null)
      },
      writable: true
    })
  })

  it("create new user, but exist user with Email already exists ", () => {
    const validation = new verifyIfNewUserDataIsValid({ name: "Robert", email: "adam@xample" }).init()

    expect(window.localStorage.getItem).toHaveBeenCalledWith("users")
    expect(validation.message).toBe("Já existe uma conta com esse email")
    expect(validation.valid).toBeFalsy()
  })

  it("create new user, but exist user with Name already exists ", () => {
    const validation = new verifyIfNewUserDataIsValid({ name: "Adam", email: "email@example" }).init()

    expect(window.localStorage.getItem).toHaveBeenCalledWith("users")
    expect(validation.message).toBe("Já existe uma conta com esse nome")
    expect(validation.valid).toBeFalsy()
  })

  it("create new user, but exist user with Name and Email equal", () => {
    const validation = new verifyIfNewUserDataIsValid({ name: "Adam", email: "adam@xample" }).init()

    expect(window.localStorage.getItem).toHaveBeenCalledWith("users")
    expect(validation.message).toBe("Já existe um usuário com o mesmo nome e email")
    expect(validation.valid).toBeFalsy()
  })

  it("create new user by empty user list", () => {
    const validation = new verifyIfNewUserDataIsValid({ name: "Davi", email: "davi123" }).init()

    expect(window.localStorage.getItem).toHaveBeenCalledWith("users")
    expect(validation.valid).toBeTruthy()
  })
  
})