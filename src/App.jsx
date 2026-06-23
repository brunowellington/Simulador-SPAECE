import Header from "./components/Header";
import Home from "./pages/Home";
import Offline from "./pages/Offline";
import useOnlineStatus from "./hooks/useOnlineStatus";

function App() {
  const isOnline = useOnlineStatus();
  if (!isOnline) {
    return <Offline />;
  }
  return (
    <div className="min-h-dvh bg-slate-100">
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-6">
        <Home />
      </main>
    </div>
  );
}

export default App;
