import chai from "chai"
import sinon from "sinon"
import debug from "debug"

const expect = chai.expect

process.env.NODE_ENV = "test"

beforeEach(() => {
  if (sinon == null) {
    sinon = sinon.sandbox.create()
  } else {
    sinon.restore()
  }
})

global.expect = expect
global.sinon = sinon
global.logger = debug(process.env.NODE_ENV)
