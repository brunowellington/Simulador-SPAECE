import { WifiOff } from "lucide-react";

export default function Offline() {
  return (
    <div
      className="
        min-h-dvh
        flex
        flex-col
        items-center
        justify-center
        bg-slate-100
        px-4
        text-center
      "
    >
      <WifiOff size={80} className="text-red-500 mb-4" />

      <h1 className="text-3xl font-bold text-slate-800">
        Sem conexão com a internet
      </h1>

      <p className="text-slate-600 mt-3 max-w-md">
        Verifique sua conexão e tente novamente.
      </p>

      <button
        onClick={() => window.location.reload()}
        className="
          mt-6
          bg-blue-600
          text-white
          px-6
          py-3
          rounded-lg
          hover:bg-blue-700
          transition
        "
      >
        Tentar novamente
      </button>
    </div>
  );
}
