export function StackTags({ items }: { items: readonly string[] }) {
  return <ul className="stack-tags" aria-label="Technologies">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}
