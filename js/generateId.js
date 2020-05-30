export default function generateId(size = 6, base = 36) {
  return Math.random().toString(base).substr(2, size);
}