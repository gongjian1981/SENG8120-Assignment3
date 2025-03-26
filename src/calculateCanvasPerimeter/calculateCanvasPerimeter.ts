export default function calculateCanvasPerimeter(
  length: string,
  width: string
) {
  let l = parseInt(length);
  if (Number.isNaN(l)) {
    return NaN;
  }
  let w = parseInt(width);
  if (Number.isNaN(w)) {
    return NaN;
  }
  if (l == 0 || w == 0) {
    return 0;
  }
  if (l < 0) {
    l = -l;
  }
  if (w < 0) {
    w = -w;
  }
  return 2 * (l + w);
}
