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

  test('should handle negative values correctly', () => {
    expect(calculateCanvasSize('-3', '4')).toBeCloseTo(12);
    expect(calculateCanvasSize('3', '-4')).toBeCloseTo(12);
    expect(calculateCanvasSize('-3', '-4')).toBeCloseTo(12);
  });

  test('should handle non-numeric strings by returning NaN', () => {
    expect(calculateCanvasSize('a', '4')).toBeNaN();
    expect(calculateCanvasSize('3', 'b')).toBeNaN();
    expect(calculateCanvasSize('a', 'b')).toBeNaN();
  });
});