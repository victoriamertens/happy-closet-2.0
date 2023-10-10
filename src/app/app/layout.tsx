import NavigationBar from "../_lib/NavigationBar";
import ProtectedRoute from "../_lib/ProtectedRoutes";

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <section>
        {children}
        <NavigationBar />
      </section>
    </ProtectedRoute>
  );
}
