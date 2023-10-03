import NavigationBar from "../_lib/NavigationBar";

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {children}
      <NavigationBar />
    </section>
  );
}
