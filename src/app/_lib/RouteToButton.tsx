"use client";
import { useRouter } from "next/navigation";

export default function RouteToButton(props) {
  const router = useRouter();

  function routeToNewPage(url: String) {
    router.push("/" + url);
  }

  return (
    <button onClick={() => routeToNewPage(props.newUrl)}>
      {props.children}
    </button>
  );
}
