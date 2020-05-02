export default function generateId(size=6, base=36) {
  const id = Math.random().toString(base).substr(2, size);

  return id;
}