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


  test('should return 0 for length and width of 0', () => {
    expect(calculateCanvasPerimeter('0', '1')).toBe(0);
    expect(calculateCanvasPerimeter('1', '0')).toBe(0);
    expect(calculateCanvasPerimeter('0', '0')).toBe(0);
  });


  test('should handle negative values correctly', () => {
    expect(calculateCanvasPerimeter('-3', '4')).toBeCloseTo(14);
    expect(calculateCanvasPerimeter('3', '-4')).toBeCloseTo(14);
    expect(calculateCanvasPerimeter('-3', '-4')).toBeCloseTo(14);
  });
});
