import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paint required calculator", () => {
  test("should return expected result", () => {
    const result = paintRequiredCalculator(50, 10);

    expect(result).toEqual(5);
  });

  test('should return 0 for area of 0', () => {
    expect(paintRequiredCalculator(0, 10)).toBe(0);
  });

  test('should return Infinity for coveragePerLiter of 0', () => {
    expect(paintRequiredCalculator(100, 0)).toBe(Infinity);
  });

  test('should return NaN for both area and coveragePerLiter of 0', () => {
    expect(paintRequiredCalculator(0, 0)).toBeNaN();
  });

  test('should handle negative values correctly', () => {
    expect(paintRequiredCalculator(-100, 10)).toBe(-10);
    expect(paintRequiredCalculator(100, -10)).toBe(-10);
    expect(paintRequiredCalculator(-100, -10)).toBe(10);
  });
});
