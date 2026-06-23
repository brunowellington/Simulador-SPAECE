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
        bg-white
        rounded-2xl
        shadow-md
        border
        border-slate-200
        border-l-4
        border-l-green-600
        p-6
      "
    >
      <h2 className="text-2xl font-bold text-green-700 mb-6">Resultados</h2>

      <div className="space-y-3">
        <div className="bg-slate-50 border rounded-xl p-4">
          <div className="grid grid-cols-2 items-center">
            <span className="text-sm ">LP Padronizado</span>

            <span className="text-right text-xl font-bold">
              {formatar(resultado.lpPadronizado)}
            </span>
          </div>
        </div>

        <div className="bg-slate-50 border rounded-xl p-4">
          <div className="grid grid-cols-2 items-center">
            <span className="text-sm">MT Padronizado</span>

            <span className="text-right text-xl font-bold">
              {formatar(resultado.mtPadronizado)}
            </span>
          </div>
        </div>

        <div className="bg-slate-50 border rounded-xl p-4">
          <div className="grid grid-cols-2 items-center">
            <span className="text-sm">IN - Desempenho</span>

            <span className="text-right text-xl font-bold">
              {formatar(resultado.inDesempenho)}
            </span>
          </div>
        </div>

        <div className="bg-slate-50 border rounded-xl p-4">
          <div className="grid grid-cols-2 items-center">
            <span className="text-sm">IP - Fluxo</span>

            <span className="text-right text-xl font-bold">
              {formatar(resultado.ipFluxo)}
            </span>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <div className="grid grid-cols-2 items-center">
            <span className="text-sm font-semibold text-green-700">
              IDE Médio
            </span>

            <span className="text-right text-2xl font-bold text-green-700">
              {formatar(resultado.ideMedio)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
