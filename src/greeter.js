class Greeter {
  user: string

  constructor(user: string = "Julio") {
    this.user = user
  }

  greet(): string {
    return `Hello ${this.user}`
  }
}

export default Greeter
