import child from "child_process"

describe("main", () => {
  let execution

  before(() => {
    execution = child.spawn(
      "node_modules/.bin/babel-node", ["src/index.js"],
      {
        stdio: "pipe",
        encoding: "utf-8"
      }
    )
  })

  it("prints stdout", () => {
    const result = "Hello Julio"
    execution.stdout.on("data", (data) => {
      expect(execution.trim()).to.be.equal(result)
    })
  })
})
