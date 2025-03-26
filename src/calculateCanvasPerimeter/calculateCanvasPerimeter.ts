export default function calculateCanvasPerimeter(
  length: string,
  width: string
) {
  const l = parseInt(length);
  const w = parseInt(width);
  if (l == 0 || w == 0) {
    return 0;
  }
  return 2 * (parseInt(length) + parseInt(width));
}
