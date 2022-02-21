export function makeRange({ start = 0, end }) {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i)
  }
  return result
}
