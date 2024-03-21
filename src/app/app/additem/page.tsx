"use client";
import { addItem } from "./addItem";

export default function AddItem() {
  return (
    <div>
      <p> AddItem Page</p>
      <button onClick={() => addItem()}>Click Me!</button>
    </div>
  );
}
