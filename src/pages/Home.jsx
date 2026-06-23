import { useState } from "react";
import InputField from "../components/InputField";
import toast from "react-hot-toast";
import ResultCard from "../components/ResultCard";
import { calcularResultado } from "../services/calculator";

export default function Home() {
  const [lp, setLp] = useState("");
  const [mt, setMt] = useState("");
  const [ip, setIp] = useState("");

  const [resultado, setResultado] = useState(null);

  const formatarNumero = (valor) => {
    valor = valor.replace(/[^0-9,]/g, "");

    const partes = valor.split(",");

    if (partes.length > 2) {
      valor = partes[0] + "," + partes[1];
    }

    return valor;
  };

  const handleCalcular = () => {
    if (!lp || !mt || !ip) {
      toast.error("Preencha todos os campos.", {
        id: "campos-obrigatorios",
      });
      return;
    } else {
      toast.success("Cálculo realizado com sucesso!");
    }
    const lpNumero = parseFloat(lp.replace(",", "."));
    const mtNumero = parseFloat(mt.replace(",", "."));
    const ipNumero = parseFloat(ip.replace(",", "."));

    const resultadoFinal = calcularResultado(lpNumero, mtNumero, ipNumero);

    setResultado(resultadoFinal);
  };

  const handleLimpar = () => {
    if (!lp && !mt && !ip && !resultado) {
      return;
    }

    setLp("");
    setMt("");
    setIp("");
    setResultado(null);
  };

  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        p-4
      "
    >
      <div
        className="
          bg-white
          shadow-lg
          rounded-2xl
          p-6
          w-full
          max-w-md
        "
      >
        <h1
          className="
            text-2xl
            font-bold
            text-center
            mb-6
          "
        >
          Simulador SPAECE - IDE MÉDIO
        </h1>

        <InputField
          label="Pontuação LP"
          value={lp}
          placeholder={"ex. 290,43"}
          onChange={(e) => setLp(formatarNumero(e.target.value))}
        />

        <InputField
          label="Pontuação MT"
          value={mt}
          placeholder={"ex. 308,29"}
          onChange={(e) => setMt(formatarNumero(e.target.value))}
        />

        <InputField
          label="IP - Fluxo"
          value={ip}
          placeholder={"ex. 0,99"}
          onChange={(e) => setIp(formatarNumero(e.target.value))}
        />

        <div className="flex gap-3 mt-6">
          <button
            onClick={handleCalcular}
            className="
      flex-1
      bg-blue-600
      text-white
      py-3
      rounded-lg
      font-semibold
      hover:bg-blue-700
      transition
    "
          >
            Calcular
          </button>

          <button
            onClick={handleLimpar}
            disabled={!lp && !mt && !ip && !resultado}
            className="
    flex-1
    py-3
    rounded-lg
    font-semibold
    disabled:bg-gray-100
    disabled:text-gray-400
    disabled:cursor-not-allowed
    bg-gray-200
  "
          >
            Limpar
          </button>
        </div>

        {resultado && <ResultCard resultado={resultado} />}
      </div>
    </div>
  );
}
