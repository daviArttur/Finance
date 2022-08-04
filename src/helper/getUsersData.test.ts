import getUsersData from "./getUsersData"

// TypeScipt
import { userInterface } from "../interfaces/user"

const objectDataUser: userInterface = { name: "Adam", surname: "Jordan", email: "adam@xample", password: "adamJordan" }

describe("q", () => {
  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => JSON.stringify([ objectDataUser ])),
        setItem: jest.fn(() => null)
      },
      writable: true
    })
  })


  it("it tests whether the function to verify the user is working correctly if users return null", () => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null)
      },
      writable: true
    })
    const getUsers = new getUsersData("adam@xample", "adamJordan").verifyIfExistsUsersInLocalStorage()
    expect(window.localStorage.getItem).toHaveBeenCalledWith("users")
    expect(getUsers).toBeFalsy()
  })

  it("expect that function return next step case users is true", () => {
    const getUsers = new getUsersData("adam@xample", "adamJordan").verifyIfExistsUsersInLocalStorage()

    expect(window.localStorage.getItem).toHaveBeenCalledWith("users")
    expect(getUsers).toBeTruthy()
  })

  it("get users and save array of users in the constructor ", () => {
    const getUsers = new getUsersData("adam@xample", "adamJordan")
    const functionTest = getUsers.getUsersInLocalStorage()

    expect(window.localStorage.getItem).toHaveBeenCalledWith("users")
    expect(functionTest).toBeTruthy()
  })

  it("should return the user if there is", () => {
    const getUsers = new getUsersData("adam@xample", "adamJordan").returnUser([ objectDataUser ])
    expect(getUsers).toStrictEqual( objectDataUser )
  })

  it("call initial function", () => {
    const getUsers = new getUsersData("adam@xample", "adamJordan").init()
    expect(getUsers).toStrictEqual(objectDataUser)
  })
  
})