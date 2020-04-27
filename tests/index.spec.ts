import { mocked } from "ts-jest/utils"
jest.mock("~/hello")
import hello from "~/hello"

test("should call with 'world'", async () => {
  mocked(hello).mockReturnValue("Hello, world!")
  await import("~/index")
  expect(hello).toHaveBeenCalledWith("world")
})
