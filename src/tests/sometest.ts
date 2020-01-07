import { expect } from "chai"

describe("these tests", () => {
  it("this test is green", () => {
    browser.url("/")
  })

  it("this test fails", () => {
    browser.url("/")
    expect(true).to.be.false
  })
})