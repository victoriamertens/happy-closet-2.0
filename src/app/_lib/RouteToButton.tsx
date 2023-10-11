"use client";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

type RouteToButtonProps = {
  newUrl: String;
  children: ReactNode;
};

export default function RouteToButton({
  newUrl,
  children,
}: RouteToButtonProps) {
  const router = useRouter();

  function routeToNewPage(url: String) {
    router.push("/" + url);
  }

  return <button onClick={() => routeToNewPage(newUrl)}>{children}</button>;
}
