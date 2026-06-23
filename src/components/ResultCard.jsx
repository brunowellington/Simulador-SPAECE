export default function ResultCard({ resultado }) {
  const formatar = (valor) =>
    valor.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  return (
    <div
      className="
        mt-6
        rounded-xl
        bg-white
        shadow-lg
        border
        p-6
      "
    >
      <h2 className="text-xl font-bold mb-4">Resultados</h2>

      <div className="space-y-3">
        <div className="flex justify-between">
          <span>LP Padronizado</span>
          <span>{formatar(resultado.lpPadronizado)}</span>
        </div>

        <div className="flex justify-between">
          <span>MT Padronizado</span>
          <span>{formatar(resultado.mtPadronizado)}</span>
        </div>

        <hr />

        <div className="flex justify-between">
          <span>IN - Desempenho</span>
          <span>{formatar(resultado.inDesempenho)}</span>
        </div>

        <div className="flex justify-between">
          <span>IP - Fluxo</span>
          <span>{formatar(resultado.ipFluxo)}</span>
        </div>

        <hr />

        <div className="flex justify-between text-xl font-bold text-green-600">
          <span>IDE Médio</span>
          <span>{formatar(resultado.ideMedio)}</span>
        </div>
      </div>
    </div>
  );
}
