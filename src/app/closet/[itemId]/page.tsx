export default function Item({ params }: { params: { itemId: string } }) {
  return <p>Testing Item Page: {params.itemId}</p>;
}
