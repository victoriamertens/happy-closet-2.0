export default function Item({ params }: { params: { itemId: string } }) {
  return <p> Item Page: {params.itemId}</p>;
}
