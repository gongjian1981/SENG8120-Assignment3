import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  test("returns correct result", () => {
    // Assign
    const length = "10";
    const width = "100";
    
    // Action
    const result = calculateCanvasSize("10", "100");

    // Assert
    expect(result).toEqual(1000);
  })
});