"use client";
import { log } from "console";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function DeleteModal(props: { itemId: number }) {
  console.log("PATHNAME:", usePathname());
  const pathname = usePathname();
  const itemId = props;
  const router = useRouter();

  async function removeItemFromCloset() {
    try {
      const uploadRes = await fetch("/api/item", {
        method: "PUT",
        body: JSON.stringify(props.itemId),
      });
      console.log("Response good:", uploadRes);
      if (uploadRes.status === 200) {
        router.push(href: pathname);
      } else {
        alert("Not 200 status");
      }
    } catch (err) {
      console.log("Error with upload:", err);
    }
  }

  return (
    <div className="fixed inset-0 flex h-full w-full items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50">
      <div className="w-96 rounded-md border bg-white p-8 shadow-lg">
        <Link
          href={pathname}
          className="rounded-md bg-gray-200 px-2 py-1 text-base font-medium text-black shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          X
        </Link>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900">
            Remove item from closet
          </h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-lg text-gray-500">
              Are you sure you want to remove this item?
            </p>
          </div>
          <div className="mt-4 flex justify-center">
            <Link
              className="rounded-md bg-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
              href={pathname}
            >
              Cancel
            </Link>
            <button
              onClick={() => removeItemFromCloset()}
              className="rounded-md bg-yellow-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
