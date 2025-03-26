import paintRequiredForMultipleCoats from './paintRequiredForMultipleCoats';

describe('paintRequiredForMultipleCoats', () => {
  test('should calculate paint required correctly for positive values', () => {
    expect(paintRequiredForMultipleCoats(100, 10, 2)).toBe(20);
    expect(paintRequiredForMultipleCoats(200, 20, 3)).toBe(30);
    expect(paintRequiredForMultipleCoats(150, 15, 4)).toBe(40);
  });

  test('should return 0 for area of 0', () => {
    expect(paintRequiredForMultipleCoats(0, 10, 2)).toBe(0);
  });

  test('should return Infinity for coveragePerLiter of 0', () => {
    expect(paintRequiredForMultipleCoats(100, 0, 2)).toBe(Infinity);
  });

  test('should handle negative values correctly', () => {
    expect(paintRequiredForMultipleCoats(-100, 10, 2)).toBe(-20);
    expect(paintRequiredForMultipleCoats(100, -10, 2)).toBe(-20);
    expect(paintRequiredForMultipleCoats(100, 10, -2)).toBe(-20);
  });

  test('should handle coats of 0 correctly', () => {
    expect(paintRequiredForMultipleCoats(100, 10, 0)).toBe(0);
  });

  test('should return 0 for area of 0 and coveragePerLiter of 0', () => {
    expect(paintRequiredForMultipleCoats(0, 10, 0)).toBe(0);
  });

  test('should return NaN for coats of 0 and coveragePerLiter of 0', () => {
    expect(paintRequiredForMultipleCoats(10, 0, 0)).toBeNaN();
  });

  test('should return NaN for area of 0 and coveragePerLiter of 0', () => {
    expect(paintRequiredForMultipleCoats(0, 0, 10)).toBeNaN();
  });

  test('should return NaN for area of 0 and coveragePerLiter of 0 and coats of 0', () => {
    expect(paintRequiredForMultipleCoats(0, 0, 0)).toBeNaN();
  });

});
