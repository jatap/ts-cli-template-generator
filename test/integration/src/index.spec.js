import child from "child_process"

describe("main", () => {
  let childExecutionResult

  // Use a "regular" function to consume "this"
  before(function (done) {
    this.timeout(3000)

    const command = child.exec(
      "node_modules/.bin/babel-node src/index.js",
      {
        encoding: "utf-8"
      },
      (error, stdout, stderr) => {
        childExecutionResult = stdout
        done()
      }
    )
  })

  it("prints stdout", () => {
    const result = "Hello Julio"
    expect(childExecutionResult.trim()).to.be.equal(result)
  })
})
