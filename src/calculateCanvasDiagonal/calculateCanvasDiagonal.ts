export default function calculateCanvasDiagonal(
  length: string,
  width: string
) {
  const l = parseInt(length);
  if (l == 0) {
    return 0;
  }
  const w = parseInt(width);
  if (w == 0) {
    return 0;
  }
  return Math.pow(Math.pow(l, 2) + Math.pow(w, 2), 0.5);
}
