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

  test('should return 0 for length and width of 0', () => {
    expect(calculateCanvasSize('0', '1')).toBe(0);
    expect(calculateCanvasSize('1', '0')).toBe(0);
    expect(calculateCanvasSize('0', '0')).toBe(0);
  });


});