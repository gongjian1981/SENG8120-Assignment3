import calculateCanvasPerimeter from "./calculateCanvasPerimeter";

describe("calculateCanvasPerimeter", () => {
  test("returns correct result", () => {
    const result = calculateCanvasSize("10", "100");

    expect(result).toEqual(1000);
  })
});
