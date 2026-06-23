export function calcularResultado(lpBruto, mtBruto, ipFluxo) {
  const lpPadronizado = ((lpBruto - 117) / 334) * 10;

  const mtPadronizado = ((mtBruto - 111) / 356) * 10;

  const inDesempenho = (lpPadronizado + mtPadronizado) / 2;

  const ideMedio = inDesempenho * ipFluxo;

  return {
    lpPadronizado,
    mtPadronizado,
    inDesempenho,
    ipFluxo,
    ideMedio,
  };
}
