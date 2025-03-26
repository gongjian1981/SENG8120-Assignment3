import calculateCanvasPerimeter from "./calculateCanvasPerimeter";

describe("calculateCanvasPerimeter", () => {
  test("returns correct result", () => {
    // Assign
    const length = "10";
    const width = "100";
    
    // Action
    const result = calculateCanvasPerimeter("10", "100");

    // Assert
    expect(result).toEqual(220);
  })
});
