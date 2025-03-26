import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paint required calculator", () => {
  test("should return expected result", () => {
    const result = paintRequiredCalculator(50, 10);

    expect(result).toEqual(5);
  });

  test('should return 0 for area of 0', () => {
    expect(paintRequiredCalculator(0, 10)).toBe(0);
  });
});
