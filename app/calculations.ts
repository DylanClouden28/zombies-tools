export function calculateCodes(
  x: number,
  y: number,
  z: number
): [number, number, number] {
  // First code: 2x + 11
  const firstCode = 2 * x + 11;

  // Second code: (2z + y) - 5
  const secondCode = 2 * z + y - 5;

  // Third code: abs((Y+Z)-X)
  const thirdCode = Math.abs(y + z - x);

  return [firstCode, secondCode, thirdCode];
}
