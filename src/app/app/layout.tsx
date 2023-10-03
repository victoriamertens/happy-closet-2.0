import NavigationBar from "../NavigationBar";

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {children}
      <NavigationBar />
    </section>
  );
}
