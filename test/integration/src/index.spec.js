import child from "child_process"

describe("main", () => {
  let childExecutionResult

  before((done) => {
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
