export default function calculateCanvasDiagonal(
  length: string,
  width: string
) {
  const l = parseInt(length);
  const w = parseInt(width);
  return Math.pow(Math.pow(l, 2) + Math.pow(w, 2), 0.5);
}
