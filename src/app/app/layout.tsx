import NavigationBar from "../_lib/NavigationBar";
import { SignOutButton, UserButton } from "@clerk/nextjs";

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <UserButton afterSignOutUrl="/" />
      {children}
      <NavigationBar />
    </section>
  );
}
