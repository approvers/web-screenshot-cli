import hello from "~/hello"

describe("hello()", () => {
  it("should be 'Hello, world!'", () => {
    const name = "world"
    expect(hello(name)).toBe("Hello, world!")
  })
  it("should be 'Hello, SHUN!'", () => {
    const name = "SHUN"
    expect(hello(name)).toBe("Hello, SHUN!")
  })
})
