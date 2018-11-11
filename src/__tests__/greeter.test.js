import Greeter from "../greeter"

describe("Greeter", () => {
  const greeter = new Greeter()

  test("exists", () => {
    expect(typeof greeter).toBeDefined()
  })

  test("accepts a user argument", () => {
    const greeter = new Greeter("John Doe")

    expect(greeter.user).toBe("John Doe")
  })

  describe("#greet", () => {
    test("returns Hello plus the user", () => {
      expect(greeter.greet()).toBe("Hello Julio")
    })
  })
})
